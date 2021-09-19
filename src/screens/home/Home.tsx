import React from "react";
import { View, Image } from "react-native";
import styles from "./home.styles";
import { Text } from "@components";
import { LanguageNavigationProps } from "@types";

export function Getstarted({ navigation }: LanguageNavigationProps<"Getstarted">) {
    return (
        <View style={styles.screenview}>
            <Image source={require("../../../assets/getstarted.png")} />
            <Text weight="900" style={styles.landingtext}>
                Welcome to
            </Text>
            <Text weight="900" style={styles.besafe}>
                BeSafe!
            </Text>
            <Text
                weight="900"
                onPress={() => navigation.navigate("Language")}
                style={styles.button}
            >
                Get Started
            </Text>
        </View>
    );
}
