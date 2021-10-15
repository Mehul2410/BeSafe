import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    box1: { display: "flex", justifyContent: "center", alignItems: "center", marginVertical: 30 },
    box2: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1D0ECC",
        height: "100%",
        paddingTop: 40,
        paddingBottom: 130,
        width: "100%",
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60
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
    button: {
        paddingVertical: 10,
        textAlign: "center",
        backgroundColor: "#0085FF",
        color: "#FFF",
        height: 60,
        width: 330,
        borderRadius: 15,
        marginTop: 25,
        marginBottom: 40
    },
    scroll: {}
});

export default styles;
