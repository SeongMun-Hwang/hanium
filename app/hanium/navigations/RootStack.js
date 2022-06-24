import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LogoScreen from "../screens/LogoScreen";
import StartScreen from "../screens/StartScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import MainScreen from "../screens/MainScreen";

const Stack = createStackNavigator();

const RootStack: () => Node = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Logo"
                component={LogoScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Start"
                component={StartScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Main"
                component={MainScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};
export default RootStack;
