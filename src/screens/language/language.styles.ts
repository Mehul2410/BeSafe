import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screenview: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    scroll: {
        width: "100%"
    },
    text: {
        color: "#FFF",
        textAlign: "justify"
    },
    button: {
        width: 350,
        maxWidth: "80%",
        textAlign: "center",
        backgroundColor: "#FFF",
        color: "#362C87",
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10
    },
    container1: {
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 30,
        flex: 1
    },
    container2: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 300,
        padding: 20,
        backgroundColor: "#1D0ECC",
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    },
    img: {
        height: 250,
        maxWidth: "80%",
        resizeMode: "contain"
    }
});

export default styles;
