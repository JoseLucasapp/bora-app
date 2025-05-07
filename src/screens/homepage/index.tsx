import { Image, Text, View } from "react-native"
import BottomMenuComponent from "../../components/bottomMenuComponent"
import styles from "./styles"
import HeaderComponent from "../../components/header"
import CalendarComponent from "../../components/calendar"

const Home = () => {

    const username = "Lucas"
    return (
        <View style={styles.mainHomeContainer}>
            <HeaderComponent message="Comece agora!" />
            <View style={styles.streak}>
                <Text style={styles.streakText}>Streak</Text>

                <View style={styles.streakContainer}>
                    <Text style={styles.streakNumber}>0</Text>
                    <Image style={styles.streakImage} source={require("../../../assets/images/streak.png")} />
                </View>
            </View>

            <View style={styles.calendarMain}>
                <CalendarComponent />
            </View>
            <View style={styles.bottomMenu}>
                <BottomMenuComponent />
            </View>

        </View>
    )
}

export default Home