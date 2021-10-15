import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screenview: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
    },
    landingtext: {
        color: "#FFF",
        textAlign: "center"
    },
    besafe: {
        textAlign: "center",
        color: "#1D0ECC",
        marginBottom: 30
    },
    button: {
        backgroundColor: "#1D0ECC",
        color: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10
    },
    img: {
        height: 200,
        maxWidth: "80%",
        resizeMode: "contain"
    }
});

export default styles;
