import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    view: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        paddingTop: 50
    },
    img: {
        height: 170,
        width: 170,
        borderRadius: 95,
        marginBottom: 30,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#1D0ECC",
        borderWidth: 5
    },
    edit: {
        height: 30,
        width: 30,
        backgroundColor: "#FFF",
        borderRadius: 50,
        position: "absolute",
        top: 145,
        right: 35,
        alignItems: "center",
        justifyContent: "center"
    },
    name: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#1D0ECC",
        borderRadius: 10,
        paddingVertical: 18,
        width: 330
    },

    // protext: {
    //     color: "#FFF",
    //     textAlign: "center",
    //     backgroundColor: "#1D0ECC",
    //     height: 50,
    //     width: 320,
    //     borderTopLeftRadius: 10,
    //     borderTopRightRadius: 10,

    //     paddingVertical: 9
    // },
    btn: {
        color: "#FFF",
        textAlign: "center",
        backgroundColor: "#1D0ECC",
        height: 50,
        width: 320,
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 9
    },
    probtn: {
        height: 300,
        width: 330,
        backgroundColor: "#1D0ECC",
        marginTop: 30,
        borderRadius: 10,
        justifyContent: "space-evenly",
        alignItems: "center"
    }
});

export default styles;
