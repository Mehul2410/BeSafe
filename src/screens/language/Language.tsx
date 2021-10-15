import React from "react";
import { View, Image, ScrollView } from "react-native";
import styles from "./language.styles";
import { Background, Text } from "@components";
import { NavigationProps } from "@types";

export function Language({ navigation }: NavigationProps<"Language">) {
    return (
        <Background>
            <View style={styles.screenview}>
                <View style={styles.container1}>
                    <Image style={styles.img} source={require("@assets/lang.png")} />
                    <Text style={styles.text}>Select your langague</Text>
                </View>
                <View style={styles.container2}>
                    <ScrollView contentContainerStyle={styles.scroll}>
                        <Text
                            style={styles.button}
                            onPress={() => {
                                navigation.navigate("Register");
                            }}
                        >
                            English
                        </Text>
                        <Text style={styles.button}>हिंदी</Text>
                        <Text style={styles.button}>मराठी</Text>
                        <Text style={styles.button}>English</Text>
                        <Text style={styles.button}>हिंदी</Text>
                        <Text style={styles.button}>मराठी</Text>
                    </ScrollView>
                </View>
            </View>
        </Background>
    );
}
