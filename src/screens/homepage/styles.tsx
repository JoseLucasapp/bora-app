import { StyleSheet } from "react-native"
import { colors } from "../../../rootConfig"

const styles = StyleSheet.create({
    mainHomeContainer: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: colors.darkColor,
    },
    streak: {
        width: "90%",
        height: 200,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    streakText: {
        fontSize: 25,
        fontWeight: 700,
        color: "#fff",
    },
    streakContainer: {
        width: "60%",
        alignItems: "center",
        justifyContent: "center",
        height: 150,
        borderRadius: 20,
        marginTop: 20
    },
    streakNumber: {
        fontSize: 40,
        fontWeight: 700,
        color: "#fff",
        position: "absolute",
        zIndex: 10,
        top: 40,
    },
    streakImage: {
        width: 150,
        height: 150,
    },

    bottomMenu: {
        width: "90%",
        position: "absolute",
        bottom: 0,
        marginBottom: 50,

    },
    calendarMain: {
        width: "90%",
        alignItems: "center",
        height: 300,
    }
})

export default styles