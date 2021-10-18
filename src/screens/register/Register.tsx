import React from "react";
import { ImageSourcePropType, View } from "react-native";
import { Background, Text, CharRole } from "@components";
import styles from "./register.styles";
import { NavigationProps } from "@types";

interface rolesProps {
    police: { uri: ImageSourcePropType; role: string; agree: string };
    citizen: { uri: ImageSourcePropType; role: string };
}

export default function Register({ navigation }: NavigationProps<"Register">) {
    const roles: rolesProps = {
        police: {
            uri: require("@assets/police.png"),
            role: "Police",
            agree: "Agree to go through police verification process"
        },
        citizen: {
            uri: require("@assets/citizen.png"),
            role: "Citizen"
        }
    };
    return (
        <Background>
            <View style={styles.view}>
                <Text weight="700" style={{ color: "#FFF" }}>
                    Select your role
                </Text>
                <CharRole
                    role="Police"
                    uri={require("@assets/police.png")}
                    onPress={() => {
                        navigation.navigate("SignIn", roles.police);
                    }}
                />
                <CharRole
                    role="Citizen"
                    uri={require("@assets/citizen.png")}
                    onPress={() => {
                        navigation.navigate("SignIn", roles.citizen);
                    }}
                />
            </View>
        </Background>
    );
}
