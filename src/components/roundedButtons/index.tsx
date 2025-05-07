import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"


type RoundedButtonsComponentProps = {
    text: string,
    bgColor: string,
    color: string,
    handler: () => void
}
const RoundedButtonsComponent: React.FC<RoundedButtonsComponentProps> = ({ text, bgColor, color, handler }) => {
    return (
        <TouchableOpacity onPress={() => handler()} style={{ ...styles.roundedButtons, backgroundColor: bgColor ? bgColor : "#fff" }}>
            <Text style={{ ...styles.roundedButtonsText, color: color }}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    roundedButtons: {
        width: "100%",
        height: 53,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    roundedButtonsText: {
        fontWeight: 700,
        fontSize: 24,
        color: "#fff",
    }
})

export default RoundedButtonsComponent