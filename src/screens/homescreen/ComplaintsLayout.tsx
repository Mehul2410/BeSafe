import React from "react";
import { View, Image, ScrollView, Pressable, PressableProps, Group, Modal } from "react-native";
import {
    Text,
    DateAndTime,
    StatusDetail,
    Reason,
    Background,
    RegularText,
    LightText,
    Button
} from "@components";
import { colors } from "@utils";
import { NavigationProps } from "@types";
import ImageViewer from "react-native-image-zoom-viewer";
import { updateStatus } from "@contexts/api/client";
import { getCredentials } from "@contexts/store/credentials";

export function ComplaintsLayout({ route }: NavigationProps<"ComplaintsLayout">) {
    const [changeStatus, setChangeStatus] = React.useState({
        activity: false,
        status: ""
    });

    const [view, setView] = React.useState(false);
    const images = route.params.images?.map((img, index) => {
        return { url: img };
    });

    async function handleChangeStatus() {
        const creds = await getCredentials();
        if (creds) {
            try {
                const res = await fetch(updateStatus, {
                    method: "PUT",
                    body: JSON.stringify({
                        status: changeStatus.status,
                        _id: route.params._id
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        authorization: `Bearer ${creds.access_token}`
                    }
                });
                const statusChange = await res.json();
                if (statusChange.acknowledged) {
                    console.log("updated");
                } else {
                    console.log("error");
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <Background bgColor="#281B89">
            <View
                style={{
                    height: "100%",
                    width: "100%",
                    paddingHorizontal: 20,
                    paddingBottom: 10
                }}
            >
                <ScrollView>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                width: "100%",
                                marginBottom: 10
                            }}
                        >
                            <StatusDetail string={route.params.status && route.params.status} />
                            <View
                                style={{
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    marginLeft: 10
                                }}
                            >
                                <DateAndTime
                                    string={new Date(route.params.createdAt!).toLocaleDateString(
                                        "en-IN"
                                    )}
                                />
                                <DateAndTime
                                    string={new Date(route.params.createdAt!).toLocaleTimeString(
                                        "en-IN"
                                    )}
                                />
                            </View>
                        </View>
                    </View>
                    <View>
                        <Button
                            btnName="Change Status"
                            weight="400"
                            onPress={() =>
                                setChangeStatus({
                                    ...changeStatus,
                                    activity: !changeStatus.activity
                                })
                            }
                        />
                        {changeStatus.activity &&
                            ["In Process", "Hold", "Solved", "Closed"].map((items, index) => {
                                return (
                                    <Text
                                        key={index}
                                        onPress={() =>
                                            setChangeStatus({ ...changeStatus, status: items })
                                        }
                                    >
                                        {items}
                                    </Text>
                                );
                            })}
                        {changeStatus.status !== "" && (
                            <>
                                <Text>{`Change Complaint status to ${changeStatus.status}`}</Text>
                                <Button btnName="Yes" onPress={handleChangeStatus} />
                                <Button
                                    btnName="No"
                                    onPress={() => setChangeStatus({ activity: false, status: "" })}
                                />
                            </>
                        )}
                        <Reason string="Reason" />
                        <LightText string={route.params.reason} />

                        <Text
                            weight="700"
                            style={{
                                color: colors.white,
                                marginVertical: 10,
                                fontSize: 18,
                                marginStart: 3
                            }}
                        >
                            Images
                        </Text>
                        <View>
                            <ScrollView horizontal={true}>
                                <Modal
                                    visible={view}
                                    transparent={true}
                                    onRequestClose={() => setView(false)}
                                >
                                    <ImageViewer
                                        imageUrls={images}
                                        onSwipeDown={() => setView(false)}
                                        onCancel={() => setView(false)}
                                        enableSwipeDown={true}
                                        backgroundColor="#281B89"
                                    />
                                </Modal>
                                <Button btnName="View Case Images" onPress={() => setView(true)} />
                            </ScrollView>
                        </View>
                    </View>
                    <Text
                        weight="400"
                        style={{
                            color: colors.white,
                            fontSize: 23,
                            paddingVertical: 10,
                            backgroundColor: "#A6B1E1",
                            textAlign: "center",

                            borderRadius: 10
                        }}
                    >
                        Case Handler: NAME
                    </Text>
                </ScrollView>
            </View>
        </Background>
    );
}
