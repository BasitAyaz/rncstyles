import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import styles from '../index';

type propsType = {
    label: string;
    onPress?: any;
    loading?: boolean;
    color?: 'error' | 'success' | undefined;
    startIcon?: string;
    disabled?: boolean;
};

export default function RNCButton(props: propsType) {
    const { label, onPress, loading, color, startIcon, disabled } = props;
    return (
        <>
            <TouchableOpacity
                disabled={disabled}
                onPress={onPress}
                style={[styles.btn]}>
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