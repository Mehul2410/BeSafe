import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Post } from "@screens";

import { StackNavigatorParams } from "@types";

const Stack = createStackNavigator<StackNavigatorParams>();

export default function PostNavigator(): ReactElement {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: "screen",
                headerShown: false
            }}
        >
            {/* <Stack.Screen name="AllComplaints" component={AllComplaints} /> new screen */}
            <Stack.Screen name="PostForm" component={Post} />
            {/* <Stack.Screen name="Missing" component={Post} /> */}
        </Stack.Navigator>
    );
}
