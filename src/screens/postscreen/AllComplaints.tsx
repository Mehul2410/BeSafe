import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { Background, LightText, MediumText } from "@components";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Post } from "./Post";
import { NavigationProps } from "@types";

interface profileBtnProps {
    navigate: "Post";
    items: any;
}

export function AllComplaints({ navigation }: NavigationProps<"AllComplaints">) {
    const complaints = [
        { id: 0, name: "Report complaint", uri: require("@assets/police.png"), navi: "Post" },
        {
            id: 1,
            name: "Missing person search",
            uri: require("@assets/police.png"),
            navi: "MissingPerson"
        },
        {
            id: 2,
            name: "Un-identified person found",
            uri: require("@assets/police.png"),
            navi: "UnidPerson"
        },
        {
            id: 3,
            name: "Missing/stolen/lost/found",
            uri: require("@assets/police.png"),
            navi: "MSLF"
        },
        {
            id: 4,
            name: "Economic & cybercrime",
            uri: require("@assets/police.png"),
            navi: "CyberCrime"
        },
        {
            id: 5,
            name: "Wanted Criminals",
            uri: require("@assets/police.png"),
            navi: "Wanted"
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
            {/* <ScrollView> */}
            <View
                style={{
                    paddingHorizontal: 10,
                    width: "100%",
                    height: "100%",
                    justifyContent: "space-evenly"
                }}
            >
                <FlatList
                    data={complaints}
                    renderItem={Btn}
                    keyExtractor={(item, index) => item.name}
                    numColumns={2}
                    bounces={true}
                />
            </View>
            {/* </ScrollView> */}
        </Background>
    );
}
