import React, { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Home,
    Getstarted,
    Language,
    Register,
    PoliceSignin,
    PoliceSignup,
    PoliceDetail,
    DetailFilled,
    CitizenSignin,
    CitizenSignup,
    Profile,
    Post,
    SignIn,
    SignUp,
    Complaints,
    ComplaintGroup,
    EditProfile,
    Setting
} from "@screens";

import { StackNavigatorParams } from "@types";

const Stack = createStackNavigator<StackNavigatorParams>();

export default function Navigator(): ReactElement {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerMode: "screen",
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Post" component={Post} />
                <Stack.Screen name="Complaints" component={Complaints} />
                <Stack.Screen name="ComplaintGroup" component={ComplaintGroup} />
                <Stack.Screen name="Getstarted" component={Getstarted} />
                <Stack.Screen name="Language" component={Language} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="PoliceSignin" component={PoliceSignin} />
                <Stack.Screen name="PoliceSignup" component={PoliceSignup} />
                <Stack.Screen name="CitizenSignin" component={CitizenSignin} />
                <Stack.Screen name="CitizenSignup" component={CitizenSignup} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="PoliceDetail" component={PoliceDetail} />
                <Stack.Screen name="DetailFilled" component={DetailFilled} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="Setting" component={Setting} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
