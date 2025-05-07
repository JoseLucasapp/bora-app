import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined;
    FirstPage: undefined;
    CreateAccount: undefined;
    Login: undefined;
    Groups: undefined;
    Achievements: undefined;
    Profile: undefined;
}

export type HomeNavigationProp = StackNavigationProp<RootStackParamList, "Home">
export type FirstPageNavigationProp = StackNavigationProp<RootStackParamList, "FirstPage">
export type CreateAccountNavigationProp = StackNavigationProp<RootStackParamList, "CreateAccount">
export type LoginNavigationProp = StackNavigationProp<RootStackParamList, "Login">
export type GroupsNavigationProp = StackNavigationProp<RootStackParamList, "Groups">
export type AchievementsNavigationProp = StackNavigationProp<RootStackParamList, "Achievements">
export type ProfileNavigationProp = StackNavigationProp<RootStackParamList, "Profile">