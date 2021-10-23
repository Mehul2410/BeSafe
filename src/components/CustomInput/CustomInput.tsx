import { colors } from "@utils";
import React from "react";
import { StyleSheet, TextInputProps } from "react-native";
import { TextInput } from "react-native-gesture-handler";

type CustomInputProps = {
    placeholder: string;
} & TextInputProps;

export default function CustomInput({ placeholder, style, ...props }: CustomInputProps) {
    return <TextInput style={[styles.text, style]} placeholder={placeholder} {...props} />;
}

const styles = StyleSheet.create({
    text: {
        backgroundColor: "#FFF",
        color: colors.quatnary,
        height: 60,
        width: "100%",
        fontFamily: "Chillax-Regular",
        fontSize: 18,
        borderRadius: 15,
        paddingLeft: 15,
        marginVertical: 12
    }
});
