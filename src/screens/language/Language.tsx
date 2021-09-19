import React from "react";
import { View, Image } from "react-native";
import styles from "./language.styles";
import { Text } from "@components";
import { LanguageNavigationProps } from "@types";

export function Language({ navigation }: LanguageNavigationProps<"Language">) {
    return (
        <View style={styles.screenview}>
            <Image source={require("../../../assets/lang.png")} />
            <Text style={styles.text}>Select your langague</Text>
            <View style={styles.view}>
                <Text style={styles.button}>English</Text>

                <Text style={styles.button}>हिंदी</Text>

                <Text style={styles.button}>मराठी</Text>
            </View>
        </View>
    );
}
