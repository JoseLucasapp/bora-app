import AsyncStorage from "@react-native-async-storage/async-storage"
import api from "./api"

export const getHome = async () => {
    try {
        const home = await api.get("")
        return home
    } catch (error) {
        console.error(error)
    }

}

export const createAccount = async (data: any) => {
    try {

        const account = await api.post("api/users", {
            username: data.username,
            password: data.password,
        })

        return account

    } catch (error) {
        console.error(error)
    }
}

export const login = async (data: any) => {
    try {

        const user = await api.post("api/users/login", {
            username: data.username,
            password: data.password
        })

        return user

    } catch (error) {
        console.error(error)
    }
}

export const logout = async () => {
    try {
        await AsyncStorage.removeItem("token")
        await AsyncStorage.removeItem("user")
    } catch (error) {
        console.error(error)
    }
}