import { Image, Keyboard, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native"
import BottomMenuComponent from "../../components/bottomMenuComponent"
import styles from "./style"
import { colors } from "../../../rootConfig"
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { ProfileNavigationProp } from "../../types/navigation"
import EditIconComponent from "../../components/editIconComponent"
import { logout, updateProfile } from "../../service/requests"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Profile = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation<ProfileNavigationProp>()
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const loadUsername = async () => {
            const saved = await AsyncStorage.getItem("username");
            if (saved) setUsername(saved);
        };

        loadUsername();


        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => setKeyboardVisible(true)
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => setKeyboardVisible(false)
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const handleUpdateInfo = async () => {
        const send: any = {

        }
        if (password.length) {
            send["password"] = password
        }

        if (username.length) {
            send["username"] = username
        }
    }


    const handleLogoff = async () => {
        await logout()
        navigation.navigate("FirstPage")
    }


    return (
        <View style={styles.mainProfileContainer}>
            <View style={styles.userData}>
                <TouchableOpacity style={styles.profilePic}>
                    <Image style={{ ...styles.userImage }} source={require("../../../assets/icons/avatar.png")} />

                </TouchableOpacity>

                <View style={styles.userDataInfo}>
                    <View style={styles.userDataName}>
                        <Text style={styles.usernameLabel}>Nome</Text>
                        <TextInput style={styles.usernameInput} placeholder="Lucas" placeholderTextColor={colors.darkColor} value={username} onChangeText={setUsername} />
                        <EditIconComponent width={15} height={15} right={3} top={63} opt={false} />
                    </View>


                    <View style={styles.userDataName}>
                        <Text style={styles.usernameLabel}>Senha</Text>
                        <TextInput style={styles.usernameInput} placeholder="**********" value={password} onChangeText={setPassword} secureTextEntry={true} placeholderTextColor={colors.darkColor} />
                        <EditIconComponent width={15} height={15} right={3} top={63} opt={false} />
                    </View>
                </View>

                <View style={styles.userButtons}>
                    <TouchableOpacity style={styles.userButton} onPress={handleUpdateInfo}>
                        <Text style={styles.userButtonText}>Salvar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLogoff} style={{ ...styles.userButton, backgroundColor: "rgba(243, 62, 62, 0.79)" }}>
                        <Text style={styles.userButtonText}>Sair da conta</Text>
                    </TouchableOpacity>


                </View>
            </View>
            {!isKeyboardVisible && (
                <View style={styles.bottomMenu}>
                    <BottomMenuComponent />
                </View>
            )}

        </View>
    )
}

export default Profile