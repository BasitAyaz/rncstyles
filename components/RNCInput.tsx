import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { useState } from "react";
import styles from '../index'

type propsType = {
    label: string,
    icon?: string,
    placeholder?: string,
    onChangeText?: any,
    value?: any,
    secureTextEntry?: boolean,
    disabled?: boolean
    required?: boolean,
    customStyles?: any,
    color?: 'primary' | 'secondary' | 'success' | 'info' | 'error' | 'black' | string | undefined,
    keyboardType?: "default" | 'numeric' | 'email-address' | "ascii-capable" | 'numbers-and-punctuation' | 'url' | 'number-pad' | 'phone-pad' | 'name-phone-pad' | 'decimal-pad' | 'twitter' | 'web-search' | 'visible-password'
}

export default function RNCInput(props: propsType) {
    const { label, icon, onChangeText, value, secureTextEntry, disabled, required, keyboardType, customStyles, placeholder, color } = props
    const [showText, setShowText] = useState(false)

    const colorSwitch = (color: 'primary' | 'secondary' | 'success' | 'info' | 'error' | 'black' | string | undefined = 'primary') => {
        switch (color) {
            case "primary":
                return styles.borderPrimary;
            case "info":
                return styles.borderInfo;
            case "black":
                return styles.borderBlack;
            case "error":
                return styles.borderDanger;
            case "secondary":
                return styles.borderSecondary;
            case "success":
                return styles.borderSuccess;
            default:
                return {
                    borderColor: color
                }
        }
    }

    return <>
        <View style={styles.positionRelative}>
            <Text style={styles.fs5}>{label}</Text>
            {icon && <View style={[styles.positionAbsolute, { left: 0, top: 0, zIndex: 1, padding: 10 }]}>
                {icon}
            </View>}
            <TextInput
                keyboardType={keyboardType}
                editable={!disabled}
                secureTextEntry={secureTextEntry && !showText}
                value={value}
                onChangeText={onChangeText}
                style={[
                    styles.input,
                    styles.bgWhite,
                    styles.border2,
                    colorSwitch(color),
                    { ...customStyles },
                    icon && { paddingLeft: 45 }
                ]}
                placeholder={placeholder}
            />
            {secureTextEntry && <View style={[styles.positionAbsolute, { right: 0, top: 0, zIndex: 1, padding: 10 }]}>
                <TouchableOpacity onPress={() => {
                    setShowText(!showText)
                }}><Text>{showText ? 'Hide' : 'Show'}</Text></TouchableOpacity>
            </View>}
        </View>
    </>
}