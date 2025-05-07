import { StyleSheet } from "react-native"
import { colors } from "../../../rootConfig"

const styles = StyleSheet.create({
    mainProfileContainer: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: colors.darkColor,
    },
    userData: {
        width: "90%",
        alignItems: "center",
        justifyContent: "center",


    },
    userImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },

    bottomMenu: {
        width: "90%",
        position: "absolute",
        bottom: 0,
        marginBottom: 50,

    },
    userDataInfo: {
        width: "100%",
        justifyContent: "center",
    },
    userDataName: {
        width: "100%",
        marginBottom: 10,

    },
    profilePic: {
        marginTop: 60,
    },
    usernameLabel: {
        fontWeight: 700,
        fontSize: 18,
        color: "#fff",
        paddingLeft: "2%"
    },
    usernameInput: {
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginTop: 10,
        fontSize: 18,
        color: colors.darkColor,
        paddingLeft: "5%"
    },
    userButtons: {
        width: "100%",
        marginTop: 10,
        alignItems: "center",
    },
    userButton: {
        width: "95%",
        height: 50,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: 8,
        borderTopRightRadius: 8,
        marginTop: 20
    },
    userButtonText: {
        fontSize: 20,
        fontWeight: 700,
        color: colors.darkColor,
    }
})

export default styles