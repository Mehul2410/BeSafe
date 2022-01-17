import React from "react";
import { View, Image, ScrollView, Pressable, PressableProps, Group } from "react-native";
import {
    Text,
    DateAndTime,
    StatusDetail,
    Reason,
    Background,
    RegularText,
    LightText
} from "@components";
import { colors } from "@utils";
import { NavigationProps } from "@types";

export function ComplaintsLayout({ route }: NavigationProps<"ComplaintsLayout">) {
    return (
        <Background bgColor="#281B89">
            <View
                style={{
                    height: "100%",
                    width: "100%",
                    paddingHorizontal: 20,
                    paddingBottom: 10
                }}
            >
                <ScrollView>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                width: "100%",
                                marginBottom: 10
                            }}
                        >
                            <StatusDetail string={route.params.status && route.params.status} />
                            <View
                                style={{
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    marginLeft: 10
                                }}
                            >
                                <DateAndTime
                                    string={new Date(route.params.createdAt!).toLocaleDateString(
                                        "en-IN"
                                    )}
                                />
                                <DateAndTime
                                    string={new Date(route.params.createdAt!).toLocaleTimeString(
                                        "en-IN"
                                    )}
                                />
                            </View>
                        </View>
                    </View>

                    <View>
                        <Reason string="Reason" />
                        <LightText string={route.params.reason} />

                        <Text
                            weight="700"
                            style={{
                                color: colors.white,
                                marginVertical: 10,
                                fontSize: 18,
                                marginStart: 3
                            }}
                        >
                            Images
                        </Text>
                        <View>
                            <ScrollView horizontal={true}>
                                {route.params.image &&
                                    route.params.image?.map((img, index) => {
                                        return (
                                            <Image
                                                key={index}
                                                resizeMode="contain"
                                                style={{
                                                    height: 150,
                                                    width: 200,
                                                    marginLeft: 10
                                                }}
                                                source={{ uri: img }}
                                            />
                                        );
                                    })}
                            </ScrollView>
                        </View>
                    </View>
                    <Text
                        weight="400"
                        style={{
                            color: colors.white,
                            fontSize: 23,
                            paddingVertical: 10,
                            backgroundColor: "#A6B1E1",
                            textAlign: "center",

                            borderRadius: 10
                        }}
                    >
                        Case Handler: NAME
                    </Text>
                </ScrollView>
            </View>
        </Background>
    );
}
