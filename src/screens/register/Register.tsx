import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Background, Text } from "@components";
import styles from "./register.styles";

export default function Register() {
    return (
        <Background>
            <View style={styles.view}>
                <Text weight="700">Select your role</Text>
                <View style={styles.char}>
                    <Image source={require("@assets/police.png")}></Image>
                    <Text>police</Text>
                </View>
                <View style={styles.char}>
                    <Image source={require("@assets/citizen.png")}></Image>
                    <Text>citizen</Text>
                </View>
                <TouchableOpacity
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        paddingVertical: 10,
                        paddingHorizontal: 30,
                        backgroundColor: "#1D0ECC",
                        borderRadius: 15
                    }}
                >
                    <Text weight="700" style={styles.text}>
                        {" "}
                        Next
                        <Image source={require("@assets/arrow.png")} />
                    </Text>
                </TouchableOpacity>
            </View>
        </Background>
    );
}
