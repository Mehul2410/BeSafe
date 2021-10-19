import { Background, Button, CustomInput, Text, TextCheckBox } from "@components";
import { NavigationProps } from "@types";
import React, { ReactElement } from "react";
import { View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./signup.styles";
import { isValidEmail, isValidObjectField, updateError } from "@utils";

export default function SignUp({ navigation, route }: NavigationProps<"SignUp">): ReactElement {
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
    const [signUpInfo, setSignUpInfo] = React.useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = React.useState("");

    const { name, email, password, confirmPassword } = signUpInfo;

    const handleOnChangeText = (value: string, fieldName: string) => {
        return setSignUpInfo({ ...signUpInfo, [fieldName]: value });
    };

    const isValidForm = () => {
        if (!isValidObjectField(signUpInfo)) return updateError("Required all fields!", setError);
        if (!name.trimEnd() || name.length < 3) return updateError("Invalid name!", setError);
        if (!isValidEmail(email)) return updateError("Invalid Email!", setError);
        if (!password.trim() || password.length < 8)
            return updateError("Password is less then 8 characters!", setError);
        if (confirmPassword !== password) return updateError("Password does not match!", setError);
        if (toggleCheckBox !== true) return updateError("Kindly agree to continue", setError);
        return true;
    };
    const submitForm = () => {
        if (isValidForm() === true) {
            if (route.params.role == "Police") {
                console.log(signUpInfo);
                navigation.navigate("PoliceDetail", route.params);
            } else {
                navigation.navigate("SignIn", route.params);
            }
        }
    };
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
                    {error ? (
                        <Text
                            weight="400"
                            style={{ color: "red", fontSize: 18, textAlign: "center" }}
                        >
                            {error}
                        </Text>
                    ) : null}
                    <ScrollView style={{ width: "80%", height: "60%" }}>
                        <CustomInput
                            value={name}
                            onChangeText={value => handleOnChangeText(value, "name")}
                            placeholder="Name"
                            style={{ marginVertical: 12 }}
                        />
                        <CustomInput
                            value={email}
                            onChangeText={value => handleOnChangeText(value, "email")}
                            placeholder="Email"
                            style={{ marginVertical: 12 }}
                        />
                        <CustomInput
                            value={password}
                            onChangeText={value => handleOnChangeText(value, "password")}
                            secureTextEntry={true}
                            placeholder="Password"
                            style={{ marginVertical: 12 }}
                        />
                        <CustomInput
                            value={confirmPassword}
                            onChangeText={value => handleOnChangeText(value, "confirmPassword")}
                            secureTextEntry={true}
                            placeholder="Confirm Password"
                            style={{ marginVertical: 12 }}
                        />
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
                            onPress={submitForm}
                        />
                    </ScrollView>
                </View>
            </View>
        </Background>
    );
}
