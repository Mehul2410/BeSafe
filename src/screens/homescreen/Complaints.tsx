import React from "react";
import { View, Image, ScrollView, Pressable, PressableProps } from "react-native";
import { Text, DateAndTime, RegularText, StatusDetail, Reason } from "@components";
import { colors } from "@utils";

type ComplaintsProps = {
    id: number | undefined;
    status: string | undefined;
    date: string | undefined;
    time: string | undefined;
    reason: string | undefined;
    text: string | undefined;
} & PressableProps;

export function Complaints({ id, status, date, time, reason, text, ...props }: ComplaintsProps) {
    return (
        <View
            style={{
                alignItems: "center",
                position: "absolute",
                top: 0,
                width: "100%",
                height: "100%",
                justifyContent: "center",
                backgroundColor: "#0085FF"
            }}
            key={id}
        >
            <View
                style={{
                    backgroundColor: "#281B89",
                    // height: "%",
                    width: "92%",
                    borderRadius: 15,
                    paddingTop: 20,
                    paddingHorizontal: 15
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        {/* <Text
                            weight="700"
                            style={{
                                backgroundColor: "#A6B1E1",
                                paddingHorizontal: 20,
                                paddingVertical: 8,
                                textAlign: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                borderRadius: 10,
                                fontSize: 20
                            }}
                        >
                            {status}
                        </Text> */}
                        <StatusDetail string={status} />
                        <View
                            style={{
                                flexDirection: "column",
                                alignItems: "flex-start",
                                marginLeft: 10
                            }}
                        >
                            <DateAndTime string={date} />
                            <DateAndTime string={time} />
                        </View>
                    </View>
                    {/* <Image
                        source={require("@assets/remainder.png")}
                        resizeMode="contain"
                        style={{
                            height: 28,
                            width: 28,
                            position: "relative",
                            right: 50
                        }}
                    /> */}
                    <Pressable {...props}>
                        <View>
                            <Image
                                source={require("@assets/close.png")}
                                resizeMode="contain"
                                style={{
                                    height: 20,
                                    width: 20,
                                    position: "relative",
                                    right: 0,
                                    tintColor: colors.white
                                }}
                            />
                        </View>
                    </Pressable>
                </View>

                <View>
                    <Reason string={reason} />
                    <View
                        style={{
                            height: "35%",
                            backgroundColor: "#A6B1E1",
                            padding: 8,
                            borderRadius: 10
                        }}
                    >
                        <ScrollView>
                            <Text
                                weight="400"
                                style={{
                                    fontSize: 17,
                                    color: colors.black
                                }}
                            >
                                {text}
                            </Text>
                        </ScrollView>
                    </View>
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
                    <View
                        style={{
                            backgroundColor: "#A6B1E1",
                            height: "35%",
                            borderRadius: 10
                        }}
                    />
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
            </View>
        </View>
    );
}
