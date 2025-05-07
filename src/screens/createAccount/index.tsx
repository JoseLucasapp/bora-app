import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import EyeIconComponent from "../../components/eyeIconComponent";
import { useNavigation } from "@react-navigation/native";
import { CreateAccountNavigationProp } from "../../types/navigation";
import { useState } from "react";

import styles from "./styles";
import { createAccount } from "../../service/requests";

const CreateAccount = () => {
    const [mostrarSenha, setMostrarSenha] = useState(true);
    const navigation = useNavigation<CreateAccountNavigationProp>()


    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleCreateAccount = async () => {

        const account = await createAccount({ username, password })
        if (account && account.status == 201) {
            navigation.navigate("Home")
        } else {
            navigation.navigate("FirstPage")
        }

    }

    const handleBack = () => {
        navigation.navigate("FirstPage")
    }

    return (
        <View style={styles.mainCreateAccount}>
            <TouchableOpacity style={styles.arrow} onPress={() => handleBack()}>
                <Image source={require('../../../assets/icons/arrow.png')} />
            </TouchableOpacity>
            <View style={styles.CreateAccountInput}>

                <Text style={styles.CreateAccountText}>Cadastro</Text>

                <View style={styles.CreateAccountInputContainer}>

                    <TextInput style={styles.CreateAccountInputText} placeholder="Usuário" placeholderTextColor={"#fff"} value={username} onChangeText={setUsername} />
                    <TextInput style={styles.CreateAccountInputText} placeholder="Senha" placeholderTextColor={"#fff"} value={password} onChangeText={setPassword} secureTextEntry={mostrarSenha} />
                    <EyeIconComponent
                        handleFunction={setMostrarSenha}
                        status={mostrarSenha}
                        right={5}
                        top={73}
                        width={16}
                        height={16}
                    />
                </View>

                <View style={styles.CreateAccountButtonContainer}>
                    <TouchableOpacity style={styles.CreateAccountButton} onPress={() => handleCreateAccount()}>
                        <Text style={styles.CreateAccountButtonText}>Cadastrar</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default CreateAccount