import { StyleSheet, Text, View, ViewProps, Animated } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

type Props = {} & ViewProps;

export default function FloatingButton({ style }: Props) {
    const [toggle, setToggle] = React.useState(false);
    return (
        <View style={[styles.box, style]}>
            {toggle && (
                <View style={{}}>
                    <View style={styles.btn1}>
                        <Text style={{ color: "#FFF", fontSize: 12 }}>Active</Text>
                    </View>
                    <View style={styles.btn2}>
                        <Text style={{ color: "#FFF", fontSize: 12 }}>Inactive</Text>
                    </View>
                </View>
            )}
            <TouchableWithoutFeedback onPress={() => setToggle(!toggle)}>
                <View style={styles.mainbtn}>
                    <Text style={{ color: "#000", fontSize: 15 }}>status</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute"
    },
    mainbtn: {
        backgroundColor: "#FFF",
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25
    },
    btn1: {
        backgroundColor: "#1C32F3",
        height: 45,
        width: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 45 / 2,
        marginBottom: 5
    },
    btn2: {
        backgroundColor: "#1C32F3",
        height: 45,
        width: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 45 / 2,
        marginBottom: 5
    }
});
