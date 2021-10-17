import { Background, Text } from "@components";
import React from "react";
import { View, Image, TouchableOpacity, Button } from "react-native";
import { LanguageNavigationProps } from "@types";
import styles from "./signup.styles";
import { TextInput } from "react-native-gesture-handler";
import CheckBox from "@react-native-community/checkbox";
import { useState } from "react";

export function PoliceSignup() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return (
        <Background>
            <View style={styles.view}>
                <View style={styles.view}>
                    <Image source={require("@assets/police.png")} />
                    <Text style={{ color: "#FFF", marginTop: 15 }}> Sign-in as Police</Text>
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
                    <View style={styles.checkboxcontainer}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={newValue => setToggleCheckBox(newValue)}
                        />
                        <Text style={{ color: "#FFFFFF", marginLeft: 5 }} weight="200">
                            Agree to go through police verification process
                        </Text>
                    </View>
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
