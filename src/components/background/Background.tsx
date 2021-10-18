import React, { ReactElement, ReactNode } from "react";
import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";

type background = {
    children: ReactNode;
};

export default function Background({ children }: background): ReactElement {
    return (
        <SafeAreaView style={styles.screenview}>
            <StatusBar barStyle="default" />
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screenview: {
        flex: 1,
        backgroundColor: "#0085FF",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});
