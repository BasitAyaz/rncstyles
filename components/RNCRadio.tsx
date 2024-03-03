import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styles, { _danger, _dark, _info, _secondary, _success, _white } from "../index";

type propsType = {
    label: string,
    optionsList: {
        value: any,
        displayName: string
    }[],
    onChange?: any,
    color?: 'primary' | 'secondary' | 'error' | 'success' | 'info' | string | undefined,
    direction?: 'row' | 'column'
}

export default function RNCRadio(props: propsType) {
    const { label, optionsList, onChange, color, direction } = props
    const [selectedValue, setSelectedValue] = useState<any>()

    const colorSwitch = (color: 'primary' | 'secondary' | 'error' | 'success' | 'info' | string | undefined = "primary") => {
        switch (color) {
            case "primary":
                return _dark;
            case "secondary":
                return _secondary;
            case "success":
                return _success;
            case "error":
                return _danger;
            case "info":
                return _info;
            default:
                return color
        }

    }

    const innerStyles = StyleSheet.create({
        radio: {
            width: 25,
            height: 25,
            borderRadius: 25,
        },
        radioSelected: {
            backgroundColor: colorSwitch(color)
        },
        radioUnSelected: {
            backgroundColor: _white,
            borderWidth: 1,
            borderColor: colorSwitch(color)
        }
    })

    return <>
        <View>
            <Text style={[styles.mb1, styles.fs5, { color: colorSwitch(color) }]}>{label}</Text>
            <View style={{ flexDirection: direction }}>
                {optionsList && Array.isArray(optionsList) && optionsList.map((x, i) => <TouchableOpacity
                    style={[styles.flexRow, styles.pb1, styles.alignItemsCenter, styles.me1]} onPress={() => {
                        setSelectedValue(x.value)
                        if (onChange) {
                            onChange(x.value)
                        }
                    }} key={i}>
                    <View style={[innerStyles.radio, selectedValue == x.value ? innerStyles.radioSelected : innerStyles.radioUnSelected]}></View>
                    <Text style={[styles.ps1, styles.textBold, { color: colorSwitch(color) }]}>{x.displayName}</Text>
                </TouchableOpacity>)}
            </View>
        </View>
    </>
}