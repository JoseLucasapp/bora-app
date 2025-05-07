import { Image, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

type HeaderComponentsProps = {
    message: string,
}

const HeaderComponent: React.FC<HeaderComponentsProps> = ({ message }) => {
    const [username, setUsername] = useState("");
    useEffect(() => {
        const loadUsername = async () => {
            const saved = await AsyncStorage.getItem("username");
            if (saved) setUsername(saved);
        };

        loadUsername();
    }, []);
    return (
        <View style={styles.header}>
            <View style={styles.userInfo}>
                <Text style={styles.username}>Olá, {username}</Text>
                <Text style={styles.start}>{message}</Text>
            </View>

            <View style={styles.userImageContainer}>
                <Image style={styles.userImage} source={require("../../../assets/icons/avatar.png")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        marginTop: 50,

    },
    userInfo: {
        width: "50%",
    },
    username: {
        fontWeight: 700,
        fontSize: 25,
        color: "#fff",

    },
    start: {
        fontSize: 19,
        color: "#fff",
    },

    userImageContainer: {
        width: "50%",
        alignItems: "flex-end",

    },
    userImage: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
})

export default HeaderComponent