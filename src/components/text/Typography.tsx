import React, { StyleHTMLAttributes } from "react";
import { StyleProp, TextProps, TextStyle } from "react-native";
import Text from "./Text";

interface Props {
    string?: string;
    color?: string;
}

export const RegularText = ({ string, color }: Props) => {
    return (
        <Text weight="400" color="#FFF">
            {string}
        </Text>
    );
};

export const MediumText = ({ string, color }: Props) => {
    return (
        <Text weight="700" color="#FFF">
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
export const LightText = ({ string, color }: Props) => {
    return (
        <Text weight="200" color="#FFF">
            {string}
        </Text>
    );
};
export const StatusDetail = ({ string, color }: Props) => {
    return (
        <Text
            weight="400"
            color="#1D0ECC"
            style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                paddingHorizontal: 15,
                paddingVertical: 8
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
