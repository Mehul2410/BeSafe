import React from "react";
import { Background, Text, RegularText, Button } from "@components";
import { Image, ScrollView, View } from "react-native";
import { NavigationProps } from "@types";
import styles from "./Profile.styles";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getTokens } from "@contexts/slice/authSlice";

interface profileBtnProps {
    navigate: "ComplaintGroup" | "EditProfile" | "Setting" | "Help" | "Register";
    name: string;
}

export function Profile({ navigation, route }: NavigationProps<"UserProfile">) {
    const user = useSelector((state: RootStateOrAny) => state.auth);
    const dispatch = useDispatch();
    console.log(user);
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
                        <Image
                            style={styles.img}
                            source={user.avatar ? { uri: user.avatar } : require("@assets/img.png")}
                        />
                        <View style={styles.edit}>
                            <Image source={require("@assets/edit.png")} />
                        </View>
                    </View>
                </View>
                <View style={styles.name}>
                    <RegularText string={user.name} />
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
                    <Text
                        style={styles.btn}
                        weight="400"
                        color="#FFF"
                        onPress={async () => {
                            await AsyncStorage.removeItem("keys");
                            dispatch(getTokens({ access_token: "" }));
                        }}
                    >
                        logout
                    </Text>
                </View>
            </View>
        </Background>
    );
}
