import React, { StyleHTMLAttributes } from "react";
import { FlexAlignType, StyleProp, TextStyle } from "react-native";
import Text from "./Text";

interface Props {
    string?: string;
    color?: string;
    vmargin?: number;
    bgcolor?: string;
    align?: "auto" | FlexAlignType | undefined;
}

export const RegularText = ({ string, color, vmargin = 0 }: Props) => {
    return (
        <Text weight="400" color="#FFF" style={{ marginVertical: vmargin }}>
            {string}
        </Text>
    );
};

export const MediumText = ({ string, color, align = "center", vmargin = 0 }: Props) => {
    return (
        <Text weight="700" color="#FFF" style={{ alignSelf: align, marginVertical: vmargin }}>
            {string}
        </Text>
    );
};
export const LargeText = ({ string, color }: Props) => {
    return (
        <Text weight="900" color="#FFF">
            {string}
        </Text>
    );
};
export const LightText = ({ string, color, bgcolor }: Props) => {
    return (
        <Text weight="200" color="#FFF" style={{ textAlign: "justify" }}>
            {string}
        </Text>
    );
};
export const StatusDetail = ({ string, color }: Props) => {
    return (
        <Text
            weight="700"
            color="#1D0ECC"
            style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                paddingHorizontal: 15,
                paddingVertical: 8,
                fontSize: 17
            }}
        >
            {string}
        </Text>
    );
};
export const DateAndTime = ({ string, color }: Props) => {
    return (
        <Text
            weight="400"
            color="#FFF"
            style={{
                fontSize: 12
            }}
        >
            {string}
        </Text>
    );
};
export const Reason = ({ string, color }: Props) => {
    return (
        <Text
            weight="700"
            style={{
                color: "#FFF",
                marginTop: 5,
                marginBottom: 10,
                fontSize: 18,
                marginStart: 3
            }}
        >
            {string}
        </Text>
    );
};
