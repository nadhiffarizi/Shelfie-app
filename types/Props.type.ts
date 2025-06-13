import { ReactNode } from "react"
import { GestureResponderEvent, KeyboardTypeOptions, StyleProp, TextStyle } from "react-native"

export type Props = {
    children?: ReactNode,
    style?: any // stylesheet object or any
}

export type textInputProps = {
    children?: ReactNode,
    placeholder?: string,
    keyBoardType?: KeyboardTypeOptions | undefined,
    secureTextEntry?: boolean | undefined
    style?: StyleProp<TextStyle> // stylesheet object or any
    onchangeText?: any | undefined,
    value?: any | undefined
}

export type viewProps = {
    children?: ReactNode,
    safe?: boolean,
    style?: any // stylesheet object or any
}

export type textProps = {
    children?: ReactNode,
    style?: StyleProp<TextStyle> // stylesheet object or any,
    title?: boolean
}

export type buttonProps = {
    style?: any;
    children?: ReactNode;
    onPress?: (event: GestureResponderEvent) => void;
};