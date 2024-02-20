import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from '../index'

type propsType = {
    options: {
        label: string,
        value: string
    }[],
    onChange: (e: any) => void
}

export default function BASwitchSelect(props: propsType) {
    const { options, onChange } = props
    const [selected, setSelected] = useState<any>(options[0].value)
    return <>
        <View style={[styles.flexRow, styles.roundedPill, styles.bgLight, { padding: 5 }]}>
            {options.map((x: any, i: any) => <TouchableOpacity
                style={[
                    styles.p1,
                    styles.roundedPill,
                    selected === x.value ? styles.bgPrimary : styles.bgLight,
                    { flex: 1 }
                ]}
                onPress={() => {
                    onChange(x.value)
                    setSelected(x.value)
                }}
                key={i}
            >
                <Text style={[styles.textCenter, styles.fs5, selected === x.value ? styles.textWhite : styles.textPrimary]}>{x.label}</Text>
            </TouchableOpacity>)}

        </View>
    </>
}