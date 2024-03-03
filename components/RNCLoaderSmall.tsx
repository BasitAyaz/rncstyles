import { View, ActivityIndicator } from "react-native"
import styles, { _danger, _dark, _info, _secondary, _success } from "../index"

type propsType = {
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | string | undefined
}

export default function RNCLoaderSmall(props: propsType) {
    const { color } = props
    const colorSwitch = (color: 'primary' | 'secondary' | 'success' | 'error' | 'info' | string | undefined = 'primary') => {
        switch (color) {
            case "primary":
                return _dark;
            case "success":
                return _success;
            case "error":
                return _danger;
            case "secondary":
                return _secondary;
            case "info":
                return _info;
            default:
                return color
        }
    }
    return <>
        <View style={[styles.p2, styles.flexCenter]}>
            <View style={[styles.rounded, styles.shadow2, styles.flexCenter, styles.bgLight, styles.p2, { width: 50, height: 50 }]}>
                <ActivityIndicator color={colorSwitch(color)} size={30} />
            </View>
        </View>
    </>
}