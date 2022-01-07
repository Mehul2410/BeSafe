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
                        Verification Details
                    </Text>
                </View>
                <View style={styles.box2}>
                    <ScrollView>
                        <CustomInput placeholder="Adhaar Card No." />
                        <CustomInput placeholder="Pan Card No." />
                        <CustomInput placeholder="Email Id" />
                        <CustomInput placeholder="Police Id" />
                        <CustomInput placeholder="Posting Area" />
                        <CustomInput placeholder="Station Name" />
                        <CustomInput placeholder="Police Post" />
                        <CustomInput placeholder="City" />
                        <CustomInput placeholder="Nearest Location" />
                        <Button
                            style={{ backgroundColor: "#281B89" }}
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
