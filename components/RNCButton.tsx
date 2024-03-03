import { ActivityIndicator, Text, TouchableOpacity, View, requireNativeComponent } from 'react-native';
import styles from '../index'

type propsType = {
    label: string;
    onPress?: any;
    loading?: boolean;
    color?: 'primary' | 'info' | 'error' | 'success' | 'black' | string | undefined;
    startIcon?: string;
    disabled?: boolean;
    customStyles?: any;
};

export default function RNCButton(props: propsType) {
    const { label, onPress, loading, color, startIcon, disabled, customStyles } = props;
    const colorSwitch = (color: 'primary' | 'info' | 'error' | 'success' | 'black' | string | undefined = 'primary') => {
        switch (color) {
            case "primary":
                return styles.btnPrimary;
                break
            case "info":
                return styles.btnInfo;
                break
            case "error":
                return styles.btnDanger;
                break
            case "success":
                return styles.btnSuccess;
                break
            case "black":
                return styles.btnBlack;
                break
            default:
                return {
                    backgroundColor: color,
                    color: "white",
                    // width: '100%',
                    padding: 12,
                    paddingHorizontal: 25,
                    fontSize: 16,
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.32,
                    shadowRadius: 5.46,

                    elevation: 9,
                }
        }
    }
    return (
        <>
            <TouchableOpacity
                disabled={disabled}
                onPress={onPress}
                style={[colorSwitch(color), { ...customStyles }]}>
                {loading ? (
                    <ActivityIndicator color="white" />
                ) : (
                    <View style={[styles.flexRow, styles.flexCenter]}>
                        {startIcon && startIcon}
                        <Text
                            style={[
                                styles.textWhite,
                                styles.textCenter,
                                styles.fs5,
                            ]}>
                            {label}
                        </Text>
                    </View>
                )}
            </TouchableOpacity>
        </>
    );
}