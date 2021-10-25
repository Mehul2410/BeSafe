import React from "react";
import {
    View,
    Image,
    ScrollView,
    Modal,
    TouchableOpacityProps,
    Pressable,
    PressableProps
} from "react-native";
import { Text } from "@components";
import { colors } from "@utils";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GenericTouchableProps } from "react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable";

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
                justifyContent: "center"
            }}
            key={id}
        >
            <View
                style={{
                    backgroundColor: "#434974",
                    height: "90%",
                    width: "90%",
                    borderRadius: 15,
                    paddingTop: 20,
                    paddingHorizontal: 15
                }}
            >
                <ScrollView style={{}}>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <Text
                            weight="700"
                            style={{
                                backgroundColor: "#A6B1E1",
                                height: 40,
                                width: 130,
                                textAlign: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                borderRadius: 10,
                                fontSize: 20
                            }}
                        >
                            {status}
                        </Text>
                        <Image
                            source={require("@assets/remainder.png")}
                            resizeMode="contain"
                            style={{
                                height: 28,
                                width: 28,
                                position: "relative",
                                right: 50
                            }}
                        />
                        <Pressable {...props}>
                            <View>
                                <Image
                                    source={require("@assets/close.png")}
                                    resizeMode="contain"
                                    style={{
                                        height: 25,
                                        width: 25,
                                        position: "relative",
                                        right: 0,
                                        tintColor: colors.white
                                    }}
                                />
                            </View>
                        </Pressable>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            marginVertical: 10,
                            marginStart: 3
                        }}
                    >
                        <Text
                            weight="400"
                            style={{
                                fontSize: 15,
                                color: colors.white,
                                marginRight: 5
                            }}
                        >
                            {date}
                        </Text>
                        <Text
                            weight="400"
                            style={{
                                fontSize: 15,
                                color: colors.white
                            }}
                        >
                            {time}
                        </Text>
                    </View>
                    <View>
                        <Text
                            weight="400"
                            style={{
                                color: colors.white,
                                marginBottom: 10,
                                fontSize: 22,
                                marginStart: 3
                            }}
                        >
                            {reason}
                        </Text>
                        <Text
                            weight="400"
                            numberOfLines={8}
                            style={{
                                fontSize: 20,
                                color: colors.white,
                                backgroundColor: "#A6B1E1",
                                padding: 8,
                                borderRadius: 10
                            }}
                        >
                            {text}
                        </Text>
                        <Text
                            weight="400"
                            style={{
                                color: colors.white,
                                marginVertical: 10,
                                fontSize: 22,
                                marginStart: 3
                            }}
                        >
                            Images
                        </Text>
                        <View
                            style={{
                                backgroundColor: "#A6B1E1",
                                height: 300,
                                borderRadius: 10
                            }}
                        />
                        <Text
                            weight="400"
                            style={{
                                color: colors.white,
                                fontSize: 23,
                                marginVertical: 13,
                                height: 50,
                                backgroundColor: "#A6B1E1",
                                textAlign: "center",
                                textAlignVertical: "center",
                                borderRadius: 10
                            }}
                        >
                            Case Handler: NAME
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
