import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { useState } from "react";
import styles, { _dark, _secondary } from "../index";

type propsType = {
    label: string,
    icon?: string,
    onChangeText?: any,
    value?: any,
    secureTextEntry?: boolean,
    disabled?: boolean
    required?: boolean,
    keyboardType?: "default" | 'numeric' | 'email-address' | "ascii-capable" | 'numbers-and-punctuation' | 'url' | 'number-pad' | 'phone-pad' | 'name-phone-pad' | 'decimal-pad' | 'twitter' | 'web-search' | 'visible-password'
}

export default function RNCInput(props: propsType) {
    const { label, icon, onChangeText, value, secureTextEntry, disabled, required, keyboardType } = props
    const [showText, setShowText] = useState(false)

    return <>
        <View style={styles.positionRelative}>
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
                    styles.borderPrimary,
                    icon && { paddingLeft: 45 }
                ]}
                placeholder={label}
            />
            {secureTextEntry && <View style={[styles.positionAbsolute, { right: 0, top: 0, zIndex: 1, padding: 10 }]}>
                <TouchableOpacity onPress={() => {
                    setShowText(!showText)
                }}><Text>{showText ? 'Hide' : 'Show'}</Text></TouchableOpacity>
            </View>}
        </View>
    </>
}