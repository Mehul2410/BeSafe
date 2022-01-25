import React from "react";
import { View, Image, Modal, FlatList } from "react-native";
import {
    Text,
    DateAndTime,
    StatusDetail,
    Background,
    RegularText,
    MediumText,
    LightText,
    Button,
    Heading
} from "@components";
import { colors } from "@utils";
import { NavigationProps } from "@types";
import ImageViewer from "react-native-image-zoom-viewer";
import { getStationPolice, updateStatus } from "@contexts/api/client";
import { getCredentials, isTokenExpired } from "@contexts/store/credentials";
import { RootStateOrAny, useSelector } from "react-redux";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export function ComplaintsLayout({ route }: NavigationProps<"ComplaintsLayout">) {
    const [changeStatus, setChangeStatus] = React.useState({
        activity: false,
        status: ""
    });
    const [police, setPolice] = React.useState<any[]>();
    const [assignComplaint, setAssignComplaint] = React.useState({
        activity: false,
        _id: "",
        name: "",
        avatar: "",
        policePost: ""
    });

    const [view, setView] = React.useState(false);
    const { _id, role } = useSelector((state: RootStateOrAny) => state.auth);

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

    async function getAllStationPolice() {
        const data = await getCredentials();
        if (data) {
            if (!isTokenExpired(data.access_token)) {
                const user = await fetch(getStationPolice, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        authorization: `Bearer ${data.access_token}`
                    }
                });
                const res = await user.json();
                if (res.success) {
                    setPolice(res.user);
                }
                //active status to be send from backend to login police
            }
        }
    }

    React.useEffect(() => {
        getAllStationPolice();
    }, []);

    const [selectedId, setSelectedId] = React.useState(null);

    function Police({ item }: any) {
        return (
            <TouchableWithoutFeedback onPress={() => setSelectedId(item._id)}>
                <View
                    style={{
                        width: "100%",
                        flexDirection: "row",
                        marginBottom: 10,
                        borderWidth: 1,
                        borderColor: "#FFFFFF",
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderRadius: 10,
                        alignItems: "center",
                        backgroundColor: item._id === selectedId ? "#27224dc7" : "#281B89"
                    }}
                >
                    <Image
                        style={{
                            width: 45,
                            height: 40,
                            marginRight: 10,
                            borderRadius: 100
                        }}
                        resizeMode="contain"
                        source={item.avatar ? { uri: item.avatar } : require("@assets/img.png")}
                    />
                    <View>
                        <RegularText
                            color="#FFF"
                            textalign="left"
                            align="center"
                            string={item.name}
                        />
                        <RegularText
                            color="#FFF"
                            align="center"
                            textalign="left"
                            string={item.userDetails && item.userDetails.policePost}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    const flatListHead = () => {
        return (
            <>
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
                <MediumText
                    size={19}
                    align="flex-start"
                    string={
                        route.params.complaintAgainst === _id
                            ? "You are involved in this complaint"
                            : `Your complaint is raised against: ${
                                  route.params.complaintAgainstName &&
                                  route.params.complaintAgainstName
                              } `
                    }
                />
                <Button
                    btnName="Assign Complaint"
                    weight="200"
                    onPress={() => setAssignComplaint({ ...assignComplaint, activity: true })}
                />
            </>
        );
    };

    const flatListFooter = () => {
        return (
            <>
                <Button
                    btnName="Assign Complaint"
                    weight="200"
                    onPress={() => setAssignComplaint({ ...assignComplaint, activity: true })}
                />
                {role === 5000 && (
                    <>
                        <Button
                            btnName="Change Status"
                            weight="200"
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
                                            setChangeStatus({
                                                ...changeStatus,
                                                status: items
                                            })
                                        }
                                    >
                                        {items}
                                    </Text>
                                );
                            })}
                        {changeStatus.status !== "" && (
                            <>
                                <Text>{`Change Complaint status to ${changeStatus.status}`}</Text>
                                <Button weight="200" btnName="Yes" onPress={handleChangeStatus} />
                                <Button
                                    weight="200"
                                    btnName="No"
                                    onPress={() =>
                                        setChangeStatus({
                                            activity: false,
                                            status: ""
                                        })
                                    }
                                />
                            </>
                        )}
                    </>
                )}
                <View style={{ marginBottom: 80 }}>
                    <Heading string="Reason" />
                    <LightText string={route.params.reason} />
                </View>
            </>
        );
    };
    return (
        <Background bgColor="#281B89">
            <View
                style={{
                    position: "relative",
                    height: "100%",
                    width: "100%"
                }}
            >
                <View
                    style={{
                        paddingHorizontal: 20,
                        paddingBottom: 10,
                        height: "100%",
                        width: "100%"
                    }}
                >
                    {role === 4000 && (
                        <FlatList
                            data={police && police}
                            renderItem={assignComplaint ? Police : null}
                            keyExtractor={item => item._id}
                            ListHeaderComponent={flatListHead}
                            ListFooterComponent={flatListFooter}
                            extraData={selectedId}
                        />
                    )}
                </View>
                <View
                    style={{
                        position: "absolute",
                        width: "100%",
                        paddingHorizontal: 20,
                        bottom: 0,
                        left: 0,
                        backgroundColor: "#281B89"
                    }}
                >
                    <Modal visible={view} transparent={true} onRequestClose={() => setView(false)}>
                        <ImageViewer
                            imageUrls={images}
                            onSwipeDown={() => setView(false)}
                            onCancel={() => setView(false)}
                            enableSwipeDown={true}
                            backgroundColor="#281B89"
                        />
                    </Modal>
                    <Button weight="200" btnName="View Case Images" onPress={() => setView(true)} />
                    <Button
                        bgColor="#DC143C"
                        weight="200"
                        style={{
                            color: colors.white
                        }}
                        btnName={`Assigned to: ${route.params.assignTo}`}
                    />
                </View>
            </View>
        </Background>
    );
}
