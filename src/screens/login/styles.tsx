import { StyleSheet } from "react-native";
import { colors } from "../../../rootConfig";

const styles = StyleSheet.create({
    mainLogin: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.mainColor,
    },
    arrow: {
        width: 35,
        height: 35,
        top: 59,
        left: 24,
        position: "absolute",
    },
    loginInput: {
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
    },
    loginText: {
        fontWeight: 700,
        color: "#fff",
        fontSize: 36,

    },
    loginInputContainer: {
        marginTop: 100,
        width: "100%",
        height: 120,
        justifyContent: "space-between"
    },
    loginInputText: {
        width: "100%",
        height: 50,
        backgroundColor: colors.mainColor,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 8,
        color: "#fff",
        fontSize: 16,
        paddingLeft: "5%",

    },
    loginButtonContainer: {
        marginTop: 50,
        width: "100%",
        alignItems: "center",
    },
    loginButton: {
        width: "100%",
        backgroundColor: "#fff",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
    loginButtonText: {
        fontWeight: 700,
        fontSize: 24,
        color: colors.mainColor,
    },
    forgetPassword: {
        marginTop: 20,
        fontSize: 20,
        color: "#fff",
        fontWeight: 700
    }
})

export default styles