import { Background, Button, CustomInput, Text } from "@components";
import { NavigationProps } from "@types";
import { colors } from "@utils";
import React, { ReactElement } from "react";
import { View, Image } from "react-native";
import styles from "./signin.styles";
import { SignInvalidationSchema } from "@utils";
import { Formik } from "formik";

export default function SignIn({ navigation, route }: NavigationProps<"SignIn">): ReactElement {
    const signInInfo = {
        email: "",
        password: ""
    };

    return (
        <Background>
            <View style={styles.view}>
                <View style={styles.box1}>
                    <Image resizeMode="center" style={styles.img} source={route.params.uri} />
                    <Text style={{ color: colors.white }}>Sign-in as {route.params.role}</Text>
                </View>
                <View style={styles.box2}>
                    <Formik
                        initialValues={signInInfo}
                        validationSchema={SignInvalidationSchema}
                        onSubmit={(values, formikActions) => {
                            setTimeout(() => {
                                formikActions.resetForm();
                                formikActions.setSubmitting(false);
                            }, 3000);
                        }}
                    >
                        {({
                            values,
                            handleChange,
                            errors,
                            handleBlur,
                            touched,
                            isSubmitting,
                            handleSubmit
                        }) => {
                            const { email, password } = values;
                            console.log(isSubmitting);
                            return (
                                <>
                                    <CustomInput
                                        value={email}
                                        error={touched.email && errors.email}
                                        onChangeText={handleChange("email")}
                                        onBlur={handleBlur("email")}
                                        autoCapitalize="none"
                                        placeholder="User Id"
                                        style={{ width: "80%", marginVertical: 12 }}
                                    />
                                    <CustomInput
                                        value={password}
                                        error={touched.password && errors.password}
                                        onChangeText={handleChange("password")}
                                        onBlur={handleBlur("password")}
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
                                        btnName="SignIn"
                                        weight="400"
                                        style={{ width: "80%", marginVertical: 12 }}
                                        onPress={() => {
                                            handleSubmit(),
                                                isSubmitting === true
                                                    ? navigation.navigate("Home")
                                                    : null;
                                        }}
                                    />
                                </>
                            );
                        }}
                    </Formik>
                    <Text
                        weight="200"
                        style={{ color: "#FFF", fontSize: 18 }}
                        onPress={() => navigation.navigate("SignUp", route.params)}
                    >
                        Create your account
                    </Text>
                </View>
            </View>
        </Background>
    );
}
