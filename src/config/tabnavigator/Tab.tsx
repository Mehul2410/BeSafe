import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { ReactNode, useEffect, useState } from "react";
import { Home, Profile, Post, ComplaintGroup } from "@screens";
import {
    View,
    Image,
    TouchableOpacity,
    TouchableOpacityProps,
    Keyboard,
    TouchableWithoutFeedback
} from "react-native";
import { Text } from "@components";
import { colors } from "@utils";
import AuthNavigator from "./AuthNavigator";
import ComplaintNavigator from "./ComplaintNavigator";

type CustomTabBarButtonprops = {
    children: ReactNode;
} & TouchableOpacityProps;

// const [color, setColor] = useState(false);

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }: CustomTabBarButtonprops) => (
    <TouchableWithoutFeedback
        onPress={onPress}
        style={{ top: -10, justifyContent: "center", alignItems: "center" }}
    >
        <View
            style={{
                width: 50,
                height: 50,
                borderRadius: 15,
                backgroundColor: colors.tertiary,
                shadowColor: colors.black,
                shadowOffset: { width: 6, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 4,
                marginTop: 4
            }}
        >
            {children}
        </View>
    </TouchableWithoutFeedback>
);

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 60,
                    backgroundColor: "#389FFE"
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={ComplaintNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image
                                source={require("@assets/homeicon.png")}
                                resizeMode="contain"
                                style={{
                                    height: 25,
                                    width: 25,
                                    marginBottom: 5,
                                    tintColor: focused ? "#1C32F3" : "#FFF"
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Post"
                component={Post}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require("@assets/plus.png")}
                            resizeMode="contain"
                            style={{
                                height: 25,
                                width: 25,
                                tintColor: focused ? "#FFF" : "#1C32F3"
                            }}
                        />
                    ),
                    tabBarButton: props => <CustomTabBarButton {...props} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={AuthNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image
                                source={require("@assets/profileicon.png")}
                                resizeMode="contain"
                                style={{
                                    height: 25,
                                    width: 25,
                                    marginBottom: 5,
                                    tintColor: focused ? "#1C32F3" : "#FFF"
                                }}
                            />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
};
export default Tabs;
