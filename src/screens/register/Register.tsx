import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Background, Text } from "@components";
import styles from "./register.styles";
import { LanguageNavigationProps } from "@types";

export default function Register({ navigation }: LanguageNavigationProps<"Register">) {
    return (
        <Background>
            <View style={styles.view}>
                <Text weight="700" style={styles.text}>
                    Select your role
                </Text>
                <View style={styles.char}>
                    <Image source={require("@assets/police.png")}></Image>
                    <Text weight="400" style={styles.text}>
                        police
                    </Text>
                </View>
                <View style={styles.char}>
                    <Image source={require("@assets/citizen.png")}></Image>
                    <Text weight="400" style={styles.text}>
                        citizen
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        display: "flex",
                        paddingVertical: 10,
                        paddingHorizontal: 110,
                        marginTop: 20,
                        backgroundColor: "#1D0ECC",
                        borderRadius: 13
                    }}
                >
                    <Text weight="400" style={styles.text}>
                        {" "}
                        Next
                        <Image source={require("@assets/arrow.png")} />
                    </Text>
                </TouchableOpacity>
            </View>
        </Background>
    );
}
