import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { colors } from "../../../rootConfig"
import { Dispatch, useState } from "react"
import { createGroup } from "../../service/requests"

type NewGroupProps = {
    setOpenModal: Dispatch<React.SetStateAction<boolean>>,
    type: string
}
const NewGroup: React.FC<NewGroupProps> = ({ setOpenModal, type }) => {
    const [groupName, setGroupName] = useState("")
    const [groupDescription, setGroupDescription] = useState("")

    const handleNewGroup = async () => {

        setOpenModal(false)
    }


    return (
        <View style={styles.opacityLayer}>
            <View style={styles.mainNewGroup}>
                <TouchableOpacity onPress={() => setOpenModal(false)} style={styles.closeNewGroup}>
                    <Text style={styles.closeNewGroupText}>X</Text>
                </TouchableOpacity>

                <View style={styles.newGroupForm}>
                    <TextInput style={styles.newGroupInput} value={groupName} onChangeText={setGroupName} placeholder="Novo Grupo" placeholderTextColor={colors.darkColor} />
                    <TextInput style={styles.newGroupInputBig} value={groupDescription} onChangeText={setGroupDescription} placeholder="Descrição" multiline={true} placeholderTextColor={colors.darkColor} />


                    <TouchableOpacity style={styles.imageSelector}>
                        <Image style={styles.imageSelectorImage} source={require("../../../assets/images/image.png")} />
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.saveButton} onPress={handleNewGroup}>
                        <Text style={styles.saveButtonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    opacityLayer: {
        width: "100%",
        height: 1000,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    },
    mainNewGroup: {
        width: "90%",
        height: 570,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderBottomLeftRadius: 15,
        borderTopEndRadius: 15,
        zIndex: 1,
    },
    closeNewGroup: {
        width: 32,
        height: 32,
        backgroundColor: colors.darkColor,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 10,
        right: 10,
    },
    closeNewGroupText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: 700,
    },
    newGroupForm: {
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
    },
    newGroupInput: {
        borderColor: colors.darkColor,
        borderWidth: 1,
        width: "90%",
        borderRadius: 8,
        height: 40,
        paddingLeft: "5%",
        paddingRight: "5%",
        color: colors.darkColor
    },
    newGroupInputBig: {
        borderColor: colors.darkColor,
        borderWidth: 1,
        width: "90%",
        borderRadius: 8,
        height: 100,
        marginTop: 20,
        paddingLeft: "5%",
        paddingRight: "5%",
        color: colors.darkColor
    },
    imageSelector: {
        width: "90%",
        height: 200,
        borderRadius: 8,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    imageSelectorImage: {
        width: "100%",
        borderRadius: 8,
        height: "100%",
    },
    saveButton: {
        width: "90%",
        backgroundColor: colors.darkColor,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        borderBottomEndRadius: 8,
        borderTopStartRadius: 8,
        borderBottomLeftRadius: 8,
        marginTop: 20
    },
    saveButtonText: {
        fontSize: 24,
        fontWeight: 700,
        color: "#fff",
    }



})
export default NewGroup