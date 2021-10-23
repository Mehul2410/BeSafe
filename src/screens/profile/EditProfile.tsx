import React from "react";
import { Background, CustomInput, Text } from "@components";
import { Image, View } from "react-native";
import { colors } from "@utils";

import { StyleSheet } from "react-native";

export function EditProfile() {
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
                    Edit Profile
                </Text>
                <View style={{ marginTop: 25 }}>
                    <CustomInput
                        placeholder="Date of Birth (00-00-0000)"
                        style={{ height: 53, width: 350, borderRadius: 10 }}
                    />

                    <CustomInput
                        placeholder="Adharcard or Pancard"
                        style={{ height: 53, width: 350, borderRadius: 10 }}
                    />
                    <CustomInput
                        placeholder="Address "
                        style={{ height: 53, width: 350, borderRadius: 10 }}
                    />
                    <CustomInput
                        placeholder="Occupation"
                        style={{ height: 53, width: 350, borderRadius: 10 }}
                    />
                </View>
            </View>
        </Background>
    );
}
