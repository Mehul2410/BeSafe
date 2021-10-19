import { Background, Button, CustomInput, Text } from "@components";
import { NavigationProps } from "@types";
import { colors } from "@utils";
import React, { ReactElement } from "react";
import { View, Image } from "react-native";
import styles from "./signin.styles";
import { isValidEmail, isValidObjectField, updateError } from "@utils";

export default function SignIn({ navigation, route }: NavigationProps<"SignIn">): ReactElement {
    const [signInInfo, setSignInInfo] = React.useState({
        email: "",
        password: ""
    });
    const [error, setError] = React.useState("");

    const roleSignIn = {
        uri: route.params.uri,
        role: route.params.role,
        agree: route.params.agree
    };
    const { email, password } = signInInfo;

    const handleOnChangeText = (value: string, fieldName: string) => {
        return setSignInInfo({ ...signInInfo, [fieldName]: value });
    };

    const isValidForm = () => {
        if (!isValidObjectField(signInInfo)) return updateError("Required all fields!", setError);
        if (!isValidEmail(email)) return updateError("Invalid Email!", setError);
        if (!password.trim() || password.length < 8)
            return updateError("Password is less then 8 characters!", setError);
        return true;
    };
    const submitForm = () => {
        if (isValidForm() === true) {
            navigation.navigate("SignUp", roleSignIn);
        }
    };
    return (
        <Background>
            <View style={styles.view}>
                <View style={styles.box1}>
                    <Image resizeMode="center" style={styles.img} source={route.params.uri} />
                    <Text style={{ color: colors.white }}>Sign-in as {route.params.role}</Text>
                </View>
                <View style={styles.box2}>
                    {error ? (
                        <Text
                            weight="400"
                            style={{ color: "red", fontSize: 18, textAlign: "center" }}
                        >
                            {error}
                        </Text>
                    ) : null}
                    <CustomInput
                        value={email}
                        onChangeText={value => handleOnChangeText(value, "email")}
                        autoCapitalize="none"
                        placeholder="User Id"
                        style={{ width: "80%", marginVertical: 12 }}
                    />
                    <CustomInput
                        value={password}
                        onChangeText={value => handleOnChangeText(value, "password")}
                        autoCapitalize="none"
                        textContentType={"password"}
                        secureTextEntry={true}
                        placeholder="Password"
                        style={{ width: "80%", marginVertical: 12 }}
                    />
                    <Text weight="200" style={{ color: "#FFF" }}>
                        Forget Password ?
                    </Text>
                    <Button
                        onPress={submitForm}
                        btnName="SignIn"
                        weight="400"
                        style={{ width: "80%", marginVertical: 12 }}
                    />
                    <Text weight="200" style={{ color: "#FFF", fontSize: 18 }} onPress={submitForm}>
                        Create your account
                    </Text>
                </View>
            </View>
        </Background>
    );
}
