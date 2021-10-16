import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    view: {
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    char: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20
    },
    text: {
        color: "#FFF"
    },
    img: {
        height: 180,
        maxWidth: "80%",
        resizeMode: "contain"
    }
});

export default styles;
