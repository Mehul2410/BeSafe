import React from "react";
import { Text as DefaultText, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
// import {app}

export function MediumText(props: any) {
    const [loaded] = useFonts({
        "Chillax-Medium": require("../../../assets/fonts/Chillax-Medium.ttf")
    });
    if (!loaded) {
        return null;
    }
    return <DefaultText style={[styles.medium, props.style]}> {props.children} </DefaultText>;
}

export function BoldText(props: any) {
    const [loaded] = useFonts({
        "Chillax-Bold": require("../../../assets/fonts/Chillax-Bold.ttf")
    });

    if (!loaded) {
        return null;
    }
    return <DefaultText style={[styles.bold, props.style]}> {props.children} </DefaultText>;
}
export function LightText(props: any) {
    const [loaded] = useFonts({
        "Chillax-Regular": require("../../../assets/fonts/Chillax-Light.ttf")
    });

    if (!loaded) {
        return null;
    }
    return <DefaultText style={[styles.regular, props.style]}> {props.children} </DefaultText>;
}
export function RegularText(props: any) {
    const [loaded] = useFonts({
        "Chillax-Regular": require("../../../assets/fonts/Chillax-Regular.ttf")
    });

    if (!loaded) {
        return null;
    }
    return <DefaultText style={[styles.regular, props.style]}> {props.children} </DefaultText>;
}

const styles = StyleSheet.create({
    bold: {
        fontFamily: "Chillax-Bold",
        fontSize: 45,
        fontWeight: "900"
    },
    medium: {
        fontSize: 30,
        fontFamily: "Chillax-Medium"
    },
    regular: {
        fontSize: 25,
        fontFamily: "Chillax-Regular"
    },
    light: {
        fontSize: 15,
        fontFamily: "Chillax-Light"
    }
});
