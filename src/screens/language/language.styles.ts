import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screenview: {
        display: "flex",
        backgroundColor: "#0085FF",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
    },
    text: {
        color: "#FFF"
    },
    button: {
        width: "100%",
        maxWidth: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        color: "#362C87",
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10
    },
    view: {
        flex: 1,
        backgroundColor: "#1D0ECC",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "auto"
    }
});

export default styles;
