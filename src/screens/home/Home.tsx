import React from "react";
import { View, Image } from "react-native";
import styles from "./home.styles";
import { RegularText, BoldText, MediumText } from "@utils";

export default function Home() {
    return (
        <View style={styles.screenview}>
            <Image source={require("../../../assets/getstarted.png")} />
            <BoldText style={styles.landingtext}>Welcome to</BoldText>
            <BoldText style={styles.besafe}>BeSafe!</BoldText>
            <RegularText style={styles.button}>Get Started</RegularText>
        </View>
    );
}
