import React from "react";
import { View, Image } from "react-native";
import { Background, Text } from "@components";
import { StyleSheet } from "react-native";
import { NavigationProps } from "@types";

export function Home({ navigation }: NavigationProps<"Home">) {
    return (
        <Background>
            <View style={styles.view}>
                <Text style={styles.text} onPress={() => navigation.navigate("Profile")}>
                    {" "}
                    Complaints
                </Text>
                <Image source={require("@assets/home.png")} />
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
    },
    text: {
        color: "#fff",

        marginBottom: 60
    }
});
