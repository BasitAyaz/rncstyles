import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from '../index'

type propsType = {
    options: {
        label: string,
        value: string
    }[],
    onChange: (e: any) => void
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | string | undefined
}

export default function RNCSwitchSelect(props: propsType) {
    const { options, onChange, color } = props
    const [selected, setSelected] = useState<any>(options[0].value)

    const backgroundColorSwitch = (color: 'primary' | 'secondary' | 'success' | 'error' | 'info' | string | undefined = 'primary') => {
        switch (color) {
            case "primary":
                return styles.bgPrimary;
            case "info":
                return styles.bgInfo;
            case "secondary":
                return styles.bgSecondary;
            case "success":
                return styles.bgSuccess;
            case "error":
                return styles.bgDanger;
            default:
                return {
                    backgroundColor: color
                }
        }
    }
    const borderColorSwitch = (color: 'primary' | 'secondary' | 'success' | 'error' | 'info' | string | undefined = 'primary') => {
        switch (color) {
            case "primary":
                return styles.borderPrimary;
            case "info":
                return styles.borderInfo;
            case "secondary":
                return styles.borderSecondary;
            case "success":
                return styles.borderSuccess;
            case "error":
                return styles.borderDanger;
            default:
                return {
                    borderColor: color
                }
        }
    }
    const textColorSwitch = (color: 'primary' | 'secondary' | 'success' | 'error' | 'info' | string | undefined = 'primary') => {
        switch (color) {
            case "primary":
                return styles.textPrimary;
            case "info":
                return styles.textInfo;
            case "secondary":
                return styles.textSecondary;
            case "success":
                return styles.textSuccess;
            case "error":
                return styles.textDanger;
            default:
                return {
                    color: color
                }
        }
    }

    return <>
        <View style={[styles.flexRow, styles.roundedPill, styles.border2, borderColorSwitch(color), styles.bgLight, { padding: 5 }]}>
            {options.map((x: any, i: any) => <TouchableOpacity
                style={[
                    styles.p1,
                    styles.roundedPill,
                    selected === x.value ? backgroundColorSwitch(color) : styles.bgLight,
                    { flex: 1 }
                ]}
                onPress={() => {
                    onChange(x.value)
                    setSelected(x.value)
                }}
                key={i}
            >
                <Text style={[styles.textCenter, styles.fs5, selected === x.value ? styles.textWhite : textColorSwitch(color)]}>{x.label}</Text>
            </TouchableOpacity>)}

        </View>
    </>
}