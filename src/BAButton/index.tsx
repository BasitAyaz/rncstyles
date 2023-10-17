import { Text, TouchableOpacity } from "react-native";
import styles from "../styling";

type BAButtonProps = {
    label: string,
    onPress?: () => void,
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'black' | 'light' | 'info' | string | undefined,
    textColor?: string,
    disabled?: boolean
}




export default function BAButton(props: BAButtonProps) {
    const { label, onPress, color, textColor, disabled } = props

    let colorSwitch = (btnColor: 'primary' | 'secondary' | 'success' | 'danger' | 'black' | 'light' | 'info' | string | undefined = 'primary') => {
        switch (btnColor) {
            case 'primary':
                return styles.btnPrimary;
            case 'secondary':
                return styles.btnSecondary;
            case 'success':
                return styles.btnSuccess;
            case 'danger':
                return styles.btnDanger;
            case 'black':
                return styles.btnBlack;
            case 'info':
                return styles.btnInfo;
            case 'light':
                return styles.btnLight;
            default:
                return {
                    backgroundColor: color,
                    padding: 12,
                    paddingHorizontal: 25,
                    fontSize: 16,
                    borderRadius: 100,
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

    return <>
        <TouchableOpacity disabled={disabled} onPress={onPress} style={[disabled ? styles.btnSecondary : colorSwitch(color)]}>
            <Text style={[textColor ? { color: textColor } : styles.textWhite, styles.fs5, styles.textCenter]}>{label}</Text>
        </TouchableOpacity>
    </>
} 