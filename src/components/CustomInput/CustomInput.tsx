import { Text } from "@components";
import { colors } from "@utils";
import React from "react";
import { StyleSheet, TextInputProps, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

type CustomInputProps = {
    placeholder: string;
    error?: string | false | undefined;
} & TextInputProps;

export default function CustomInput({ placeholder, style, error, ...props }: CustomInputProps) {
    return (
        <>
            <View>
                <Text weight="200" style={{ color: colors.white, fontSize: 14 }}>
                    {error}
                </Text>
            </View>
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
        paddingLeft: 15
    }
});
