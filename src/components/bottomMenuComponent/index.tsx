import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { colors } from "../../../rootConfig"
import { useNavigation, useRoute } from "@react-navigation/native";

const BottomMenuComponent = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const currentRoute = route.name || "Home";

    const handleClick = (pageReference: string) => {
        if (currentRoute !== pageReference) {
            navigation.navigate(pageReference as never);
        }
    }

    return (
        <View style={styles.bottomMenuContainer} >
            <TouchableOpacity style={currentRoute === "Home" ? styles.menuOptionActive : styles.menuOptionDeactive} onPress={() => handleClick("Home")}>
                <View style={styles.iconWrapper}>
                    <Image source={require("../../../assets/icons/home.png")} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={currentRoute === "Groups" ? styles.menuOptionActive : styles.menuOptionDeactive} onPress={() => handleClick("Groups")}>
                <View style={styles.iconWrapper}>
                    <Image source={require("../../../assets/icons/about.png")} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={currentRoute === "Achievements" ? styles.menuOptionActive : styles.menuOptionDeactive} onPress={() => handleClick("Achievements")}>
                <View style={styles.iconWrapper}>
                    <Image source={require("../../../assets/icons/trophy.png")} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={currentRoute === "Profile" ? styles.menuOptionActive : styles.menuOptionDeactive} onPress={() => handleClick("Profile")}>
                <View style={styles.iconWrapper}>
                    <Image source={require("../../../assets/icons/profile.png")} />
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    bottomMenuContainer: {
        width: "100%",
        flexDirection: "row",
        backgroundColor: "#fff",
        justifyContent: "space-between",
        alignItems: "center",
        height: 49,
        borderRadius: 20,
    },
    menuOptionDeactive: {
        width: 71,
        height: 71,
        backgroundColor: colors.darkColor,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 5,
        borderColor: "#fff",
        borderRadius: 50,
    },
    menuOptionActive: {
        width: 71,
        height: 71,
        backgroundColor: colors.mainColor,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 5,
        borderColor: "#fff",
        borderRadius: 50,
    },
    iconWrapper: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",

    },
})

export default BottomMenuComponent