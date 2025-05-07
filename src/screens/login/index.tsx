import { Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native"
import EyeIconComponent from "../../components/eyeIconComponent"
import { useState } from "react";
import styles from "./styles";
import { LoginNavigationProp } from "../../types/navigation";
import { useNavigation } from "@react-navigation/native";
import { login } from "../../service/requests";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
    const [mostrarSenha, setMostrarSenha] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation<LoginNavigationProp>()

    const handleLogin = async () => {
        const userLogin = await login({
            username: username.trim(),
            password: password.trim(),
        })
        if (userLogin && userLogin.status == 200) {
            const token = userLogin.data.token
            await AsyncStorage.setItem("token", token)
            await AsyncStorage.setItem("username", userLogin.data.user.username)
            await AsyncStorage.setItem("user_id", userLogin.data.user._id)
            navigation.navigate("Home")
        } else {
            navigation.navigate("FirstPage")
        }
    }

    const handleBack = () => {
        navigation.navigate("FirstPage")
    }

    return (
        <KeyboardAvoidingView style={styles.mainLogin}>
            <TouchableOpacity style={styles.arrow} onPress={() => handleBack()}>
                <Image source={require('../../../assets/icons/arrow.png')} />
            </TouchableOpacity>
            <View style={styles.loginInput}>

                <Text style={styles.loginText}>Login</Text>

                <View style={styles.loginInputContainer}>

                    <TextInput style={styles.loginInputText} placeholder="Usuário" placeholderTextColor={"#fff"} value={username} onChangeText={setUsername} />
                    <TextInput style={styles.loginInputText} placeholder="Senha" placeholderTextColor={"#fff"} value={password} onChangeText={setPassword} secureTextEntry={mostrarSenha} />
                    <EyeIconComponent
                        handleFunction={setMostrarSenha}
                        status={mostrarSenha}
                        right={5}
                        top={73}
                        width={16}
                        height={16}
                    />
                </View>

                <View style={styles.loginButtonContainer}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => handleLogin()}>
                        <Text style={styles.loginButtonText}>Entrar</Text>
                    </TouchableOpacity>

                    <Text style={styles.forgetPassword}>Esqueceu a senha</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login