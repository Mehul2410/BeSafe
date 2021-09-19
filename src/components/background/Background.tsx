import { StatusBar } from "expo-status-bar";
import React, { ReactElement, ReactNode } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

type background = {
    children: ReactNode;
};

export default function Background({ children }: background): ReactElement {
    return (
        <SafeAreaView style={styles.screenview}>
            <StatusBar style="light" />
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screenview: {
        flex: 1,
        backgroundColor: "#0085FF"
    }
});
