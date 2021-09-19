import { StatusBar } from "expo-status-bar";
import React, { ReactElement, ReactNode } from "react";
import { View, StyleSheet } from "react-native";

type background = {
    children: ReactNode;
};

export default function Background({ children }: background): ReactElement {
    return (
        <View style={styles.screenview}>
            <StatusBar style="light" />
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    screenview: {
        flex: 1,
        backgroundColor: "#0085FF"
    }
});
