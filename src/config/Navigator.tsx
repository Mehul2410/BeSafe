import React, { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Home,
    Getstarted,
    Language,
    Register,
    PoliceDetail,
    DetailFilled,
    Profile,
    SignIn,
    SignUp
} from "@screens";

import { StackNavigatorParams } from "@types";

const Stack = createStackNavigator<StackNavigatorParams>();

export default function Navigator(): ReactElement {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Getstarted"
                screenOptions={{
                    headerMode: "screen",
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Getstarted" component={Getstarted} />
                <Stack.Screen name="Language" component={Language} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="PoliceDetail" component={PoliceDetail} />
                <Stack.Screen name="DetailFilled" component={DetailFilled} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
