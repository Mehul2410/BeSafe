import { View, Text, TouchableWithoutFeedback, Image, FlatList } from "react-native";
import React from "react";
import { NavigationProps } from "@types";
import { Background, LightText } from "@components";

type Props = {};

const ViewAllComplaints = ({ navigation }: NavigationProps<"ViewAllComplaints">) => {
    const complaints = [
        { id: 0, name: "Report complaint", uri: require("@assets/police.png"), navi: "ViewPost" },
        {
            id: 1,
            name: "Missing person search",
            uri: require("@assets/police.png"),
            navi: "ViewPost"
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
            navi: "ViewMSLF"
        },

        {
            id: 4,
            name: "Wanted Criminals",
            uri: require("@assets/police.png"),
            navi: "Wanted"
        },

        {
            id: 5,
            name: "Mobile Apps Report",
            uri: require("@assets/police.png"),
            navi: "MobileApp"
        },

        {
            id: 6,
            name: "Bank related",
            uri: require("@assets/police.png"),
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
            {/* <ScrollView> */}
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
                    renderItem={Btn}
                    keyExtractor={(item, index) => item.name}
                    numColumns={2}
                    bounces={true}
                />
            </View>
            {/* </ScrollView> */}
        </Background>
    );
};

export default ViewAllComplaints;
