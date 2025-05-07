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

    }
})

export default styles