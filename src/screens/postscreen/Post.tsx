import React, { useEffect, useState } from "react";
import { Background, CustomInput, Text } from "@components";
import { Image, Keyboard, KeyboardAvoidingView, View } from "react-native";
import { StyleSheet } from "react-native";

export function Post() {
    return (
        <Background>
            <View
                style={{
                    position: "absolute",
                    height: "90%",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text weight="700" style={{ color: "#FFF", fontSize: 21, textAlign: "center" }}>
                    Your details will be verified before processing!
                </Text>
                <Text
                    weight="400"
                    style={{
                        color: "#FFF",
                        fontSize: 17,
                        textDecorationLine: "underline",
                        textAlign: "center",
                        marginVertical: 18
                    }}
                >
                    Strict action will be taken for registering false complint!!!
                </Text>
                <View
                    style={{
                        width: "90%",
                        backgroundColor: "#1D0ECC",
                        paddingHorizontal: 20,
                        paddingVertical: 22,
                        borderRadius: 15,
                        zIndex: 1000
                    }}
                >
                    <CustomInput placeholder="Reason of complaint" />
                    <CustomInput placeholder="Location" />
                    <CustomInput placeholder="Situation" />
                    <CustomInput placeholder="Near by" />
                    <CustomInput placeholder="Situation proof" />
                    <CustomInput placeholder="Your nearest police station" />
                </View>
            </View>
        </Background>
    );
}
