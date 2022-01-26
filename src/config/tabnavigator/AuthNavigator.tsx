import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Profile, EditProfile, ViewProfile, Help, Setting, ComplaintGroup, Exam } from "@screens";

import { StackNavigatorParams } from "@types";

const Stack = createStackNavigator<StackNavigatorParams>();

export default function AuthNavigator(): ReactElement {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: "screen",
                headerShown: false
            }}
        >
            <Stack.Screen name="UserProfile" component={Profile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="ViewProfile" component={ViewProfile} />
            <Stack.Screen name="ComplaintGroup" component={ComplaintGroup} />
            <Stack.Screen name="Exam" component={Exam} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="Help" component={Help} />
        </Stack.Navigator>
    );
}
