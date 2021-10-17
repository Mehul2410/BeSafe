import { Background, Button, CustomInput, Text, TextCheckBox } from "@components";
import { NavigationProps } from "@types";
import React from "react";
import { View, Image, ImageSourcePropType } from "react-native";
import styles from "./signup.styles";

export default function SignUp({ route }: NavigationProps<"SignUp">) {
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

    return (
        <Background>
            <View style={styles.view}>
                <View style={styles.view}>
                    <Image style={styles.img} source={route.params.uri} />
                    <Text style={{ color: "#FFF", marginTop: 15 }}>
                        Sign-in as {route.params.role}
                    </Text>
                </View>
                <View style={styles.box}>
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
                    <Button btnName="SignUp" />
                </View>
            </View>
        </Background>
    );
}
