import { Background, LightText, MediumText, RegularText } from "@components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export function Wanted() {
    return (
        <Background>
            <MediumText size={30} string="Tips" />

            <View
                style={{
                    height: "80%",
                    width: "100%",
                    justifyContent: "space-evenly",
                    alignItems: "flex-start",
                    paddingHorizontal: 15
                }}
            >
                <MediumText align="flex-start" size={20} string="Protect yourself" />
                <LightText string="Run, call for help, or hide. Do what is necessary to keep yourself out of harm's way." />
                <MediumText align="flex-start" size={20} string="Help others" />
                <LightText string="Offer first aid to anyone who's injured." />
                <MediumText align="flex-start" size={20} string="Call for help" />
                <LightText string="As soon as possible, dial 911 to report the crime and to summon medical and law enforcement help." />
                <MediumText align="flex-start" size={20} string="Don't touch or move anything" />
                <LightText string="Remember that anything you touch or move can damage or contaminate critical evidence." />
                <MediumText align="flex-start" size={20} string="Pay attention" />
                <LightText string="Take a deep breath, relax, and look around. Notice people, what they look like, what they're wearing, any distinguishing marks they have, and what they're doing. Notice vehicle make, model, and license number, or any other distinguishing details, if possible." />
                <MediumText align="flex-start" size={20} string="Wait for the police" />
                <LightText string="When the police arrive, direct them to the crime and to any injured parties. Tell them exactly what you witnessed and answer all questions truthfully. Be careful to relate only what you know and don't attempt to help by filling in any gaps with what you believe should be true." />
            </View>
        </Background>
    );
}
