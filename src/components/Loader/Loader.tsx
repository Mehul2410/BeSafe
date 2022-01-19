import React, { ReactElement, ReactNode } from "react";
import { Background } from "@components";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { LightText, RegularText } from "../text/Typography";

export const PostLoader = () => {
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
};

export const Normalloader = () => {
    return (
        <>
            <View style={{ height: "100%", alignItems: "center" }}>
                <ActivityIndicator size={90} color="#FFF" style={{ marginEnd: 10 }} />
            </View>
        </>
    );
};
