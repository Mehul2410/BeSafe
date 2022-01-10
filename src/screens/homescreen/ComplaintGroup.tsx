import React, { useState } from "react";
import {
    View,
    Image,
    ScrollView,
    Modal,
    TouchableOpacity,
    TouchableWithoutFeedback
} from "react-native";
import { Background, StatusDetail, Text, DateAndTime } from "@components";
import { NavigationProps } from "@types";
import { colors } from "@utils";

export function ComplaintGroup({ navigation }: NavigationProps<"ComplaintGroup">) {
    const group = [
        {
            id: 1,
            date: "29-Aug",
            time: "06:00 am",
            status: "status",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap into electronic typesetting, remainingessentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap into electronic typesetting, remainingessentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap into electronic typesetting, remainingessentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap into electronic typesetting, remainingessentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap into electronic typesetting, remainingessentially unchanged.",
            image: ["@assets/admin.png", "@assets/admin.png"]
        },
        {
            id: 2,
            date: "29-Aug",
            time: "06:00 am",
            status: "In Process",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap into electronic typesetting, remainingessentially unchanged.",
            image: ["@assets/admin.png", "@assets/admin.png"]
        },
        {
            id: 3,
            date: "29-Aug",
            time: "06:00 am",
            status: "status",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap into electronic typesetting, remainingessentially unchanged.",
            image: ["@assets/admin.png", "@assets/admin.png"]
        },
        {
            id: 4,
            date: "29-Aug",
            time: "06:00 am",
            status: "status",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap into electronic typesetting, remainingessentially unchanged."
        },
        {
            id: 5,
            date: "29-Aug",
            time: "06:00 am",
            status: "status",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap into electronic typesetting, remainingessentially unchanged."
        },
        {
            id: 6,
            date: "29-Aug",
            time: "06:00 am",
            status: "status",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap into electronic typesetting, remainingessentially unchanged."
        },
        {
            id: 7,
            date: "29-sep",
            time: "06:00 am",
            status: "status",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap into electronic typesetting, remainingessentially unchanged."
        }
    ];

    return (
        <Background>
            <View
                style={{
                    width: "100%",
                    height: "100%",
                    paddingHorizontal: 20,
                    paddingBottom: 60
                }}
            >
                <Text style={{ color: "#FFF", marginBottom: 18, textAlign: "center" }}>
                    Complaints
                </Text>
                <View>
                    <ScrollView>
                        {group.map(item => {
                            console.log(item);
                            return (
                                <TouchableWithoutFeedback
                                    key={item.id}
                                    onPress={() => {
                                        navigation.navigate("ComplaintsLayout", item);
                                    }}
                                >
                                    <View
                                        style={{
                                            marginVertical: 10,
                                            width: "100%",
                                            backgroundColor: "#281B89",
                                            borderRadius: 10,
                                            padding: 10,
                                            elevation: 3
                                        }}
                                    >
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center"
                                            }}
                                        >
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    alignItems: "center"
                                                }}
                                            >
                                                <StatusDetail string={item.status} />
                                                <View
                                                    style={{
                                                        flexDirection: "column",
                                                        alignItems: "flex-start",
                                                        marginLeft: 10
                                                    }}
                                                >
                                                    <DateAndTime string={item.date} />
                                                    <DateAndTime string={item.time} />
                                                </View>
                                                {/* <Image
                                                        resizeMode="contain"
                                                        style={{
                                                            height: 22,
                                                            width: 22,
                                                            marginLeft: 4
                                                        }}
                                                        source={require("@assets/remainder.png")}
                                                    /> */}
                                            </View>
                                        </View>

                                        <Text
                                            weight="400"
                                            style={{
                                                color: colors.white,
                                                fontSize: 15,
                                                marginTop: 5
                                            }}
                                        >
                                            Reason
                                        </Text>
                                        <Text
                                            numberOfLines={4}
                                            weight="400"
                                            style={{
                                                color: colors.white,
                                                fontSize: 12,
                                                paddingTop: 5
                                            }}
                                        >
                                            {item.text}
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            );
                        })}
                    </ScrollView>
                </View>
            </View>
        </Background>
    );
}

// id={a?.id}
// status={a?.status}
// date={a?.date}
// time={a?.time}
// reason={a?.reason}
// text={a?.text}
