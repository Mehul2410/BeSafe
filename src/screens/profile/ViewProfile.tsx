import React, { useState } from "react";
import { Background, CustomInput, Text, Button, RegularText, MediumText } from "@components";
import { View, Image, ScrollView } from "react-native";
import { colors } from "@utils";
import { NavigationProps } from "@types";
import { TabRouter } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
export function ViewProfile({ navigation, route }: NavigationProps<"ViewProfile">) {
    const [paper, setPaper] = useState(false);
    return (
        <Background>
            <View
                style={{
                    padding: 20
                }}
            >
                <View
                    style={{
                        backgroundColor: "#1D0ECC",
                        width: "100%",
                        height: "100%",
                        alignItems: "flex-start",
                        borderRadius: 25,
                        padding: 20
                    }}
                >
                    <ScrollView>
                        <Image
                            style={{
                                height: 150,
                                width: 150,
                                borderRadius: 95,
                                borderColor: "#FFF",
                                borderWidth: 5,
                                alignSelf: "center"
                            }}
                            source={
                                route.params.avatar
                                    ? { uri: route.params.avatar }
                                    : require("@assets/img.png")
                            }
                        />

                        {route.params.role === 3000 ? (
                            <View>
                                <MediumText vmargin={10} color="#FFF" string="citizen" />
                                <RegularText
                                    vmargin={10}
                                    color="#FFF"
                                    string={`Name: ${route.params.name}`}
                                />
                                <RegularText
                                    vmargin={10}
                                    color="#FFF"
                                    string={`Email: ${route.params.email}`}
                                />
                                <RegularText
                                    vmargin={10}
                                    color="#FFF"
                                    string={`DOB: ${
                                        route.params.userDetails && route.params.userDetails.dob
                                    }`}
                                />
                                <RegularText
                                    vmargin={10}
                                    color="#FFF"
                                    string={`Address: ${
                                        route.params.userDetails && route.params.userDetails.address
                                    }`}
                                />
                                <RegularText
                                    vmargin={10}
                                    color="#FFF"
                                    string={`Occupation: ${
                                        route.params.userDetails &&
                                        route.params.userDetails.occupation
                                    }`}
                                />
                            </View>
                        ) : (
                            <View style={{ height: "90%" }}>
                                <MediumText vmargin={10} color="#FFF" string="police" />
                                <RegularText
                                    vmargin={10}
                                    color="#FFF"
                                    string={`Name: ${route.params.name}`}
                                />
                                <RegularText
                                    vmargin={10}
                                    color="#FFF"
                                    string={`Email: ${route.params.email}`}
                                />
                                <RegularText
                                    vmargin={10}
                                    color="#FFF"
                                    string={`DOB: ${route.params.userDetails.dob}`}
                                />
                                <RegularText
                                    vmargin={10}
                                    color="#FFF"
                                    string={`Police ID: ${route.params.userDetails.policeID}`}
                                />
                                <RegularText
                                    vmargin={10}
                                    color="#FFF"
                                    string={`Posting Area: ${route.params.userDetails.postingArea}`}
                                />
                                <RegularText
                                    vmargin={10}
                                    color="#FFF"
                                    string={`Police Post: ${route.params.userDetails.policePost}`}
                                />
                                <RegularText
                                    vmargin={10}
                                    color="#FFF"
                                    string={`Adhaarcard: ${route.params.userDetails.adhaarCard}`}
                                />
                                <RegularText
                                    vmargin={10}
                                    color="#FFF"
                                    string={`Pancard: ${route.params.userDetails.panCard}`}
                                />

                                <RegularText
                                    vmargin={10}
                                    color="#FFF"
                                    string={`Address: ${route.params.userDetails.address}`}
                                />
                                <RegularText
                                    vmargin={10}
                                    color="#FFF"
                                    string={`Posting Area: ${route.params.userDetails.postingAreaAddress}`}
                                />
                                <TouchableWithoutFeedback>
                                    <Button
                                        btnName="verification paper view"
                                        style={{
                                            backgroundColor: "#130e5c",
                                            paddingHorizontal: 15
                                        }}
                                        onPress={() => setPaper(!paper)}
                                    />
                                </TouchableWithoutFeedback>
                                {paper && (
                                    <Image
                                        style={{ height: 300, width: 300, alignSelf: "center" }}
                                        resizeMode="contain"
                                        source={{
                                            uri: route.params.userDetails.verificationPaper
                                        }}
                                    />
                                )}
                            </View>
                        )}
                    </ScrollView>
                </View>
            </View>
        </Background>
    );
}
