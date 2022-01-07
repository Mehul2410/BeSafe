import React, { useState } from "react";
import { Background, CustomInput, Text, Button } from "@components";
import { View } from "react-native";
import { colors } from "@utils";
import { NavigationProps } from "@types";
import { Form } from "formik";
export function Help({ navigation }: NavigationProps<"Help">) {
    return (
        <Background>
            <View
                style={{
                    height: "100%",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 20
                }}
            >
                <Button btnName="Help ?" weight="400" />
                <View style={{ width: "100%" }}>
                    <CustomInput placeholder="Name" />
                    <CustomInput placeholder="Email" />
                    <CustomInput placeholder="Message" numberOfLines={4} />
                    <CustomInput placeholder="query" />
                    <Button
                        btnName="Submit"
                        // onPress={() => {
                        //     navigation.navigate("Profile");
                        // }}
                        weight="400"
                    />
                </View>
            </View>
        </Background>
    );
}
