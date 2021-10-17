import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screenview: {
        flex: 1,
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
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    container2: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
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
