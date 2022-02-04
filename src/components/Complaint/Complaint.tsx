import React, { Children, ReactNode, useRef } from "react";
import Text from "../text/Text";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CustomInput from "../CustomInput/CustomInput";

interface complaintProps {
    error?: string;
    children?: ReactNode;
}

function Complaint({ error, children }: complaintProps) {
    const scrollView = useRef<ScrollView>(null);
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
                <ScrollView
                    ref={scrollView}
                    onContentSizeChange={() =>
                        error !== "" && scrollView?.current?.scrollTo({ y: 0, animated: true })
                    }
                >
                    {children}
                </ScrollView>
            </View>
        </View>
    );
}

export default Complaint;
