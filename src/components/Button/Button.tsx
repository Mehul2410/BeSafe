import { Text } from "@components";
import React from "react";
import { StyleSheet } from "react-native";
import { TextProps } from "react-native-elements";

type btnProps = {
    weight?: "200" | "400" | "700" | "900" | undefined;
    btnName: string;
} & TextProps;

export default function Button({ weight, btnName, style, ...props }: btnProps) {
    return (
        <Text weight={weight} style={[styles.button, style]} {...props}>
            {btnName}
        </Text>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 13,
        textAlign: "center",
        backgroundColor: "#0085FF",
        color: "#FFF",
        width: "100%",
        borderRadius: 15
    }
});
