import React, { Children, ReactNode } from "react";
import Text from "../text/Text";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CustomInput from "../CustomInput/CustomInput";

interface complaintProps {
    children?: ReactNode;
}

function Complaint({ children }: complaintProps) {
    return (
        <View
            style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 20,
                paddingBottom: 20
            }}
        >
            <Text weight="700" style={{ color: "#FFF", fontSize: 18, textAlign: "center" }}>
                Your details will be verified before processing!
            </Text>
            <Text
                weight="400"
                style={{
                    color: "#FFF",
                    fontSize: 13,
                    textDecorationLine: "underline",
                    textAlign: "center",
                    marginVertical: 10
                }}
            >
                Strict action will be taken for registering false complaint!!!
            </Text>
            <View
                style={{
                    width: "100%",
                    height: "85%",
                    backgroundColor: "#281B89",
                    paddingHorizontal: 20,
                    paddingVertical: 22,
                    borderRadius: 15
                }}
            >
                <ScrollView>{children}</ScrollView>
            </View>
        </View>
    );
}

export default Complaint;
