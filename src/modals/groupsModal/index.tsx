import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../../../rootConfig"
import React, { useState } from "react"
import NewGroup from "../../components/newGroup"

type GroupsModalProps = {
    setOpenModal: () => void
}
const GroupsModal: React.FC<GroupsModalProps> = ({ setOpenModal }) => {
    const [openNewGroup, setOpenNewGroup] = useState(false)
    const [groupType, setGroupType] = useState("")

    const menu = [
        {
            "title": "Musculação",
            "image": "muscle"
        }
    ]

    const imageMap: Record<string, any> = {
        'muscle': require('../../../assets/icons/muscle.png'),
        'crossfit': require('../../../assets/icons/gym.png'),
        'bike': require('../../../assets/icons/bike.png'),
    };

    const handleCreateNewGroup = (type: string) => {
        setGroupType(type)
        setOpenNewGroup(!openNewGroup)
    }

    return (
        <View style={styles.GroupsModalMain}>
            <TouchableOpacity style={styles.arrow} onPress={() => setOpenModal()}>
                <Image source={require('../../../assets/icons/arrow.png')} />
            </TouchableOpacity>

            <View style={styles.groupsTitleContainer}>
                <Text style={styles.groupsTitle}>Grupos</Text>
                <Text style={styles.groupsSubTitle}>Selecione o tipo:</Text>
            </View>

            <View style={styles.groupCardContainer}>
                <TouchableOpacity style={styles.groupCard} onPress={() => handleCreateNewGroup('MUSCLE')}>
                    <Image style={{
                        ...styles.groupCardIcon, width: 55,
                        height: 50,
                    }} source={require('../../../assets/icons/muscle.png')} />
                    <Text style={styles.groupsTitle}>Musculação</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.groupCard} onPress={() => handleCreateNewGroup('CROSSFIT')}>
                    <Image style={{
                        ...styles.groupCardIcon, width: 63,
                        height: 50,
                    }} source={require('../../../assets/icons/gym.png')} />
                    <Text style={styles.groupsTitle}>CrossFit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.groupCard} onPress={() => handleCreateNewGroup('RUN')}>
                    <Image style={{
                        ...styles.groupCardIcon, width: 50,
                        height: 50,
                    }} source={require('../../../assets/icons/run.png')} />
                    <Text style={styles.groupsTitle}>Corrida</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.groupCard} onPress={() => handleCreateNewGroup('SWIMMING')}>
                    <Image style={{
                        ...styles.groupCardIcon, width: 60,
                        height: 55,
                    }} source={require('../../../assets/icons/swin.png')} />
                    <Text style={styles.groupsTitle}>Natação</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.groupCard} onPress={() => handleCreateNewGroup('BIKE')}>
                    <Image style={{
                        ...styles.groupCardIcon, width: 63,
                        height: 50,
                    }} source={require('../../../assets/icons/bike.png')} />
                    <Text style={styles.groupsTitle}>Ciclismo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.groupCard} onPress={() => handleCreateNewGroup('STRETCH')}>
                    <Image style={{
                        ...styles.groupCardIcon, width: 45,
                        height: 50,
                    }} source={require('../../../assets/icons/stretch.png')} />
                    <Text style={styles.groupsTitle}>Pilates</Text>
                </TouchableOpacity>
            </View>

            {
                openNewGroup && <NewGroup type={groupType} setOpenModal={setOpenNewGroup} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    GroupsModalMain: {
        width: "100%",
        height: "85%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.darkColor,
        position: "absolute",
    },
    arrow: {
        width: 35,
        height: 35,
        top: 59,
        left: 24,
        position: "absolute",
    },
    groupsContainer: {
        width: "90%",
        height: "60%",
        marginTop: 20,
        alignItems: "center",
    },
    groupsTitleContainer: {
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    groupsTitle: {
        fontSize: 25,
        fontWeight: 700,
        color: "#fff",
        marginBottom: 15,
    },
    groupsSubTitle: {
        fontWeight: 500,
        color: "#fff",
        fontSize: 21,
    },
    groupCardContainer: {
        width: "90%",
        alignItems: "center",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    groupCard: {
        width: "47%",
        height: 110,
        alignItems: "center",
        justifyContent: "flex-end",
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 10,
        marginBottom: 20,
        overflow: 'hidden',

    },
    scrollContent: {
        padding: 16,
    },
    groupCardIcon: {
        color: "#fff",
        position: "absolute",
        top: 10,
    },
    groupCardText: {
        fontSize: 16,
        fontWeight: 700,
        color: "#fff",
        marginBottom: 10,
    },
})

export default GroupsModal