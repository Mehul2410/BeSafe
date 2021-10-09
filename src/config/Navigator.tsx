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
    CitizenSignin,
    CitizenSignup
} from "@screens";
import { StackNavigatorParams } from "@types";

const Stack = createStackNavigator<StackNavigatorParams>();

export default function Navigator(): ReactElement {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="PoliceDetail"
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}
