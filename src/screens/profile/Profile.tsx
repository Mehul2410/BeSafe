import React from "react";
import { Background, Text } from "@components";
import { Image, View } from "react-native";
import { StyleSheet } from "react-native";

export function Profile() {
    return (
        <Background>
            <View style={styles.view}>
                <Image style={styles.img} source={require("@assets/prachit.png")} />
                <View>
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
                    <Text weight="400" style={styles.text}>
                        Edit Profile
                    </Text>
                    <Text weight="400" style={styles.text}>
                        Complaints
                    </Text>
                    <Text weight="400" style={styles.text}>
                        Setting
                    </Text>
                    <Text weight="400" style={styles.text}>
                        Help
                    </Text>
                    <Text weight="400" style={styles.text}>
                        Logout
                    </Text>
                </View>
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
        marginBottom: 30
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
    text: {
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
