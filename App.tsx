/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  Platform,
  StatusBar,
} from 'react-native';
import { enableScreens } from "react-native-screens";
import { RootStackParamList } from './src/types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import FirstPage from './src/screens/firstpage';
import ImmersiveMode from 'react-native-immersive';
import GlobalFont from 'react-native-global-font';
import Home from './src/screens/homepage';
import CreateAccount from './src/screens/createAccount';
import Login from './src/screens/login';
import Achievements from './src/screens/achievements';
import Groups from './src/screens/groups';
import Profile from './src/screens/profile';
import GroupHome from './src/screens/groupHome';


enableScreens();

export default function App() {

  useEffect(() => {
    async function prepare() {
      GlobalFont.applyGlobal('Poppins-Regular');
      ImmersiveMode.fullLayout(true);
      ImmersiveMode.setImmersive(true);
    }

    prepare();

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }
  }, []);

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='FirstPage' screenOptions={{
          headerShown: false,
          animation: "none"
        }}>
          <Stack.Screen name='FirstPage' component={FirstPage} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Achievements" component={Achievements} />
          <Stack.Screen name="Groups" component={Groups} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="GroupHome" component={GroupHome} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider >
  );
}
