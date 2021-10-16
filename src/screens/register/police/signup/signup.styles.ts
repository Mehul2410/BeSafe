import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    view: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 70,
        paddingBottom: 20
    },
    text: {
        backgroundColor: "#FFF",
        color: "#000000",
        height: 60,
        width: 330,
        fontFamily: "Chillax-Regular",
        fontSize: 18,
        borderRadius: 15,
        paddingLeft: 15,
        marginVertical: 12
    },
    box: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1D0ECC",
        paddingBottom: 250,
        paddingTop: 30,
        width: "100%",
        marginVertical: 15,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60
    },
    button: {
        paddingVertical: 13,
        textAlign: "center",
        backgroundColor: "#0085FF",
        color: "#FFF",
        height: 60,
        width: 330,
        margin: 25,
        borderRadius: 15
    },
    checkboxcontainer: {
        display: "flex",
        flexDirection: "row",
        width: 330,
        marginTop: 10
    }
});

export default styles;
