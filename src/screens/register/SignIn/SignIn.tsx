import { Background, Button, CustomInput, Text } from "@components";
import { NavigationProps } from "@types";
import { colors } from "@utils";
import React from "react";
import { View, Image } from "react-native";
import styles from "./signin.styles";

export default function SignIn({ navigation, route }: NavigationProps<"SignIn">) {
    const roleSignIn = {
        uri: route.params.uri,
        role: route.params.role,
        agree: route.params.agree
    };
    return (
        <Background>
            <View style={styles.view}>
                <View style={styles.box1}>
                    <Image resizeMode="center" style={styles.img} source={route.params.uri} />
                    <Text style={{ color: colors.white }}>Sign-in as {route.params.role}</Text>
                </View>
                <View style={styles.box2}>
                    <CustomInput placeholder="User Id" style={{ width: "80%" }} />
                    <CustomInput
                        textContentType={"password"}
                        secureTextEntry={true}
                        placeholder="Password"
                        style={{ width: "80%" }}
                    />
                    <Text weight="200" style={{ color: "#FFF" }}>
                        Forget Password ?
                    </Text>
                    <Button
                        btnName="SignIn"
                        weight="400"
                        style={{ width: "80%", marginVertical: 12 }}
                    />
                    <Text
                        weight="200"
                        style={{ color: "#FFF", fontSize: 18 }}
                        onPress={() => {
                            navigation.navigate("SignUp", roleSignIn);
                        }}
                    >
                        Create your account
                    </Text>
                </View>
            </View>
        </Background>
    );
}
