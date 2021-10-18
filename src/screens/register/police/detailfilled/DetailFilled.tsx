import React, { useEffect } from "react";
import { Background, Text } from "@components";
import { Image, View } from "react-native";
import { NavigationProps } from "@types";

export function DetailFilled({ navigation }: NavigationProps<"DetailFilled">) {
    function validSubmission() {
        navigation.navigate("Home");
    }
    setTimeout(validSubmission, 3000);
    return (
        <Background>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    padding: 20
                }}
            >
                <Text weight="700" style={{ color: "#FFF", textAlign: "center" }}>
                    You have sucessfully applied for the verification process.
                </Text>
                <Image style={{ marginVertical: 25 }} source={require("@assets/yayee.png")} />
                <Text weight="200" style={{ color: "#FFF", textAlign: "center" }}>
                    You will recieve the verification mail within 2-3 working days
                </Text>
            </View>
        </Background>
    );
}
