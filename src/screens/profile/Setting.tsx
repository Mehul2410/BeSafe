import React from "react";
import { Background, CustomInput, Text } from "@components";
import { Image, ScrollView, View } from "react-native";
import { StyleSheet } from "react-native";
import { Button } from "@components";
import { NavigationProps } from "@types";
import { colors } from "@utils";

export function Setting({ navigation }: NavigationProps<"Setting">) {
    return (
        <Background>
            <View style={{ height: "100%", alignItems: "center" }}>
                <Text
                    weight="400"
                    style={{
                        color: colors.white,
                        fontSize: 24,
                        height: 60,
                        width: 350,
                        backgroundColor: colors.tertiary,
                        textAlign: "center",
                        textAlignVertical: "center",
                        borderRadius: 10
                    }}
                >
                    Setting
                </Text>
                <View style={{ marginTop: 25 }}>
                    <Button
                        weight="400"
                        btnName="Change Password"
                        style={{
                            backgroundColor: colors.white,
                            color: colors.black,
                            height: 53,
                            width: 350,
                            borderRadius: 10,
                            fontSize: 18,
                            textAlignVertical: "center",
                            marginVertical: 12
                        }}
                    />

                    <Button
                        weight="400"
                        btnName="change Language"
                        style={{
                            backgroundColor: colors.white,
                            color: colors.black,
                            height: 53,
                            width: 350,
                            borderRadius: 10,
                            fontSize: 18,
                            textAlignVertical: "center",
                            marginVertical: 12
                        }}
                        onPress={() => {
                            navigation.navigate("Language");
                        }}
                    />
                    <Button
                        weight="400"
                        btnName="Delete Account"
                        style={{
                            backgroundColor: colors.white,
                            color: colors.black,
                            height: 53,
                            width: 350,
                            borderRadius: 10,
                            fontSize: 18,
                            textAlignVertical: "center",
                            marginVertical: 12
                        }}
                    />
                </View>
            </View>
        </Background>
    );
}
