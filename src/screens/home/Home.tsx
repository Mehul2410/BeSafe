import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import styles from "./home.styles";
import { RegularText, BoldText, MediumText } from "@utils";
import { LanguageRoute, LanguageNavigationProps } from "@types";

export function Getstarted({ navigation }: LanguageNavigationProps<"getStarted">) {
    return (
        <View style={styles.screenview}>
            <Image source={require("../../../assets/getstarted.png")} />

            <BoldText style={styles.landingtext}>Welcome to</BoldText>
            <BoldText style={styles.besafe}>BeSafe!</BoldText>
            <TouchableOpacity onPress={() => navigation.navigate("Language")}>
                <RegularText style={styles.button}>Get Started</RegularText>
            </TouchableOpacity>
        </View>
    );
}
