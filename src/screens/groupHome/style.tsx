import { StyleSheet } from "react-native";
import { colors } from "../../../rootConfig";

const styles = StyleSheet.create({
    mainGroupHome: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: colors.darkColor,
    },
    arrow: {
        width: 35,
        height: 35,
        top: 59,
        left: 24,
        position: "absolute",
    },

    groupData: {
        width: "90%",
        alignItems: "center",
        marginTop: 100,

    },
    groupTitle: {
        fontSize: 30,
        fontWeight: 700,
        color: "#fff",
        marginBottom: 15,
    },
    groupImage: {
        width: 250,
        height: 200,
        borderRadius: 10
    },
    question: {
        fontSize: 23,
        fontWeight: 700,
        color: "#fff",
        marginBottom: 15,
        marginTop: 15,
    },

    groupUserImage: {
        width: 40,
        height: 40,
        borderRadius: 100
    },

    groupUsers: {
        width: "100%",
        alignItems: "center"
    },

    groupInput: {
        width: "100%",
        alignItems: "center",
        height: 44,
        backgroundColor: "#fff",
        borderRadius: 100
    },
    scrollView: {
        width: "90%",
        height: 350,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 7,
        elevation: 5
    },
    groupUsersList: {
        width: "100%",
        alignItems: "center",

    },
    groupUser: {
        backgroundColor: colors.darkColor,
        width: "90%",
        height: 60,
        alignItems: "center",
        justifyContent: "space-around",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        flexDirection: "row",
        marginBottom: 10,
    },
    groupUserInfo: {
        flexDirection: "row",
        width: "50%",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    groupUserName: {
        fontSize: 10,
        fontWeight: 700,
        color: "#fff",
        marginLeft: 10
    },
    seeProfile: {
        fontSize: 10,
        fontWeight: 700,
        color: "#fff",
        marginLeft: 10
    },

    CreateAccountInput: {
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
    },
    CreateAccountText: {
        fontWeight: 700,
        color: "#fff",
        fontSize: 36,

    },
    CreateAccountInputContainer: {
        marginTop: 100,
        width: "100%",
        height: 120,
        justifyContent: "space-between"
    },
    CreateAccountInputText: {
        width: "100%",
        height: 50,
        backgroundColor: colors.darkColor,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 8,
        color: "#fff",
        fontSize: 16,
        paddingLeft: "5%",

    },
    CreateAccountButtonContainer: {
        marginTop: 50,
        width: "100%",
        alignItems: "center",
    },
    CreateAccountButton: {
        width: "100%",
        backgroundColor: "#fff",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
    CreateAccountButtonText: {
        fontWeight: 700,
        fontSize: 24,
        color: colors.darkColor,
    },
    forgetPassword: {
        marginTop: 20,
        fontSize: 20,
        color: "#fff",
        fontWeight: 700
    },
    bottomMenu: {
        width: "90%",
        bottom: 0,
        marginTop: 156,

    },
})

export default styles