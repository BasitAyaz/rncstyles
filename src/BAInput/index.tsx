import { Text, TextInput, ToastAndroid, View } from "react-native"
import styles from "../styling"
import { useState } from "react"

type BAInputProps = {
    label?: string,
    placeholder?: string,
    onChangeText?: (e: any) => void,
    hintText?: string,
    required?: boolean,
    errorText?: string,
    emailValidation?: boolean,
    secureTextEntry?: boolean,
    value?: any,
    disabled?: boolean,
    labelStyles?: undefined | any,
    onBlur?: (e: any) => void,
    color?: 'primary' | 'secondary' | 'success' | 'error' | string
}

export default function BAInput(props: BAInputProps) {
    const {
        label,
        placeholder,
        onChangeText,
        hintText,
        required,
        errorText,
        emailValidation,
        value,
        disabled,
        labelStyles,
        color,
        onBlur,
    } = props

    const [isEmpty, setIsEmpty] = useState(false)
    const [inputText, setInputText] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(false)

    // Regular Expressions

    // for Email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



    const validateEmail = (e: string) => {
        if (emailPattern.test(e)) {
            setIsEmailValid(true)
        } else {
            setIsEmailValid(false)
        }
    }
    let labelColorSwitch = (color: 'primary' | 'secondary' | 'success' | 'error' | string | undefined) => {
        switch (color) {
            case 'primary':
                return styles.textPrimary;
            case 'secondary':
                return styles.textSecondary;
            case 'success':
                return styles.textSuccess;
            case 'error':
                return styles.textDanger;
            default:
                return { color: color };
        }
    }
    let inputColorSwitch = (color: 'primary' | 'secondary' | 'success' | 'error' | string | undefined) => {
        switch (color) {
            case 'primary':
                return styles.borderPrimary;
            case 'secondary':
                return styles.borderSecondary;
            case 'success':
                return styles.borderSuccess;
            case 'error':
                return styles.borderDanger;
            default:
                return { borderColor: color };
        }
    }


    return <>
        <View style={styles.mb1}>
            {label && <Text style={[styles.textBold, styles.p1, styles.fs5, labelColorSwitch(color), labelStyles && { ...labelStyles }]}>{label}{required && '*'}</Text>}

            <TextInput
                {...props}
                editable={!disabled}
                value={value ? value : inputText}
                onChangeText={(e) => {
                    setInputText(e)
                    if (emailValidation) { validateEmail(e) }
                    onChangeText ? onChangeText(e) : null
                }}
                onBlur={(e) => {
                    onBlur ? onBlur(e) : null
                    if (required && !inputText) {
                        setIsEmpty(true)
                        ToastAndroid.show(`${errorText ? errorText : label + ' is Required'}`, ToastAndroid.SHORT)
                    } else {
                        setIsEmpty(false)
                    }
                }}
                placeholder={placeholder}
                style={[
                    (emailValidation && !isEmailValid) ? styles.textDanger : styles.textSecondary,
                    styles.input,
                    styles.border1,
                    isEmpty ? styles.borderDanger : inputColorSwitch(color),
                    disabled ? { backgroundColor: 'lightgray' } : null
                ]}
            />

            {hintText && <Text
                style={[
                    styles.px1,
                    { color: 'grey' }
                ]}>{hintText}</Text>}
        </View>
    </>
}