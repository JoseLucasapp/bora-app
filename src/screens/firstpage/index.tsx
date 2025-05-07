import { ImageBackground, Text, View } from "react-native"
import styles from "./style"
import RoundedButtonsComponent from "../../components/roundedButtons"
import { FirstPageNavigationProp } from "../../types/navigation"
import { useNavigation } from "@react-navigation/native"

const FirstPage = () => {
    const navigation = useNavigation<FirstPageNavigationProp>()

    const handleLogin = () => {
        navigation.navigate("Login")
    }

    const handleCreateAccount = () => {
        navigation.navigate("CreateAccount")
    }
    return (
        <ImageBackground style={styles.firstPageMain} source={require("../../../assets/images/bald.png")}
            imageStyle={{ borderRadius: 10, width: "100%", height: "100%" }}>
            <View style={styles.firstPageContainer}>
                <Text style={styles.mainText}>bora?</Text>

                <View style={styles.bottomContainer}>
                    <Text style={styles.bottomText}>A gente te dá o     impulso, você vai além.</Text>
                    <View style={styles.bottomButtons}>
                        <View style={styles.bottomButtonsContainer}>
                            <RoundedButtonsComponent handler={handleLogin} text="Login" bgColor={"#fff"} color="rgba(0, 119, 182, 1)" />
                        </View>
                        <View style={styles.bottomButtonsContainer}>
                            <RoundedButtonsComponent handler={handleCreateAccount} text="Cadastro" bgColor={"transparent"} color="#fff" />
                        </View>

                    </View>
                </View>
            </View>

            <View style={styles.opacityLayer}></View>

        </ImageBackground>
    )
}

export default FirstPage