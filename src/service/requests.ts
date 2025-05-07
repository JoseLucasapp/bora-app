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

export const updateProfile = async (data: any) => {
    try {
        const id = await AsyncStorage.getItem("user_id")
        const profile = await api.put(`api/users/${id}`, {
            username: data.username,
            password: data.password
        })

        return profile

    } catch (error) {
        console.error(error)
    }
}

export const createGroup = async (data: any) => {
    try {

        const group = await api.post(`api/groups`, data)
        return group

    } catch (error) {
        console.error(error)
    }
}

export const getGroup = async () => {
    try {
        const id = await AsyncStorage.getItem("user_id")
        const group = await api.get(`api/groups?userId=${id}`)
        return group

    } catch (error) {
        console.error(error)
    }
}

export const getUsers = async () => {
    try {
        const users = await api.get(`api/users`)
        return users
    } catch (error) {
        console.error(error)
    }
}