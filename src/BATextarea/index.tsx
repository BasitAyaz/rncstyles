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
    value?: any,
    disabled?: boolean,
    labelStyles?: undefined | any,
    onBlur?: (e: any) => void,
    numberOfLines?: number,
    maxLength?: number,
    color?: 'primary' | 'secondary' | 'success' | 'error' | string
}

export default function BATextarea(props: BAInputProps) {
    const {
        label,
        placeholder,
        onChangeText,
        required,
        errorText,
        value,
        disabled,
        labelStyles,
        color,
        hintText,
        onBlur,
        maxLength,
        numberOfLines
    } = props

    const [isEmpty, setIsEmpty] = useState(false)
    const [inputText, setInputText] = useState('')




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
                maxLength={maxLength}
                multiline={true}
                numberOfLines={numberOfLines ? numberOfLines : 4}
                {...props}
                editable={!disabled}
                value={value ? value : inputText}
                onChangeText={(e) => {
                    setInputText(e)
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
                    { verticalAlign: 'top' },
                    styles.input,
                    styles.border1,
                    isEmpty ? styles.borderDanger : inputColorSwitch(color),
                    disabled ? { backgroundColor: 'lightgray' } : null
                ]}
            />
            <View style={[styles.flexRow, styles.justifyContentBetween]}>
                {hintText && <Text
                    style={[
                        styles.px1,
                        { color: 'grey' }
                    ]}>{hintText}</Text>}
                {maxLength && <Text
                    style={[
                        styles.px1,
                        { color: 'grey' }
                    ]}>{inputText.length}/{maxLength}</Text>}
            </View>
        </View>
    </>
}