import { Image, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native"
import BottomMenuComponent from "../../components/bottomMenuComponent"
import styles from "./style"
import { colors } from "../../../rootConfig"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { ProfileNavigationProp } from "../../types/navigation"
import EditIconComponent from "../../components/editIconComponent"
import { logout } from "../../service/requests"

const Profile = () => {
    const navigation = useNavigation<ProfileNavigationProp>()

    const handleLogoff = async () => {
        await logout()
        navigation.navigate("FirstPage")
    }


    return (
        <View style={styles.mainProfileContainer}>
            <View style={styles.userData}>
                <TouchableOpacity style={styles.profilePic}>
                    <Image style={{ ...styles.userImage }} source={require("../../../assets/images/profile_pic.png")} />
                    <EditIconComponent width={25} height={25} right={2} top={75} opt={true} />
                </TouchableOpacity>

                <View style={styles.userDataInfo}>
                    <View style={styles.userDataName}>
                        <Text style={styles.usernameLabel}>Nome</Text>
                        <TextInput style={styles.usernameInput} placeholder="Lucas" placeholderTextColor={colors.darkColor} />
                        <EditIconComponent width={15} height={15} right={3} top={63} opt={false} />
                    </View>

                    <View style={styles.userDataName}>
                        <Text style={styles.usernameLabel}>Email</Text>
                        <TextInput style={styles.usernameInput} placeholder="h8NjI@example.com" placeholderTextColor={colors.darkColor} />
                        <EditIconComponent width={15} height={15} right={3} top={63} opt={false} />
                    </View>

                    <View style={styles.userDataName}>
                        <Text style={styles.usernameLabel}>Senha</Text>
                        <TextInput style={styles.usernameInput} placeholder="**********" secureTextEntry={true} placeholderTextColor={colors.darkColor} />
                        <EditIconComponent width={15} height={15} right={3} top={63} opt={false} />
                    </View>
                </View>

                <View style={styles.userButtons}>
                    <TouchableOpacity style={styles.userButton}>
                        <Text style={styles.userButtonText}>Ver minhas atividades</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLogoff} style={{ ...styles.userButton, backgroundColor: "rgba(243, 62, 62, 0.79)" }}>
                        <Text style={styles.userButtonText}>Sair da conta</Text>
                    </TouchableOpacity>


                </View>
            </View>
            <View style={styles.bottomMenu}>
                <BottomMenuComponent />
            </View>

        </View>
    )
}

export default Profile