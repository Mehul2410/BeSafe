import React from "react";
import { View, Image, ScrollView } from "react-native";
import styles from "./language.styles";
import { Background, Text } from "@components";
import { LanguageNavigationProps } from "@types";

export function Language({ navigation }: LanguageNavigationProps<"Language">) {
    return (
        <Background>
            <View style={styles.screenview}>
                <View style={styles.container1}>
                    <Image source={require("@assets/lang.png")} />
                    <Text style={styles.text}>Select your langague</Text>
                </View>
                <View style={styles.container2}>
                    <ScrollView contentContainerStyle={styles.scroll}>
                        <Text style={styles.button} onPress={() => navigation.navigate("Register")}>
                            English
                        </Text>
                        <Text style={styles.button} onPress={() => navigation.navigate("Register")}>
                            हिंदी
                        </Text>
                        <Text style={styles.button} onPress={() => navigation.navigate("Register")}>
                            मराठी
                        </Text>
                        <Text style={styles.button} onPress={() => navigation.navigate("Register")}>
                            English
                        </Text>
                        <Text style={styles.button} onPress={() => navigation.navigate("Register")}>
                            हिंदी
                        </Text>
                        <Text style={styles.button} onPress={() => navigation.navigate("Register")}>
                            मराठी
                        </Text>
                    </ScrollView>
                </View>
            </View>
        </Background>
    );
}
