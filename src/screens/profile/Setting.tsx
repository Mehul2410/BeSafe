import React, { useState } from "react";
import { Background, CustomInput, Text } from "@components";
import { Modal, Pressable, ScrollView, View } from "react-native";
import { Button } from "@components";
import { NavigationProps } from "@types";
import { colors } from "@utils";

export function Setting({ navigation }: NavigationProps<"Setting">) {
    const [changePassword, setChangePassword] = useState(false);
    const [language, setLanguage] = useState(false);
    const [account, setAccount] = useState(false);
    return (
        <Background>
            <View
                style={{
                    height: "100%",
                    width: "100%",
                    alignItems: "center",
                    marginTop: 20,
                    padding: 20
                }}
            >
                <Button weight="400" btnName="Setting" />

                <View style={{ marginTop: 25, width: "100%", height: "100%" }}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={changePassword}
                        onRequestClose={() => {
                            setChangePassword(!changePassword);
                        }}
                    >
                        <View
                            style={{
                                height: "100%",
                                width: "100%",
                                justifyContent: "center",
                                padding: 20
                            }}
                        >
                            <View
                                style={{
                                    width: "100%",
                                    justifyContent: "center",
                                    padding: 20,
                                    backgroundColor: colors.tertiary,
                                    alignItems: "center",
                                    borderRadius: 10,
                                    shadowColor: colors.black,
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 4,
                                    elevation: 5
                                }}
                            >
                                <Text weight="700" style={{ fontSize: 20, color: colors.white }}>
                                    Password
                                </Text>
                                <View style={{ width: "100%" }}>
                                    <CustomInput placeholder="Old Password" />
                                    <CustomInput placeholder="New Password" />
                                    <CustomInput placeholder="Confirm New Password" />
                                    <Pressable onPress={() => setChangePassword(!changePassword)}>
                                        <Button
                                            bgColor="#130e5c"
                                            btnName="Change Password"
                                            weight="400"
                                        />
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <Pressable>
                        <Button
                            weight="400"
                            btnName="Change Password"
                            onPress={() => setChangePassword(true)}
                            bgColor="#FFF"
                            textColor="#130e5c"
                        />
                    </Pressable>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={language}
                        onRequestClose={() => {
                            setLanguage(!language);
                        }}
                    >
                        <View
                            style={{
                                height: "100%",
                                width: "100%",
                                justifyContent: "center",
                                padding: 20
                            }}
                        >
                            <View
                                style={{
                                    width: "100%",
                                    justifyContent: "center",
                                    padding: 20,
                                    backgroundColor: colors.tertiary,
                                    alignItems: "center",
                                    borderRadius: 10,
                                    shadowColor: colors.black,
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 4,
                                    elevation: 5
                                }}
                            >
                                <Text weight="700" style={{ fontSize: 20, color: colors.white }}>
                                    Language
                                </Text>
                                <View style={{ width: "100%", marginTop: 10 }}>
                                    <Button
                                        weight="400"
                                        btnName="English"
                                        bgColor="#FFF"
                                        textColor="#130e5c"
                                        style={{ marginVertical: 8 }}
                                    />
                                    <Button
                                        weight="400"
                                        btnName="हिंदी"
                                        bgColor="#FFF"
                                        textColor="#130e5c"
                                        style={{ marginVertical: 8 }}
                                    />
                                    <Button
                                        weight="400"
                                        btnName="मराठी"
                                        bgColor="#FFF"
                                        textColor="#130e5c"
                                        style={{ marginVertical: 8 }}
                                    />
                                    <Pressable>
                                        <Button
                                            btnName="Change language"
                                            weight="400"
                                            onPress={() => setLanguage(!language)}
                                            bgColor="#130e5c"
                                        />
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <Pressable onPress={() => setLanguage(!language)}>
                        <Button
                            weight="400"
                            btnName="change Language"
                            bgColor="#FFF"
                            textColor="#130e5c"
                        />
                    </Pressable>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={account}
                        onRequestClose={() => {
                            setAccount(!account);
                        }}
                    >
                        <View
                            style={{
                                height: "100%",
                                width: "100%",
                                justifyContent: "center",
                                padding: 20
                            }}
                        >
                            <View
                                style={{
                                    width: "100%",
                                    justifyContent: "center",
                                    padding: 20,
                                    backgroundColor: colors.tertiary,
                                    alignItems: "center",
                                    borderRadius: 10,
                                    shadowColor: colors.black,
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 4,
                                    elevation: 5
                                }}
                            >
                                <Text
                                    weight="700"
                                    style={{
                                        color: colors.white,
                                        fontSize: 20
                                    }}
                                >
                                    Delete Account
                                </Text>
                                <CustomInput placeholder="Reason?" />
                                <View style={{ width: "100%" }}>
                                    <Pressable onPress={() => setAccount(!account)}>
                                        <Button
                                            weight="400"
                                            btnName="Confirm"
                                            bgColor="#FFF"
                                            textColor="#130e5c"
                                        />
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <Pressable>
                        <Button
                            weight="400"
                            btnName="Delete Account"
                            onPress={() => setAccount(true)}
                            bgColor="#FFF"
                            textColor="#130e5c"
                        />
                    </Pressable>
                </View>
            </View>
        </Background>
    );
}
