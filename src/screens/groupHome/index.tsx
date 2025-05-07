import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import styles from "./style"
import { GroupHomeNavigationProp } from "../../types/navigation"
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { getUsers } from "../../service/requests"

const GroupHome = () => {
    const navigation = useNavigation<GroupHomeNavigationProp>()
    const [users, setUsers] = useState([
        {
            username: "Jade",
            image: require("../../../assets/icons/avatar.png")
        },
        {
            username: "José Lucas",
            image: require("../../../assets/icons/avatar.png")
        },
        {
            username: "Henrique Azevedo",
            image: require("../../../assets/icons/avatar.png")
        },
        {
            username: "Thiago Porto",
            image: require("../../../assets/icons/avatar.png")
        },
        {
            username: "Arthur Akil",
            image: require("../../../assets/icons/avatar.png")
        },
        {
            username: "João Vitor",
            image: require("../../../assets/icons/avatar.png")
        },
    ])

    useEffect(() => {
        const getData = async () => {
            const data = await getUsers()

            if (data) {
                setUsers(data.data.message as any)
            }

        }

        getData()
    }, [])

    const handleBack = () => {
        navigation.navigate("Groups")
    }
    return (
        <View style={styles.mainGroupHome}>
            <TouchableOpacity style={styles.arrow} onPress={() => handleBack()}>
                <Image source={require('../../../assets/icons/arrow.png')} />
            </TouchableOpacity>

            <View style={styles.groupData}>
                <Text style={styles.groupTitle}>ADSexp</Text>
                <Image style={styles.groupImage} source={require("../../../assets/images/group.png")} />

                <Text style={styles.question}>Procurando alguém?</Text>

                <View style={styles.groupUsers}>

                    {
                        /*<TextInput style={styles.groupInput} placeholderTextColor={colors.darkColor} />
                    <SearchIcon
                        width={30}
                        height={30}
                        top={100}
                        right={10}
                    />
                         */
                    }
                    <ScrollView
                        style={styles.scrollView}
                        contentContainerStyle={{ alignItems: "center", paddingBottom: 20 }}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.groupUsersList}>
                            {users.map((user, index) => (
                                <View key={index} style={styles.groupUser}>
                                    <View style={styles.groupUserInfo}>
                                        <Image style={styles.groupUserImage} source={require("../../../assets/icons/avatar.png")} />
                                        <Text style={styles.groupUserName}>{user.username}</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Text style={styles.seeProfile}>Ver Perfil</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    </ScrollView>


                </View>
            </View>
        </View>
    )
}

export default GroupHome