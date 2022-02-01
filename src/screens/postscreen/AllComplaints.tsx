import { View, Image, FlatList } from "react-native";
import React from "react";
import { Background, LightText, MediumText, Text } from "@components";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Post } from "./Post";
import { NavigationProps } from "@types";

interface profileBtnProps {
    navigate: "Post";
    items: any;
}

export function AllComplaints({ navigation }: NavigationProps<"AllComplaints">) {
    const complaints = [
        { id: 0, name: "Report complaint", uri: require("@assets/report.png"), navi: "Post" },
        {
            id: 1,
            name: "Missing person search",
            uri: require("@assets/missing.png"),
            navi: "MissingPerson"
        },
        {
            id: 2,
            name: "Un-identified person found",
            uri: require("@assets/unid.png"),
            navi: "UnidPerson"
        },
        {
            id: 3,
            name: "Missing/stolen/lost/found",
            uri: require("@assets/stolen.png"),
            navi: "MSLF"
        },
        {
            id: 4,
            name: "Wanted Criminals",
            uri: require("@assets/Wanted.png"),
            navi: "Wanted"
        },
        {
            id: 5,
            name: "Mobile Apps Report",
            uri: require("@assets/cyber.png"),
            navi: "MobileApp"
        },
        {
            id: 6,
            name: "Bank related",
            uri: require("@assets/bank.png"),
            navi: "Bank"
        }
    ];

    const Btn = ({ item }: any) => {
        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate(item.navi)}>
                <View
                    style={{
                        backgroundColor: "#281A89",
                        borderRadius: 10,
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        padding: 20,
                        width: "100%",
                        maxWidth: 150,
                        height: 200,
                        margin: 10
                    }}
                >
                    <Image
                        source={item.uri}
                        resizeMode="contain"
                        style={{
                            height: "90%",
                            width: "100%",
                            alignSelf: "center",
                            marginBottom: 10
                        }}
                    />
                    <LightText textalign="center" string={item.name} />
                </View>
            </TouchableWithoutFeedback>
        );
    };
    return (
        <Background>
            <View
                style={{
                    paddingHorizontal: 10,
                    width: "100%",
                    height: "100%",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                }}
            >
                <FlatList
                    data={complaints}
                    style={{}}
                    renderItem={Btn}
                    keyExtractor={(item, index) => item.name}
                    numColumns={2}
                    bounces={true}
                    stickyHeaderIndices={[0]}
                    ListHeaderComponent={
                        <View
                            style={{ width: "100%", backgroundColor: "#130e5c", paddingBottom: 5 }}
                        >
                            <Text color="#FFF" style={{ textAlign: "center" }}>
                                Post Complaints
                            </Text>
                        </View>
                    }
                />
            </View>
        </Background>
    );
}
