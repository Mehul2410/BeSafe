import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screenview: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        marginTop: 80
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
        backgroundColor: "#1D0ECC",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 25,
        paddingVertical: 30,
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    }
});

export default styles;
