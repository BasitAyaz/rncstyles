import { TextInput, View } from "react-native";
import styles, { _secondary } from "../index";

type propsType = {
    label: string,
    icon?: any,
    onChangeText?: any,
    value?: any,
    disabled?: boolean
    required?: boolean
}

export default function BATextarea(props: propsType) {
    const { label, icon, onChangeText, value, disabled, required } = props

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
                    styles.borderPrimary,
                    icon && { paddingLeft: 50 }
                ]}
                placeholder={label}
            />

        </View>
    </>
}