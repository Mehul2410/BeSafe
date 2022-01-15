import React, { useState } from "react";
import { Background, CustomInput, Text, Button, RegularText, MediumText } from "@components";
import { View, Image } from "react-native";
import { colors } from "@utils";
import { NavigationProps } from "@types";
import { TabRouter } from "@react-navigation/native";
export function ViewProfile({ navigation, route }: NavigationProps<"ViewProfile">) {
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
                        height: "90%",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        borderRadius: 25
                    }}
                >
                    <Image
                        style={{
                            height: 150,
                            width: 150,
                            borderRadius: 95,
                            borderColor: "#FFF",
                            borderWidth: 5
                        }}
                        source={
                            route.params.avatar
                                ? { uri: route.params.avatar }
                                : require("@assets/img.png")
                        }
                    />

                    <MediumText color="#FFF" string="citizen" />

                    <RegularText color="#FFF" string={`Name: ${route.params.name}`} />
                    <RegularText color="#FFF" string={`Email: ${route.params.email}`} />
                    <RegularText color="#FFF" string={`DOB: ${route.params.userDetails.dob}`} />
                    <RegularText
                        color="#FFF"
                        string={`Adharcard: ${route.params.userDetails.adhaarCard}`}
                    />
                    <RegularText
                        color="#FFF"
                        string={`Pancard: ${route.params.userDetails.panCard}`}
                    />
                    <RegularText
                        color="#FFF"
                        string={`Address: ${route.params.userDetails.address}`}
                    />
                    <RegularText color="#FFF" string={`Occupation:`} />
                </View>
            </View>
        </Background>
    );
}
