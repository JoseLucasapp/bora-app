import { StyleSheet } from "react-native"
import { colors } from "../../../rootConfig"

const styles = StyleSheet.create({
    mainGroupsContainer: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: colors.darkColor,
    },
    groupsContainer: {
        width: "90%",
        height: "60%",
        marginTop: 20,
        alignItems: "center",
    },
    groupsTitle: {
        fontSize: 25,
        fontWeight: 700,
        color: "#fff",
        marginBottom: 15,
    },
    groupCardContainer: {
        width: "100%",
        alignItems: "center",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    groupCard: {
        width: "47%",
        height: 110,
        alignItems: "center",
        justifyContent: "flex-end",
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 10,
        marginBottom: 20,
        overflow: 'hidden',

    },
    scrollContent: {
        padding: 16,
    },
    groupCardIcon: {
        fontSize: 50,
        color: "#fff",
        position: "absolute",
        top: 10,
    },
    groupCardText: {
        fontSize: 16,
        fontWeight: 700,
        color: "#fff",
        marginBottom: 10,
    },

    bottomMenu: {
        width: "90%",
        position: "absolute",
        bottom: 0,
        marginBottom: 50,

    }
})

export default styles