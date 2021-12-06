import React from "react";
import { Background, Text } from "@components";
import { Image, ScrollView, View } from "react-native";
import { StyleSheet } from "react-native";
import { Button } from "@components";
import { NavigationProps } from "@types";

export function Profile({ navigation, route }: NavigationProps<"UserProfile">) {
    return (
        <Background>
            <View style={styles.view}>
                <ScrollView style={{ height: "100%" }}>
                    <View style={{ alignItems: "center" }}>
                        <Image style={styles.img} source={require("@assets/prachit.png")} />
                    </View>
                    <View style={{ paddingBottom: 10 }}>
                        <Text
                            weight="400"
                            style={{
                                color: "#FFF",
                                textAlign: "center",
                                backgroundColor: "#1D0ECC",
                                height: 50,
                                width: 320,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                paddingVertical: 9
                            }}
                        >
                            prachit bipin gharat
                        </Text>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                borderTopColor: "#FFF",
                                borderTopWidth: 1
                            }}
                        >
                            <Text
                                weight="400"
                                style={{
                                    color: "#FFF",
                                    textAlign: "center",
                                    backgroundColor: "#1D0ECC",
                                    height: 50,
                                    width: 160,
                                    borderBottomLeftRadius: 10,
                                    paddingVertical: 9
                                }}
                            >
                                citizen
                            </Text>
                            <Text
                                weight="400"
                                style={{
                                    color: "#FFF",
                                    textAlign: "center",
                                    backgroundColor: "#1D0ECC",
                                    height: 50,
                                    width: 160,
                                    borderBottomRightRadius: 10,
                                    paddingVertical: 9
                                }}
                            >
                                <Image source={require("@assets/percent.png")} />
                                90%
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Button
                            btnName="Edit Profile"
                            weight="400"
                            style={styles.btn}
                            onPress={() => {
                                navigation.navigate("EditProfile");
                            }}
                        />
                        <Button
                            btnName="Complaints"
                            weight="400"
                            style={styles.btn}
                            onPress={() => {
                                navigation.navigate("ComplaintGroup");
                            }}
                        />
                        <Button
                            btnName="Setting"
                            weight="400"
                            style={styles.btn}
                            onPress={() => {
                                navigation.navigate("Setting");
                            }}
                        />
                        <Button
                            btnName="Help"
                            weight="400"
                            onPress={() => {
                                navigation.navigate("Help");
                            }}
                            style={styles.btn}
                        />
                        <Button
                            btnName="Logout"
                            weight="400"
                            style={styles.btn}
                            onPress={() => {
                                navigation.navigate("Getstarted");
                            }}
                        />
                    </View>
                </ScrollView>
            </View>
        </Background>
    );
}
const styles = StyleSheet.create({
    view: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    img: {
        height: 170,
        width: 170,
        borderRadius: 95,
        marginBottom: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    // protext: {
    //     color: "#FFF",
    //     textAlign: "center",
    //     backgroundColor: "#1D0ECC",
    //     height: 50,
    //     width: 320,
    //     borderTopLeftRadius: 10,
    //     borderTopRightRadius: 10,

    //     paddingVertical: 9
    // },
    btn: {
        color: "#FFF",
        textAlign: "center",
        backgroundColor: "#1D0ECC",
        height: 50,
        width: 320,
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 9
    }
});
