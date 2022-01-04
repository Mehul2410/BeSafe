import React from "react";
import { Background, Text, RegularText } from "@components";
import { Image, ScrollView, View } from "react-native";
import { NavigationProps } from "@types";
import styles from "./Profile.styles";

interface profileBtnProps {
    navigate: "ComplaintGroup" | "EditProfile" | "Setting" | "Help";
    name: string;
}

export function Profile({ navigation, route }: NavigationProps<"UserProfile">) {
    const ProfileText = ({ navigate, name }: profileBtnProps) => {
        return (
            <Text
                style={styles.btn}
                weight="400"
                color="#FFF"
                onPress={() => {
                    navigation.navigate(navigate);
                }}
            >
                {name}
            </Text>
        );
    };

    return (
        <Background>
            <View style={styles.view}>
                <View style={styles.profile}>
                    <View style={{ position: "relative" }}>
                        <Image style={styles.img} source={require("@assets/img.png")} />
                        <View style={styles.edit}>
                            <Image source={require("@assets/edit.png")} />
                        </View>
                    </View>
                </View>
                <View style={styles.name}>
                    <RegularText string="John K. Wick" />
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Image source={require("@assets/percent.png")} />
                        <RegularText string="90%" color="#FFF" />
                    </View>
                </View>
                <View style={styles.probtn}>
                    <ProfileText name="Edit Profile" navigate="EditProfile" />
                    {/* history */}
                    <ProfileText name="Complaints" navigate="ComplaintGroup" />
                    <ProfileText name="Setting" navigate="Setting" />
                    <ProfileText name="Help" navigate="Help" />
                </View>
            </View>
        </Background>
    );
}
