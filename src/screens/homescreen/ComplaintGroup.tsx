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
        },
        {
            id: 7,
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
            {/* style={{ flex: 1, height: "100%", width: "100%" }}
             style={{ alignItems: "center", width: "100%" }}
             */}
            <View>
                <Text style={{ color: "#FFF", marginBottom: 18, textAlign: "center" }}>
                    Complaints
                </Text>
                <View
                    style={{
                        paddingHorizontal: 20,
                        paddingBottom: 215
                    }}
                >
                    <ScrollView>
                        {group.map(item => {
                            return (
                                <TouchableWithoutFeedback
                                    key={item.id}
                                    onPress={() => {
                                        seta(item);
                                        setShow(true);
                                    }}
                                >
                                    <View>
                                        <View
                                            style={{
                                                marginVertical: 10,
                                                width: "100%",
                                                backgroundColor: "#281B89",
                                                borderRadius: 10,
                                                padding: 10,
                                                maxWidth: 350,
                                                margin: "auto"
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
                                                {item.reason}
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
                                                    style={{}}
                                                />
                                            </Modal>
                                        )}
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
