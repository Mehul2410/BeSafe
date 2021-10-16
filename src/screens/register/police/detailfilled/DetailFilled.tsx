import React from "react";
import { Background, Text } from "@components";
import { Image, View } from "react-native";

export function DetailFilled() {
    return (
        <Background>
            <View
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%"
                }}
            >
                <Text weight="700" style={{ color: "#FFF", textAlign: "center" }}>
                    {" "}
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
