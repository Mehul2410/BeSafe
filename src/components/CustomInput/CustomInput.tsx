import Text from "../text/Text";
import { colors } from "@utils";
import React from "react";
import { StyleSheet, TextInputProps, TextInput } from "react-native";

type CustomInputProps = {
    placeholder: string;
    error?: string | false | undefined;
} & TextInputProps;

export default function CustomInput({ placeholder, style, error, ...props }: CustomInputProps) {
    return (
        <>
            {error && (
                <Text weight="700" style={{ color: "red", fontSize: 14 }}>
                    {error}
                </Text>
            )}

            <TextInput style={[styles.text, style]} placeholder={placeholder} {...props} />
        </>
    );
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
