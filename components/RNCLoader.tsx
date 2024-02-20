import { ActivityIndicator, Modal, View } from 'react-native'
import styles, { _dark } from '../index'

type propsType = {
    open: boolean,
    loader?: string
}

export default function RNCLoader(props: propsType) {
    const { open, loader } = props
    return <>
        <Modal transparent={true} visible={open}>
            <View style={[styles.h100, styles.flexCenter, { backgroundColor: 'rgba(0,0,0,.4)' }]}>
                <View style={[styles.bgWhite, styles.rounded, styles.flexCenter, { width: 80, height: 80 }]}>
                    <ActivityIndicator size={50} color={loader ? loader : _dark} />
                </View>
            </View>
        </Modal>
    </>
}