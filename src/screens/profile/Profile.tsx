import React from "react";
import { Background, Text, BtnText } from "@components";
import { Image, ScrollView, View } from "react-native";
import { NavigationProps } from "@types";
import styles from "./Profile.styles";

export function Profile({ navigation, route }: NavigationProps<"UserProfile">) {
    return (
        <Background>
            <View style={styles.view}>
                <ScrollView style={{ height: "100%" }}>
                    <View style={{ alignItems: "center" }}>
                        <View style={{ position: "relative" }}>
                            <Image style={styles.img} source={require("@assets/img.png")} />

                            <View style={styles.edit}>
                                <Image source={require("@assets/edit.png")} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.name}>
                        <Text weight="400" color="#FFF">
                            John K. Wick
                        </Text>

                        <View
                            style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
                        >
                            <Image source={require("@assets/percent.png")} />
                            <Text weight="400" color="#FFF">
                                90%
                            </Text>
                        </View>
                    </View>
                    <View style={styles.probtn}>
                        <Text
                            weight="400"
                            color="#FFF"
                            onPress={() => {
                                navigation.navigate("EditProfile");
                            }}
                        >
                            Edit Profile
                        </Text>
                        <Text
                            weight="400"
                            color="#FFF"
                            onPress={() => {
                                navigation.navigate("ComplaintGroup");
                            }}
                        >
                            ComplaintGroup
                        </Text>
                        <Text
                            weight="400"
                            color="#FFF"
                            onPress={() => {
                                navigation.navigate("Setting");
                            }}
                        >
                            Setting
                        </Text>
                        <Text
                            weight="400"
                            color="#FFF"
                            onPress={() => {
                                navigation.navigate("Help");
                            }}
                        >
                            Help
                        </Text>
                        <Text
                            weight="400"
                            color="#FFF"
                            onPress={() => {
                                navigation.navigate("Getstarted");
                            }}
                        >
                            Getstarted
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </Background>
    );
}
