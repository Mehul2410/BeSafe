import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { ReactNode, useEffect, useState } from "react";
import { Home, Profile, Post } from "@screens";
import { View, Image, TouchableOpacity, TouchableOpacityProps, Keyboard } from "react-native";
import { Text } from "@components";
import { colors } from "@utils";

type CustomTabBarButtonprops = {
    children: ReactNode;
} & TouchableOpacityProps;

// const [color, setColor] = useState(false);

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({ children, onPress }: CustomTabBarButtonprops) => (
    <TouchableOpacity
        onPress={onPress}
        style={{ top: -30, justifyContent: "center", alignItems: "center" }}
    >
        <View
            style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                borderColor: colors.primary,
                borderWidth: 4,
                backgroundColor: colors.tertiary
            }}
        >
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
    const [margin, setMargin] = useState(25);

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setMargin(-120);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setMargin(25);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: margin,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    borderRadius: 10,
                    height: 80,
                    backgroundColor: "#389FFE"
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
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
                            <Text
                                weight="200"
                                style={{
                                    color: focused ? "#1C32F3" : "#FFF",
                                    fontFamily: "Chillax-Medium"
                                }}
                            >
                                HOME
                            </Text>
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
                component={Profile}
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
                            <Text
                                weight="200"
                                style={{
                                    color: focused ? "#1C32F3" : "#FFF",
                                    fontFamily: "Chillax-Medium"
                                }}
                            >
                                PROFILE
                            </Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
};
export default Tabs;
