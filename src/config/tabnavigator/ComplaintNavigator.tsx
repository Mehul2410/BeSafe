import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
    ComplaintGroup,
    ComplaintsLayout,
    Getstarted,
    ViewAllComplaints,
    ViewMSLF
} from "@screens";

import { StackNavigatorParams } from "@types";

const Stack = createStackNavigator<StackNavigatorParams>();

export default function ComplaintNavigator(): ReactElement {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: "screen",
                headerShown: false
            }}
        >
            <Stack.Screen name="ViewAllComplaints" component={ViewAllComplaints} />
            <Stack.Screen name="ViewPost" component={ComplaintGroup} />
            <Stack.Screen name="ComplaintsLayout" component={ComplaintsLayout} />
            <Stack.Screen name="ViewMSLF" component={ViewMSLF} />
        </Stack.Navigator>
    );
}
