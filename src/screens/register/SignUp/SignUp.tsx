import { Background, Button, CustomInput, Text, TextCheckBox } from "@components";
import { NavigationProps } from "@types";
import React, { ReactElement } from "react";
import { View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./signup.styles";
import { Formik, FormikHelpers } from "formik";
import { SignUpvalidationSchema } from "@utils";
import { createUser } from "@contexts/api/client";

export default function SignUp({ navigation, route }: NavigationProps<"SignUp">): ReactElement {
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
    const signUpInfo = {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    };
    const [signUpError, setSignUpError] = React.useState("");
    const roleSignIn = {
        uri: route.params.uri,
        role: route.params.role,
        agree: route.params.agree
    };

    const SignUpUser = async (
        values: {
            name: string;
            email: string;
            password: string;
            confirmPassword: string;
        },
        formikActions: FormikHelpers<{
            name: string;
            email: string;
            password: string;
            confirmPassword: string;
        }>
    ) => {
        const res = await fetch(createUser, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...values })
        });
        const result = await res.json();
        if (result.success) {
            navigation.navigate("SignIn", roleSignIn);
            formikActions.resetForm();
            formikActions.setSubmitting(false);
            return true;
        } else {
            setSignUpError(result.message);
            setTimeout(() => {
                setSignUpError("");
            }, 3000);
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
                    <Formik
                        initialValues={signUpInfo}
                        validationSchema={SignUpvalidationSchema}
                        onSubmit={SignUpUser}
                    >
                        {({ values, handleChange, errors, handleBlur, touched, handleSubmit }) => {
                            const { name, email, password, confirmPassword } = values;
                            return (
                                <>
                                    <Text weight="700" style={{ color: "red", fontSize: 14 }}>
                                        {signUpError}
                                    </Text>
                                    <ScrollView style={{ width: "80%", height: "60%" }}>
                                        <CustomInput
                                            value={name}
                                            error={touched.name && errors.name}
                                            onChangeText={handleChange("name")}
                                            onBlur={handleBlur("name")}
                                            placeholder="Name"
                                            style={{ marginVertical: 12 }}
                                        />
                                        <CustomInput
                                            value={email}
                                            error={touched.email && errors.email}
                                            onChangeText={handleChange("email")}
                                            onBlur={handleBlur("email")}
                                            placeholder="Email"
                                            style={{ marginVertical: 12 }}
                                        />
                                        <CustomInput
                                            value={password}
                                            error={touched.password && errors.password}
                                            onChangeText={handleChange("password")}
                                            onBlur={handleBlur("password")}
                                            secureTextEntry={true}
                                            placeholder="Password"
                                            style={{ marginVertical: 12 }}
                                        />
                                        <CustomInput
                                            value={confirmPassword}
                                            error={
                                                touched.confirmPassword && errors.confirmPassword
                                            }
                                            onChangeText={handleChange("confirmPassword")}
                                            onBlur={handleBlur("confirmPassword")}
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
                                            onPress={() => handleSubmit()}
                                        />
                                    </ScrollView>
                                </>
                            );
                        }}
                    </Formik>
                </View>
            </View>
        </Background>
    );
}
