import React from "react";
import { View, Image, ScrollView } from "react-native";
import styles from "./language.styles";
import { Background, Text } from "@components";
import { LanguageNavigationProps } from "@types";

export function Language({ navigation }: LanguageNavigationProps<"Language">) {
    return (
        <Background>
            <ScrollView contentContainerStyle={styles.screenview}>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image source={require("../../../assets/lang.png")} />
                    <Text style={styles.text}>Select your langague</Text>
                </View>
                <View style={styles.view}>
                    <Text style={styles.button}>English</Text>

                    <Text style={styles.button}>हिंदी</Text>

                    <Text style={styles.button}>मराठी</Text>
                </View>
            </ScrollView>
        </Background>
    );
}
