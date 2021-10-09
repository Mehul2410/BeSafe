import { Background, Text } from "@components";
import React from "react";
import { View, Image, TouchableOpacity, Button } from "react-native";
import { LanguageNavigationProps } from "@types";
import styles from "./signin.styles";
import { TextInput } from "react-native-gesture-handler";

export function PoliceSignin() {
    return (
        <Background>
            <View style={styles.view}>
                <View style={styles.box1}>
                    <Image source={require("@assets/police.png")} />
                    <Text style={{ color: "#FFF", marginTop: 8 }}> Sign-in as Police</Text>
                </View>
                <View style={styles.box2}>
                    <TextInput style={styles.text} placeholder="User Id"></TextInput>
                    <TextInput
                        style={styles.text}
                        textContentType={"password"}
                        secureTextEntry={true}
                        placeholder="Password"
                    ></TextInput>
                    <Text weight="200" style={{ color: "#FFF" }}>
                        Forget Password ?
                    </Text>
                    <TouchableOpacity>
                        <Text weight="400" style={styles.button}>
                            Sign-In
                        </Text>
                    </TouchableOpacity>
                    <Text weight="200" style={{ color: "#FFF", fontSize: 18 }}>
                        Create your account
                    </Text>
                </View>
            </View>
        </Background>
    );
}
