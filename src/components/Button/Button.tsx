import Text from "../text/Text";
import React from "react";
import { StyleSheet } from "react-native";
import { TextProps } from "react-native-elements";

type btnProps = {
    weight?: "200" | "400" | "700" | "900" | undefined;
    btnName: string;
    bgColor?: string;
    textColor?: string;
    size?: number;
} & TextProps;

export default function Button({
    weight,
    btnName,
    bgColor,
    textColor,
    style,
    size,
    ...props
}: btnProps) {
    return (
        <Text
            weight={weight}
            style={[
                styles.button,
                {
                    backgroundColor: bgColor ? bgColor : "#1D0ECC",
                    color: textColor ? textColor : "#FFF"
                },
                style
            ]}
            {...props}
        >
            {btnName}
        </Text>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        textAlign: "center",
        width: "100%",
        borderRadius: 10,
        marginVertical: 8
    }
});

// backgroundColor: bgColor ? bgColor : "#0085FF",
