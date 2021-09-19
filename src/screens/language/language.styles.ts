import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screenview: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#FFF",
        textAlign: "justify"
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
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#1D0ECC",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 10
    }
});

export default styles;
