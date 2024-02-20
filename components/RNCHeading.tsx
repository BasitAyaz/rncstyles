import { Text, View } from "react-native";
import styles from "../index";

type propsType = {
    title: string,
    subTitle?: string,
    iconButton?: any
}

export default function RNCScreenHeading(props: propsType) {
    const { title, subTitle, iconButton } = props
    return <>
        <View
            style={[styles.py3, styles.flexRow, styles.justifyContentBetween]}>
            <View>
                <Text
                    style={[
                        styles.fs1,
                        styles.textPrimary,
                        styles.textBold,
                        styles.mb1
                    ]}
                >{title}</Text>
                {subTitle && <Text
                    style={[
                        styles.fs5,
                        styles.textSecondary
                    ]}
                >{subTitle}</Text>}
            </View>
            <View>
                {iconButton}
            </View>
        </View>
    </>
}