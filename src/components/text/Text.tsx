import React, { ReactNode, ReactElement } from "react";
import { Text as DefaultText, TextProps as NativeTextProps } from "react-native";

type TextProps = {
    weight: "900" | "700" | "400" | "200";
    children: ReactNode;
} & NativeTextProps;

const defaultProps = {
    weight: "700"
};

export default function Text({ children, style, weight, ...props }: TextProps): ReactElement {
    let fontSize;
    let fontFamily;
    if (weight === "900") {
        fontFamily = "Chillax-Bold";
        fontSize = 45;
    } else if (weight === "700") {
        fontFamily = "Chillax-Medium";
        fontSize = 30;
    } else if (weight === "400") {
        fontFamily = "Chillax-Regular";
        fontSize = 25;
    } else if (weight === "200") {
        fontFamily = "Chillax-Light";
        fontSize = 15;
    }

    return (
        <DefaultText {...props} style={[{ fontSize, fontFamily }, style]}>
            {children}
        </DefaultText>
    );
}

Text.defaultProps = defaultProps;
