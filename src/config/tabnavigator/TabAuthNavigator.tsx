import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Profile,
    EditProfile,
    Help,
    Setting,
    Complaints,
    ComplaintGroup,
    Getstarted
} from "@screens";

import { StackNavigatorParams } from "@types";

const Stack = createStackNavigator<StackNavigatorParams>();

export default function TabAuthNavigator(): ReactElement {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: "screen",
                headerShown: false
            }}
        >
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Complaints" component={Complaints} />
            <Stack.Screen name="ComplaintGroup" component={ComplaintGroup} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="Help" component={Help} />
        </Stack.Navigator>
    );
}
