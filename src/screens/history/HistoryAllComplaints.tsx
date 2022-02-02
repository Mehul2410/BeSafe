import { View, TouchableWithoutFeedback, Image, FlatList } from "react-native";
import React from "react";
import { NavigationProps } from "@types";
import { Background, LightText, Text } from "@components";
import { useTranslation } from "react-i18next";

type Props = {};

const HistoryAllComplaints = ({ navigation }: NavigationProps<"HistoryAllComplaints">) => {
    const { t } = useTranslation();
    const complaints = [
        {
            id: 0,
            name: `${t("reportCom")}`,
            uri: require("@assets/report.png"),
            navi: "HistoryPost"
        },
        {
            id: 1,
            name: `${t("missPerson")}`,
            uri: require("@assets/missing.png"),
            navi: "HistoryMissingPerson"
        },
        {
            id: 2,
            name: `${t("unidPerson")}`,
            uri: require("@assets/unid.png"),
            navi: "HistoryUnidentifiedPerson"
        },
        {
            id: 3,
            name: `${t("mslf")}`,
            uri: require("@assets/stolen.png"),
            navi: "HistoryMSLF"
        },

        {
            id: 4,
            name: `${t("wanted")}`,
            uri: require("@assets/Wanted.png"),
            navi: "Wanted"
        },

        {
            id: 5,
            name: `${t("mobApp")}`,
            uri: require("@assets/cyber.png"),
            navi: "MobileApp"
        },

        {
            id: 6,
            name: `${t("bank")}`,
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
                    renderItem={Btn}
                    keyExtractor={(item, index) => item.name}
                    numColumns={2}
                    bounces={true}
                    stickyHeaderIndices={[0]}
                    ListHeaderComponentStyle={{
                        width: "50%",
                        backgroundColor: "#130e5c",
                        paddingBottom: 5
                    }}
                    ListHeaderComponent={
                        <Text color="#FFF" style={{ textAlign: "center" }}>
                            {t("history")}
                        </Text>
                    }
                />
            </View>
        </Background>
    );
};

export default HistoryAllComplaints;
