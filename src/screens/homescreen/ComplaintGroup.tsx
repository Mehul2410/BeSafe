import React, { useState } from "react";
import { View, Image, ScrollView, Modal } from "react-native";
import { Background, Text } from "@components";
import { StyleSheet } from "react-native";
import { NavigationProps } from "@types";
import { colors } from "@utils";
import { Complaints } from "./Complaints";

interface C {
    id: number | undefined;
    date: string | undefined;
    time: string | undefined;
    status: string | undefined;
    view: string | undefined;
    reason: string | undefined;
    text: string | undefined;
}

export function ComplaintGroup({ navigation }: NavigationProps<"ComplaintGroup">) {
    const [a, seta] = useState<C | undefined>(undefined);
    const [show, setShow] = useState(false);
    const group = [
        {
            id: 1,
            date: "29-Aug",
            time: "06:00 am",
            status: "status",
            view: "View",
            reason: "Reason",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap into electronic typesetting, remainingessentially unchanged."
        },
        {
            id: 2,
            date: "29-Aug",
            time: "06:00 am",
            status: "status",
            view: "View",
            reason: "Reason",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap into electronic typesetting, remainingessentially unchanged."
        },
        {
            id: 3,
            date: "29-Aug",
            time: "06:00 am",
            status: "status",
            view: "View",
            reason: "Reason",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap into electronic typesetting, remainingessentially unchanged."
        },
        {
            id: 4,
            date: "29-Aug",
            time: "06:00 am",
            status: "status",
            view: "View",
            reason: "Reason",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap into electronic typesetting, remainingessentially unchanged."
        },
        {
            id: 5,
            date: "29-Aug",
            time: "06:00 am",
            status: "status",
            view: "View",
            reason: "Reason",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap into electronic typesetting, remainingessentially unchanged."
        },
        {
            id: 6,
            date: "29-Aug",
            time: "06:00 am",
            status: "status",
            view: "View",
            reason: "Reason",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap into electronic typesetting, remainingessentially unchanged."
        }
    ];

    return (
        <Background>
            <View style={{ flex: 1, height: "100%", width: "100%" }}>
                <View style={{ alignItems: "center", width: "100%" }}>
                    <Text style={{ color: "#FFF", marginBottom: 18 }}>Complaints</Text>
                    <Text
                        weight="700"
                        style={{
                            backgroundColor: "#A6B1E1",
                            height: 36,
                            width: 90,
                            textAlign: "center",
                            alignItems: "center",
                            textAlignVertical: "center",
                            borderRadius: 10,
                            fontSize: 20,
                            right: 140,
                            marginBottom: 10
                        }}
                    >
                        2021
                    </Text>
                </View>
                <View style={{ height: "80%", alignItems: "center", width: "100%" }}>
                    <ScrollView style={{}}>
                        {group.map(item => {
                            return (
                                <>
                                    <View
                                        key={item.id}
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            marginVertical: 10
                                        }}
                                    >
                                        <View
                                            style={{
                                                flexDirection: "column",
                                                paddingTop: 10,
                                                paddingEnd: 10
                                            }}
                                        >
                                            <Text
                                                weight="400"
                                                style={{
                                                    color: colors.white,
                                                    textAlign: "left",
                                                    fontSize: 14
                                                }}
                                            >
                                                {item.date}
                                            </Text>
                                            <Text
                                                weight="400"
                                                style={{
                                                    color: colors.white,
                                                    textAlign: "left",
                                                    fontSize: 14
                                                }}
                                            >
                                                {item.time}
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                backgroundColor: "#434974",
                                                height: 140,
                                                width: 290,
                                                borderRadius: 10,
                                                padding: 10
                                            }}
                                        >
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    justifyContent: "space-between"
                                                }}
                                            >
                                                <Text
                                                    weight="700"
                                                    style={{
                                                        backgroundColor: "#A6B1E1",
                                                        height: 35,
                                                        width: 100,
                                                        textAlign: "center",
                                                        alignItems: "center",
                                                        textAlignVertical: "center",
                                                        borderRadius: 10,
                                                        fontSize: 20
                                                    }}
                                                >
                                                    {item.status}
                                                </Text>
                                                <Image
                                                    resizeMode="contain"
                                                    style={{
                                                        height: 22,
                                                        width: 22,
                                                        position: "relative",
                                                        right: 40
                                                    }}
                                                    source={require("@assets/remainder.png")}
                                                />
                                                <Text
                                                    weight="400"
                                                    style={{
                                                        color: colors.white,
                                                        fontSize: 18,
                                                        position: "relative",
                                                        right: 10
                                                    }}
                                                    onPress={() => {
                                                        seta(item);
                                                        setShow(true);
                                                    }}
                                                >
                                                    {item.view}
                                                </Text>
                                            </View>

                                            <Text
                                                weight="400"
                                                style={{
                                                    color: colors.white,
                                                    fontSize: 20,
                                                    paddingTop: 25,
                                                    paddingStart: 5
                                                }}
                                            >
                                                {item.reason}
                                            </Text>
                                            <Text
                                                numberOfLines={1}
                                                weight="400"
                                                style={{
                                                    color: colors.white,
                                                    fontSize: 18,
                                                    paddingTop: 5,
                                                    paddingStart: 5
                                                }}
                                            >
                                                {item.text}
                                            </Text>
                                        </View>
                                    </View>

                                    {show && (
                                        <Modal transparent={true}>
                                            <Complaints
                                                onPress={() => setShow(!show)}
                                                id={a?.id}
                                                status={a?.status}
                                                date={a?.date}
                                                time={a?.time}
                                                reason={a?.reason}
                                                text={a?.text}
                                            />
                                        </Modal>
                                    )}
                                </>
                            );
                        })}
                    </ScrollView>
                </View>
            </View>
        </Background>
    );
}
