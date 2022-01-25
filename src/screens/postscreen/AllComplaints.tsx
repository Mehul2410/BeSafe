import { View, Text, Image } from "react-native";
import React from "react";
import { Background, MediumText } from "@components";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Post } from "./Post";
import { NavigationProps } from "@types";

// interface profileBtnProps {
//     navigate: "Post";
//     items: any;
// }

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

    // const Btn = ({ navigate, items }: profileBtnProps) => {
    //     return (
    //         <TouchableWithoutFeedback key={items.id} onPress={() => navigation.navigate(navigate)}>
    //             <View
    //                 style={{
    //                     backgroundColor: "#281A89",
    //                     borderRadius: 10,
    //                     flexDirection: "row",
    //                     justifyContent: "space-evenly",
    //                     padding: 10
    //                 }}
    //             >
    //                 <Image
    //                     source={items.uri}
    //                     resizeMode="contain"
    //                     style={{
    //                         height: 80,
    //                         width: "30%",
    //                         alignSelf: "center"
    //                     }}
    //                 />
    //                 <MediumText width={"70%"} size={18} string={items.name} />
    //             </View>
    //         </TouchableWithoutFeedback>
    //     );
    // };
    return (
        <Background>
            <ScrollView>
                <View
                    style={{
                        paddingHorizontal: 10,
                        height: "100%",
                        justifyContent: "space-evenly"
                    }}
                >
                    {complaints.map(items => {
                        return (
                            <TouchableWithoutFeedback
                                key={items.id}
                                onPress={() => navigation.navigate(items.navi)}
                            >
                                <View
                                    style={{
                                        backgroundColor: "#281A89",
                                        borderRadius: 10,
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        padding: 10,
                                        marginVertical: 5
                                    }}
                                >
                                    <Image
                                        source={items.uri}
                                        resizeMode="contain"
                                        style={{
                                            height: 80,
                                            width: "30%",
                                            alignSelf: "center"
                                        }}
                                    />
                                    <MediumText width={"70%"} size={18} string={items.name} />
                                </View>
                            </TouchableWithoutFeedback>
                        );
                        // <><Btn items={items} navigate={items.navi} /></>;
                    })}
                </View>
            </ScrollView>
        </Background>
    );
}
