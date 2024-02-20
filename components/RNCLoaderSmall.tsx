import { View, ActivityIndicator } from "react-native"
import styles, { _dark } from "../index"

type propsType = {
    color?: string
}

export default function RNCLoaderSmall(props: propsType) {
    const { color } = props
    return <>
        <View style={[styles.p2, styles.flexCenter]}>
            <View style={[styles.rounded, styles.shadow2, styles.flexCenter, styles.bgLight, styles.p2, { width: 50, height: 50 }]}>
                <ActivityIndicator color={color ? color : _dark} size={30} />
            </View>
        </View>
    </>
}