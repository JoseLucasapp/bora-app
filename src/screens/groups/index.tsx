import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native"
import styles from "./style"
import BottomMenuComponent from "../../components/bottomMenuComponent"
import HeaderComponent from "../../components/header"
import React, { useEffect, useState } from "react"
import GroupsModal from "../../modals/groupsModal"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { getGroup } from "../../service/requests"
import { GroupsNavigationProp } from "../../types/navigation"
import { useNavigation } from "@react-navigation/native"

const Groups = () => {
    const [openModalGroup, setOpenModalGroup] = useState(false)
    const [comunidades, setComunidades] = useState([
        {
            "title": "ADSexp"
        },
    ])

    const navigation = useNavigation<GroupsNavigationProp>()

    /*
    useEffect(() => {
        const getComunidades = async () => {
            const data = await getGroup()

            if (data) {
                setComunidades(data.data.message as any)
            }
        }

        getComunidades()
    }, [])
    */

    const handleGoToGroupPage = () => {
        navigation.navigate("GroupHome")
    }

    const handleOpenModal = () => {
        setOpenModalGroup(!openModalGroup)
    }

    return (
        <View style={styles.mainGroupsContainer}>
            <HeaderComponent message="Verifique suas comunidades!" />
            <View style={styles.groupsContainer}>
                <Text style={styles.groupsTitle}>Comunidades</Text>

                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} >
                    <View style={styles.groupCardContainer}>
                        <TouchableOpacity style={{ ...styles.groupCard, width: comunidades.length <= 0 ? "100%" : "47%" }} onPress={handleOpenModal}>
                            <Text style={styles.groupCardIcon}>+</Text>
                            <Text style={styles.groupCardText}>Nova comunidade</Text>
                        </TouchableOpacity>
                        {comunidades.length > 0 && comunidades.map((item, i) => (
                            <TouchableOpacity style={styles.groupCard} onPress={handleGoToGroupPage} key={i}>
                                <ImageBackground
                                    source={require("../../../assets/images/group.png")}
                                    style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "flex-end" }}
                                    imageStyle={{ borderRadius: 10, width: "100%", height: "100%" }}
                                >
                                    <Text style={styles.groupCardText}>{item.title}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        ))}

                        {
                            comunidades.length == 0 && (<></>)
                        }
                    </View>
                </ScrollView>

            </View>
            <View style={styles.bottomMenu}>
                <BottomMenuComponent />
            </View>

            {openModalGroup && (<GroupsModal setOpenModal={handleOpenModal} />)}

        </View>
    )
}

export default Groups