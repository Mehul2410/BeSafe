import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./language.styles";
import { RegularText, BoldText, MediumText, LightText } from "@utils";
import { LanguageRoute, LanguageNavigationProps } from "@types";

export function Language({ navigation }: LanguageNavigationProps<"Language">) {
    return (
        <View style={styles.screenview}>
            <Image source={require("../../../assets/lang.png")} />
            <MediumText style={styles.text}>Select your langague</MediumText>
            <View style={styles.view}>
                <TouchableOpacity style={styles.button}>
                    <RegularText>English</RegularText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <RegularText>हिंदी</RegularText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <LightText>मराठी</LightText>
                </TouchableOpacity>
            </View>
        </View>
    );
}
