import { StyleSheet } from "react-native";
import { colors } from "../../../rootConfig";

const styles = StyleSheet.create({
    mainCreateAccount: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
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
    }
})

export default styles