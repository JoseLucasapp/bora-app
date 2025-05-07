import { StyleSheet } from "react-native"
import { colors } from "../../../rootConfig"

const styles = StyleSheet.create({
    mainAchievementsContainer: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: colors.darkColor,
    },

    bottomMenu: {
        width: "90%",
        position: "absolute",
        bottom: 0,
        marginBottom: 50,

    },
    myAchievements: {
        width: "90%",
    },
    groupCard: {
        width: "100%",
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    groupCardIcon: {
        fontSize: 25,
        fontWeight: 500,
        color: colors.mainColor,
    },
    groupCardText: {
        fontSize: 10,
        fontWeight: 700,

    },
    groupCardBar: {
        width: "90%",
        height: 15,
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: colors.darkColor,
        alignItems: "center",
        justifyContent: "center",
    },
    groupCardBarText: {
        fontSize: 10,
        fontWeight: 500,
        color: "#fff"
    }
})

export default styles