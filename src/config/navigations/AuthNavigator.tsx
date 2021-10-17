import React, { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Getstarted,
    Language,
    Register,
    PoliceSignin,
    PoliceSignup,
    PoliceDetail,
    DetailFilled,
    CitizenSignin,
    CitizenSignup
} from "@screens";

import { StackNavigatorParams } from "@types";

const Stack = createStackNavigator<StackNavigatorParams>();

export default function AuthNavigator(): ReactElement {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerMode: "screen",
                    headerShown: false
                }}
            >
                <Stack.Screen name="Getstarted" component={Getstarted} />
                <Stack.Screen name="Language" component={Language} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="PoliceSignin" component={PoliceSignin} />
                <Stack.Screen name="PoliceSignup" component={PoliceSignup} />
                <Stack.Screen name="CitizenSignin" component={CitizenSignin} />
                <Stack.Screen name="CitizenSignup" component={CitizenSignup} />
                <Stack.Screen name="PoliceDetail" component={PoliceDetail} />
                <Stack.Screen name="DetailFilled" component={DetailFilled} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
