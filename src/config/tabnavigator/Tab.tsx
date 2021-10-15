import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Home, Profile } from "@screens";
import { View, Image, TouchableOpacity } from "react-native";
import { Text } from "@components";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 25,
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
