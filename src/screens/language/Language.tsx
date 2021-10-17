import React from "react";
import { View, Image, ScrollView, FlatList } from "react-native";
import styles from "./language.styles";
import { Background, Button, Text } from "@components";
import { NavigationProps } from "@types";
import { colors } from "@utils";

export function Language({ navigation }: NavigationProps<"Language">) {
    const languages = [
        {
            id: 0,
            language: "English"
        },
        {
            id: 1,
            language: "हिंदी"
        },
        {
            id: 2,
            language: "मराठी"
        }
    ];

    return (
        <Background>
            <View style={styles.screenview}>
                <View style={styles.container1}>
                    <Image style={styles.img} source={require("@assets/lang.png")} />
                    <Text style={styles.text}>Select your langague</Text>
                </View>
                <View style={styles.container2}>
                    <FlatList
                        data={languages}
                        keyExtractor={lang => lang.id.toString()}
                        renderItem={({ item }) => (
                            <Button
                                btnName={item.language}
                                style={{ backgroundColor: colors.white, color: colors.quatnary }}
                            />
                        )}
                    />
                </View>
            </View>
        </Background>
    );
}

{
    /* <ScrollView contentContainerStyle={styles.scroll}>
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
                    </ScrollView> */
}
