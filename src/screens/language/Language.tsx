import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./language.styles";
import { RegularText, BoldText, MediumText, LightText } from "@utils";
import { LanguageRoute, LanguageNavigationProps } from "@types";
import { assets } from "react-native.config";

export function Language({ navigation }: LanguageNavigationProps<"Language">) {
    return (
        <View style={styles.screenview}>
            <Image source={require("../../../assets/lang.png")} />
            <MediumText style={styles.text}>Select your langague</MediumText>
            <View style={styles.view}>
                <TouchableOpacity>
                    <RegularText style={styles.button}>English</RegularText>
                </TouchableOpacity>
                <TouchableOpacity>
                    <RegularText style={styles.button}>हिंदी</RegularText>
                </TouchableOpacity>
                <TouchableOpacity>
                    <LightText style={styles.button}>मराठी</LightText>
                </TouchableOpacity>
            </View>
        </View>
    );
}
