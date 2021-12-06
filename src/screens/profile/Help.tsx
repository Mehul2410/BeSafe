import React, { useState } from "react";
import { Background, CustomInput, Text, Button } from "@components";
import { View } from "react-native";
import { colors } from "@utils";
import { NavigationProps } from "@types";
import { Form } from "formik";
export function Help({ navigation }: NavigationProps<"Help">) {
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
                    Help ?
                </Text>
                <View style={{ marginTop: 25 }}>
                    <CustomInput
                        placeholder="Name"
                        style={{ height: 53, width: 350, borderRadius: 10 }}
                    />
                    <CustomInput
                        placeholder="Email"
                        style={{ height: 53, width: 350, borderRadius: 10 }}
                    />
                    <CustomInput
                        placeholder="Message"
                        numberOfLines={4}
                        style={{ height: 53, width: 350, borderRadius: 10 }}
                    />
                    <CustomInput
                        placeholder="query"
                        style={{ height: 53, width: 350, borderRadius: 10 }}
                    />
                    <Button
                        btnName="Submit"
                        // onPress={() => {
                        //     navigation.navigate("Profile");
                        // }}
                        style={{
                            width: 340,
                            height: 50,
                            fontSize: 21,
                            alignSelf: "center",
                            marginTop: 20,
                            borderRadius: 13,
                            color: colors.quatnary,
                            backgroundColor: colors.white
                        }}
                    />
                </View>
            </View>
        </Background>
    );
}
