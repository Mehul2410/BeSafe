import { Background, Button, CustomInput, Text, TextCheckBox } from "@components";
import { NavigationProps } from "@types";
import React from "react";
import { View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./signup.styles";

export default function SignUp({ navigation, route }: NavigationProps<"SignUp">) {
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

    return (
        <Background>
            <View style={styles.view}>
                <View style={styles.box1}>
                    <Image style={styles.img} source={route.params.uri} />
                    <Text style={{ color: "#FFF", marginTop: 15 }}>
                        Sign-up as {route.params.role}
                    </Text>
                </View>
                <View style={styles.box2}>
                    <ScrollView style={{ width: "80%", height: "60%" }}>
                        <CustomInput placeholder="User Id" />
                        <CustomInput placeholder="Email" />
                        <CustomInput secureTextEntry={true} placeholder="Password" />
                        <CustomInput secureTextEntry={true} placeholder="Confirm Password" />
                        {route.params.agree && (
                            <TextCheckBox
                                toggleCheckBox={toggleCheckBox}
                                setToggleCheckBox={setToggleCheckBox}
                                agree={route.params.agree}
                            />
                        )}
                        <Button
                            btnName="SignUp"
                            weight="400"
                            style={{ marginVertical: 12 }}
                            onPress={() => {
                                route.params.role == "Police"
                                    ? toggleCheckBox == true
                                        ? navigation.navigate("PoliceDetail", route.params)
                                        : null
                                    : navigation.navigate("SignIn", route.params);
                            }}
                        />
                    </ScrollView>
                </View>
            </View>
        </Background>
    );
}
