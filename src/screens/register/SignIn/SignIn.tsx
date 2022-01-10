import { Background, Button, CustomInput, Text } from "@components";
import { NavigationProps } from "@types";
import { colors } from "@utils";
import React, { ReactElement } from "react";
import { View, Image } from "react-native";
import styles from "./signin.styles";
import { SignInvalidationSchema } from "@utils";
import { Formik, FormikHelpers } from "formik";
import { myDetails, signInUser } from "@contexts/api/client";
import { useDispatch } from "react-redux";
import { signUp, userData } from "@contexts/slice/authSlice";
import { isTokenExpired } from "@contexts/store/credentials";

interface signInProps {
    email: string;
    password: string;
    role: number;
}

export default function SignIn({ navigation, route }: NavigationProps<"SignIn">): ReactElement {
    const signInInfo = {
        email: "",
        password: "",
        role: route.params.role
    };
    const dispatch = useDispatch();
    const [signInError, setSignInError] = React.useState("");
    const SignInUser = async (values: signInProps, formikActions: FormikHelpers<signInProps>) => {
        const res = await fetch(signInUser, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...values })
        });
        const result = await res.json();
        if (result.success) {
            formikActions.resetForm();
            formikActions.setSubmitting(false);
            // dispatch(signIn(result));
            if (!isTokenExpired(result.access_token)) {
                const res = await fetch(myDetails, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        authorization: `Bearer ${result.access_token}`
                    }
                });
                const user = await res.json();
                dispatch(userData(user));
                //active status to be send from backend to login police
            }
            dispatch(signUp(result));
        } else {
            setSignInError(result.message);
            setTimeout(() => {
                setSignInError("");
                navigation.reset({
                    index: 0,
                    routes: [{ name: "Register" }]
                });
            }, 2000);
        }
    };

    return (
        <Background>
            <View style={styles.view}>
                <View style={styles.box1}>
                    <Image resizeMode="center" style={styles.img} source={route.params.uri} />
                    <Text style={{ color: colors.white }}>
                        Sign-in as {route.params.role === 5000 ? "Police" : "Citizen"}
                    </Text>
                </View>
                <View style={styles.box2}>
                    <Formik
                        initialValues={signInInfo}
                        validationSchema={SignInvalidationSchema}
                        onSubmit={SignInUser}
                    >
                        {({ values, handleChange, errors, handleBlur, touched, handleSubmit }) => {
                            const { email, password, role } = values;
                            return (
                                <>
                                    <Text weight="700" style={{ color: "red", fontSize: 14 }}>
                                        {signInError}
                                    </Text>
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
                                        onPress={() => handleSubmit()}
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
