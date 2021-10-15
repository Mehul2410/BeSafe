import React from "react";
import { Image, ScrollView } from "react-native";
import styles from "./home.styles";
import { Background, Text } from "@components";
import { NavigationProps } from "@types";

export function Getstarted({ navigation }: NavigationProps<"Getstarted">) {
    return (
        <Background>
            <ScrollView contentContainerStyle={styles.screenview}>
                <Image style={styles.img} source={require("@assets/getstarted.png")} />
                <Text weight="900" style={styles.landingtext}>
                    Welcome to
                </Text>
                <Text weight="900" style={styles.besafe}>
                    BeSafe!
                </Text>
                <Text
                    weight="700"
                    onPress={() => navigation.navigate("Language")}
                    style={styles.button}
                >
                    Get Started
                </Text>
            </ScrollView>
        </Background>
    );
}
