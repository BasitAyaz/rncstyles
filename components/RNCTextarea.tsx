import { TextInput, View } from "react-native";
import styles, { _secondary } from "../index";

type propsType = {
    label: string,
    icon?: any,
    onChangeText?: any,
    value?: any,
    disabled?: boolean,
    required?: boolean,
    color: 'primary' | 'secondary' | 'success' | 'info' | 'error' | 'black' | string | undefined
}

export default function RNCTextarea(props: propsType) {
    const { label, icon, onChangeText, value, disabled, required, color } = props

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
            {icon && <View style={[styles.positionAbsolute, { left: 0, top: 0, zIndex: 1, padding: 10 }]}>
                {icon}
            </View>}
            <TextInput
                editable={!disabled}
                value={value}
                numberOfLines={4}
                textAlignVertical="top"
                multiline={true}
                onChangeText={onChangeText}
                style={[
                    styles.input,
                    styles.bgWhite,
                    styles.border2,
                    colorSwitch(color),
                    icon && { paddingLeft: 50 }
                ]}
                placeholder={label}
            />

        </View>
    </>
}