import React from "react";
import { Background, Text } from "@components";
import { TouchableOpacity, ScrollView, FlatList } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./detail.styles";

export function PoliceDetail() {
    return (
        <Background>
            <View style={styles.box1}>
                <Text
                    weight="700"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 40,
                        color: "#FFF"
                    }}
                >
                    Verification Details
                </Text>
            </View>
            <View style={styles.box2}>
                <ScrollView style={styles.scroll}>
                    <TextInput style={styles.text} placeholder="Adhaar Card No."></TextInput>
                    <TextInput style={styles.text} placeholder="Pan Card No."></TextInput>
                    <TextInput style={styles.text} placeholder="Email Id"></TextInput>
                    <TextInput style={styles.text} placeholder="Police Id"></TextInput>
                    <TextInput style={styles.text} placeholder="Posting Area"></TextInput>
                    <TextInput style={styles.text} placeholder="Station Name"></TextInput>
                    <TextInput style={styles.text} placeholder="Police Post"></TextInput>
                    <TextInput style={styles.text} placeholder="City"></TextInput>
                    <TextInput style={styles.text} placeholder="Nearest Location"></TextInput>
                    <TouchableOpacity>
                        <Text weight="700" style={styles.button}>
                            verify
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </Background>
    );
}
