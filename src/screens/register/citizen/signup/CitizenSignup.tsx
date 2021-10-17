import { Background, Text } from "@components";
import React from "react";
import { View, Image, TouchableOpacity, Button } from "react-native";
import { LanguageNavigationProps } from "@types";
import styles from "./signup.styles";
import { TextInput } from "react-native-gesture-handler";

export function CitizenSignup() {
    return (
        <Background>
            <View style={styles.view}>
                <View style={styles.view}>
                    <Image source={require("@assets/citizen.png")} />
                    <Text style={{ color: "#FFF", marginTop: 15 }}> Sign-in as Citizen</Text>
                </View>
                <View style={styles.box}>
                    <TextInput style={styles.text} placeholder="User Id"></TextInput>
                    <TextInput style={styles.text} placeholder="Email"></TextInput>
                    <TextInput
                        style={styles.text}
                        secureTextEntry={true}
                        placeholder="Password"
                    ></TextInput>
                    <TextInput
                        style={styles.text}
                        secureTextEntry={true}
                        placeholder="Confirm Password"
                    ></TextInput>

                    <TouchableOpacity>
                        <Text weight="400" style={styles.button}>
                            Sign-In
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Background>
    );
}
