import React from "react";
import { Background, Button, CustomInput, Text } from "@components";
import { TouchableOpacity, ScrollView, FlatList, Image } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./detail.styles";
import { NavigationProps } from "@types";
import { colors } from "@utils";

export function PoliceDetail({ route, navigation }: NavigationProps<"PoliceDetail">) {
    return (
        <Background>
            <View style={styles.view}>
                <View style={styles.box1}>
                    <Text
                        weight="700"
                        style={{
                            textAlign: "center",
                            color: colors.white
                        }}
                    >
                        {route.params.role} Verification Details
                    </Text>
                </View>
                <View style={styles.box2}>
                    <ScrollView style={{ width: "80%", height: "80%" }}>
                        <CustomInput placeholder="Adhaar Card No." style={{ marginVertical: 12 }} />
                        <CustomInput placeholder="Pan Card No." style={{ marginVertical: 12 }} />
                        <CustomInput placeholder="Email Id" style={{ marginVertical: 12 }} />
                        <CustomInput placeholder="Police Id" style={{ marginVertical: 12 }} />
                        <CustomInput placeholder="Posting Area" style={{ marginVertical: 12 }} />
                        <CustomInput placeholder="Station Name" style={{ marginVertical: 12 }} />
                        <CustomInput placeholder="Police Post" style={{ marginVertical: 12 }} />
                        <CustomInput placeholder="City" style={{ marginVertical: 12 }} />
                        <CustomInput
                            placeholder="Nearest Location"
                            style={{ marginVertical: 12 }}
                        />
                        <Button
                            btnName="verify"
                            weight="400"
                            onPress={() => navigation.navigate("DetailFilled")}
                        />
                    </ScrollView>
                </View>
            </View>
        </Background>
    );
}
