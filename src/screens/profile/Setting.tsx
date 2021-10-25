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
            <View style={{ height: "100%", alignItems: "center", marginTop: 20 }}>
                <Text
                    weight="400"
                    style={{
                        color: colors.white,
                        fontSize: 24,
                        height: 60,
                        width: 350,
                        backgroundColor: colors.tertiary,
                        textAlign: "center",
                        textAlignVertical: "center",
                        borderRadius: 10
                    }}
                >
                    Setting
                </Text>

                <View style={{ marginTop: 25 }}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={changePassword}
                        onRequestClose={() => {
                            setChangePassword(!changePassword);
                        }}
                    >
                        <View style={{ height: "100%", width: "100%" }}>
                            <View
                                style={{
                                    height: 310,
                                    width: 360,
                                    backgroundColor: colors.tertiary,
                                    alignItems: "center",
                                    borderRadius: 10,
                                    marginTop: 55,
                                    alignSelf: "center",
                                    shadowColor: colors.black,
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 4,
                                    elevation: 5
                                }}
                            >
                                <Text
                                    weight="700"
                                    style={{ fontSize: 20, color: colors.white, marginTop: 30 }}
                                >
                                    Password
                                </Text>
                                <View style={{ marginTop: 18 }}>
                                    <CustomInput
                                        placeholder="Old Password"
                                        style={{ height: 50, width: 310, borderRadius: 10 }}
                                    />
                                    <CustomInput
                                        placeholder="New Password"
                                        style={{ height: 50, width: 310, borderRadius: 10 }}
                                    />
                                    <CustomInput
                                        placeholder="Confirm New Password"
                                        style={{ height: 50, width: 310, borderRadius: 10 }}
                                    />
                                </View>
                            </View>
                            <Pressable onPress={() => setChangePassword(!changePassword)}>
                                <Button
                                    btnName="Change Password"
                                    weight="700"
                                    style={{
                                        width: 360,
                                        backgroundColor: colors.tertiary,
                                        alignSelf: "center",
                                        alignItems: "center",
                                        borderRadius: 10,
                                        fontSize: 22,
                                        marginTop: 20,
                                        shadowColor: colors.black,
                                        shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.25,
                                        shadowRadius: 4,
                                        elevation: 5
                                    }}
                                />
                            </Pressable>
                        </View>
                    </Modal>
                    <Pressable>
                        <Button
                            weight="400"
                            btnName="Change Password"
                            onPress={() => setChangePassword(true)}
                            style={{
                                backgroundColor: colors.white,
                                color: colors.black,
                                height: 53,
                                width: 350,
                                borderRadius: 10,
                                fontSize: 18,
                                textAlignVertical: "center",
                                marginVertical: 12
                            }}
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
                        <View style={{ height: "100%", width: "100%" }}>
                            <View
                                style={{
                                    height: 310,
                                    width: 360,
                                    backgroundColor: colors.tertiary,
                                    alignItems: "center",
                                    borderRadius: 10,
                                    marginTop: 55,
                                    alignSelf: "center",
                                    shadowColor: colors.black,
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 4,
                                    elevation: 5
                                }}
                            >
                                <Text
                                    weight="700"
                                    style={{ fontSize: 20, color: colors.white, marginTop: 30 }}
                                >
                                    Language
                                </Text>
                                <View style={{ marginTop: 18 }}>
                                    <Button
                                        btnName="English"
                                        style={{
                                            height: 55,
                                            width: 310,
                                            borderRadius: 10,
                                            backgroundColor: colors.white,
                                            color: colors.quatnary,
                                            fontSize: 22,
                                            textAlignVertical: "center",
                                            marginVertical: 8
                                        }}
                                    />
                                    <Button
                                        btnName="हिंदी"
                                        style={{
                                            height: 55,
                                            width: 310,
                                            borderRadius: 10,
                                            backgroundColor: colors.white,
                                            color: colors.quatnary,
                                            fontSize: 22,
                                            textAlignVertical: "center",
                                            marginVertical: 8
                                        }}
                                    />
                                    <Button
                                        btnName="मराठी"
                                        style={{
                                            height: 55,
                                            width: 310,
                                            borderRadius: 10,
                                            backgroundColor: colors.white,
                                            color: colors.quatnary,
                                            fontSize: 22,
                                            textAlignVertical: "center",
                                            marginVertical: 8
                                        }}
                                    />
                                </View>
                            </View>
                            <Pressable>
                                <Button
                                    btnName="Change language"
                                    weight="700"
                                    onPress={() => setLanguage(!language)}
                                    style={{
                                        width: 360,
                                        backgroundColor: colors.tertiary,
                                        alignSelf: "center",
                                        alignItems: "center",
                                        borderRadius: 10,
                                        fontSize: 22,
                                        marginTop: 20,
                                        shadowColor: colors.black,
                                        shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.25,
                                        shadowRadius: 4,
                                        elevation: 5
                                    }}
                                />
                            </Pressable>
                        </View>
                    </Modal>
                    <Pressable onPress={() => setLanguage(!language)}>
                        <Button
                            weight="400"
                            btnName="change Language"
                            style={{
                                backgroundColor: colors.white,
                                color: colors.black,
                                height: 53,
                                width: 350,
                                borderRadius: 10,
                                fontSize: 18,
                                textAlignVertical: "center",
                                marginVertical: 12
                            }}
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
                        <View style={{ height: "100%", width: "100%" }}>
                            <View
                                style={{
                                    height: 310,
                                    width: 360,
                                    backgroundColor: colors.tertiary,
                                    alignItems: "center",
                                    borderRadius: 10,
                                    marginTop: 55,
                                    alignSelf: "center",
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
                                        fontSize: 20,
                                        marginVertical: 30
                                    }}
                                >
                                    Delete Account
                                </Text>
                                <CustomInput
                                    placeholder="Reason?"
                                    style={{
                                        height: 50,
                                        width: 310,
                                        borderRadius: 10,
                                        textAlignVertical: "center",
                                        fontSize: 21,
                                        textAlign: "center"
                                    }}
                                />
                                <Pressable onPress={() => setAccount(!account)}>
                                    <Button
                                        btnName="Confirm"
                                        style={{
                                            width: 210,
                                            height: 50,
                                            fontSize: 21,

                                            marginTop: 20,
                                            borderRadius: 13,
                                            color: colors.quatnary,
                                            backgroundColor: colors.white
                                        }}
                                    />
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                    <Pressable>
                        <Button
                            weight="400"
                            btnName="Delete Account"
                            onPress={() => setAccount(true)}
                            style={{
                                backgroundColor: colors.white,
                                color: colors.black,
                                height: 53,
                                width: 350,
                                borderRadius: 10,
                                fontSize: 18,
                                textAlignVertical: "center",
                                marginVertical: 12
                            }}
                        />
                    </Pressable>
                </View>
            </View>
        </Background>
    );
}
