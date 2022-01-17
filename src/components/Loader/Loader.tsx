import React, { ReactElement, ReactNode } from "react";
import { Background } from "@components";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { LightText, RegularText } from "../text/Typography";

export default function Loader(): ReactElement {
    return (
        <>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginVertical: 3
                }}
            >
                <ActivityIndicator size="large" color="#FFF" style={{ marginEnd: 10 }} />
                <LightText string="loading..." />
            </View>
        </>
    );
}

const styles = StyleSheet.create({});
