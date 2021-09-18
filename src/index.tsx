import React from "react";
import { Getstarted, Language } from "@screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Getstarted" component={Getstarted} />
                <Stack.Screen name="Language" component={Language} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
