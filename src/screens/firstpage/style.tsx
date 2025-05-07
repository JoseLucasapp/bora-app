import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    firstPageMain: {
        width: "100%",
        height: "100%",

    },
    opacityLayer: {
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        flex: 1,
        opacity: 0.4,
        backgroundColor: "rgba(0, 119, 182, 1)",
        position: "absolute",
    },
    firstPageContainer: {
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        flex: 1,
        zIndex: 1,
    },
    mainText: {
        fontSize: 42,
        top: 130,
        left: 28,
        fontWeight: 700,
        color: "#fff",

    },
    bottomText: {
        fontSize: 30,
        fontWeight: 700,
        color: "#fff",
        width: "90%",
    },
    bottomContainer: {
        width: "100%",
        height: "20%",
        alignItems: "center",
        justifyContent: "space-between",

        marginBottom: "10%",

    },
    bottomButtons: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",


    },
    bottomButtonsContainer: {
        width: "45%",
    }

})


export default styles