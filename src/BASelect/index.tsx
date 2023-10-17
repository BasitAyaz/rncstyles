import { Modal, ScrollView, Text, ToastAndroid, TouchableOpacity, View } from "react-native"
import styles from "../styling"
import { useEffect, useState } from "react"

type BAInputProps = {
    label?: string,
    onSelect?: (e: any) => void,
    hintText?: string,
    required?: boolean,
    errorText?: string,
    value?: any,
    disabled?: boolean,
    datasourse: any[],
    displayField: string,
    valueField: string,
    labelStyles?: undefined | any,
    color?: 'primary' | 'secondary' | 'success' | 'error' | string
}

export default function BASelect(props: BAInputProps) {
    const {
        label,
        onSelect,
        hintText,
        required,
        errorText,
        value,
        disabled,
        labelStyles,
        color,
        datasourse,
        displayField,
        valueField,
    } = props

    const [isEmpty, setIsEmpty] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [selectedVal, setSelectedVal] = useState()
    let selectVal: any;



    let labelColorSwitch = (color: 'primary' | 'secondary' | 'success' | 'error' | string | undefined) => {
        switch (color) {
            case 'primary':
                return styles.textPrimary;
            case 'secondary':
                return styles.textSecondary;
            case 'success':
                return styles.textSuccess;
            case 'error':
                return styles.textDanger;
            default:
                return { color: color };
        }
    }
    let inputColorSwitch = (color: 'primary' | 'secondary' | 'success' | 'error' | string | undefined) => {
        switch (color) {
            case 'primary':
                return styles.borderPrimary;
            case 'secondary':
                return styles.borderSecondary;
            case 'success':
                return styles.borderSuccess;
            case 'error':
                return styles.borderDanger;
            default:
                return { borderColor: color };
        }
    }

    let closeHandle = () => {
        setOpenModal(false)
        if (required && !selectVal) {
            setIsEmpty(true)
            ToastAndroid.show(`${errorText ? errorText : label + ' is Required'}`, ToastAndroid.SHORT)
        } else {
            setIsEmpty(false)
        }
    }

    useEffect(() => {
        if (value) {
            let i = datasourse.findIndex(x => x[valueField] == value)
            if (i > -1) {
                selectVal = datasourse[i][displayField]
                setSelectedVal(datasourse[i][displayField])
            }
        }
    }, [props])


    return <>
        <Modal
            animationType="slide"
            transparent={true}
            visible={openModal}
            onRequestClose={closeHandle}
        >
            <View
                style={[
                    styles.h100,
                    styles.justifyContentBetween,
                    { backgroundColor: 'rgba(0,0,0,0.3)' }
                ]}
            >
                <TouchableOpacity style={styles.flex1} onPress={closeHandle}></TouchableOpacity>
                <View
                    style={[
                        styles.p2,
                        styles.bgWhite,
                        styles.roundedTopLeft,
                        styles.roundedTopRight,
                        styles.w100,
                        { maxHeight: '80%' }
                    ]}
                >
                    <Text style={[styles.fs4, styles.py1, styles.textBold, styles.textPrimary]}>{label}</Text>
                    <ScrollView>
                        {datasourse.map((x, i) => <TouchableOpacity
                            onPress={() => {
                                selectVal = (x[displayField])
                                setSelectedVal(x[displayField])
                                onSelect ? onSelect(valueField ? x[valueField] : x) : null
                                closeHandle()
                            }}
                            style={[
                                styles.p2,
                                styles.borderBottom1
                            ]}
                            key={i}
                        >
                            <Text
                                style={[
                                    styles.fs5,
                                    styles.textBold
                                ]}
                            >{x[displayField]}</Text>
                        </TouchableOpacity>)}
                    </ScrollView>
                </View>
            </View>
        </Modal>
        <View
            style={styles.mb1}
        >
            {label && <Text
                style={[
                    styles.textBold,
                    styles.p1,
                    styles.fs5,
                    labelColorSwitch(color),
                    labelStyles && { ...labelStyles }
                ]}
            >{label}{required && '*'}</Text>}

            <TouchableOpacity
                onPress={() => {
                    setOpenModal(true)
                }}
                {...props}
                disabled={disabled}
                style={[
                    styles.input,
                    styles.border1,
                    isEmpty ? styles.borderDanger : inputColorSwitch(color),
                    disabled ? { backgroundColor: 'lightgray' } : null
                ]}
            >
                <Text style={styles.fs5}>{selectedVal ? selectedVal : label}</Text>

            </TouchableOpacity>

            {hintText && <Text
                style={[
                    styles.px1,
                    { color: 'grey' }
                ]}
            >{hintText}</Text>}
        </View>
    </>
}