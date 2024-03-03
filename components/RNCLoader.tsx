import { ActivityIndicator, Modal, View } from 'react-native'
import styles, { _danger, _dark, _info, _secondary, _success } from '../index'

type propsType = {
    open: boolean,
    loader?: string,
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | string | undefined
}

export default function RNCLoader(props: propsType) {
    const { open, loader, color } = props

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
        <Modal transparent={true} visible={open}>
            <View style={[styles.h100, styles.flexCenter, { backgroundColor: 'rgba(0,0,0,.4)' }]}>
                <View style={[styles.bgWhite, styles.rounded, styles.flexCenter, { width: 80, height: 80 }]}>
                    <ActivityIndicator size={50} color={colorSwitch(color)} />
                </View>
            </View>
        </Modal>
    </>
}