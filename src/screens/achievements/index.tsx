import { Text, TouchableOpacity, View } from "react-native"
import BottomMenuComponent from "../../components/bottomMenuComponent"
import styles from "./style"
import HeaderComponent from "../../components/header"
import { colors } from "../../../rootConfig"

const Achievements = () => {
    const username = "Lucas"
    const achievements = [
        {
            title: "Crie sua conta no app",
            current: 1,
            target: 1,
            bar: "100%"
        },
        {
            title: "Alcance uma sequência de 30 dias em musculação!",
            current: 0,
            target: 30,
            bar: "0%"
        },
        {
            title: "Alcance uma sequência de 20 dias em musculação!",
            current: 0,
            target: 20,
            bar: "0%"
        }
    ]
    return (
        <View style={styles.mainAchievementsContainer}>
            <HeaderComponent message="Veja suas conquistas" />
            <View style={styles.myAchievements}>
                {achievements.length > 0 && achievements.map((item, i) => (
                    <TouchableOpacity style={styles.groupCard} key={i}>
                        <Text style={styles.groupCardIcon}>{item.current}/{item.target}</Text>
                        <Text style={styles.groupCardText}>{item.title}</Text>
                        <View style={{ ...styles.groupCardBar, backgroundColor: item.bar == "100%" ? colors.mainColor : colors.darkColor }}>
                            <Text style={styles.groupCardBarText}>{item.bar}</Text>
                        </View>
                    </TouchableOpacity>
                ))}

                {
                    achievements.length == 0 && (<></>)
                }
            </View>

            <View style={styles.bottomMenu}>
                <BottomMenuComponent />
            </View>

        </View>
    )
}

export default Achievements