import { Text, View } from "react-native"
import BottomMenuComponent from "../../components/bottomMenuComponent"
import styles from "./style"
import HeaderComponent from "../../components/header"

const Achievements = () => {
    const username = "Lucas"
    return (
        <View style={styles.mainAchievementsContainer}>
            <HeaderComponent message="Veja suas conquistas" />
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ color: "#fff", fontSize: 40, alignSelf: "center" }}>Em breve</Text>
            </View>

            <View style={styles.bottomMenu}>
                <BottomMenuComponent />
            </View>

        </View>
    )
}

export default Achievements