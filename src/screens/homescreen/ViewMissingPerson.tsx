import React, { useEffect } from "react";
import { View, ScrollView, TouchableWithoutFeedback, Modal } from "react-native";
import { Background, StatusDetail, Text, DateAndTime, ComplaintLoader } from "@components";
import { NavigationProps } from "@types";
import { colors } from "@utils";
import { getMissingPerson } from "@contexts/api/client";
import { getCredentials, isTokenExpired } from "@contexts/store/credentials";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
    subscribeToChat,
    AllMissingPerson,
    closeSocket,
    initiateSocketConnection,
    disconnectSocket
} from "../../service/socketio.service";
import { ComplaintsLayout } from "./ComplaintsLayout";
import { userMslf, userMissingPerson } from "@contexts/slice/complaintsSlice";
import { MissingPersonLayout } from "./viewlayout/MissingPersonLayout";
import { useTranslation } from "react-i18next";

// interface complaintProps {
//     _id?: string;
//     complaintType?: string;
//     createdAt?: Date;
//     location?: {
//         name?: string;
//     };
//     proof?: string;
//     reason?: string;
//     status?: string;
//     updatedAt?: Date;
//     image?: string[];
// }

// type multiProps = complaintProps[];
type multiProps = any[];

export function ViewMissingPerson({ navigation }: NavigationProps<"ViewMissingPerson">) {
    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const getAllComplaints: multiProps = useSelector(
        (state: RootStateOrAny) => state.complaints.missingPerson
    );

    const dispatch = useDispatch();
    async function getComplaints() {
        const data = await getCredentials();
        if (data) {
            if (!isTokenExpired(data.access_token)) {
                const res = await fetch(getMissingPerson, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        authorization: `Bearer ${data.access_token}`
                    }
                });
                const complaint = await res.json();
                dispatch(userMissingPerson(complaint));

                //active status to be send from backend to login police
            }
        }
    }

    useEffect(() => {
        const ac = new AbortController();
        initiateSocketConnection((data: boolean) => {
            if (data) {
                getComplaints();
                // AllMissingPerson((err: any, data: any) => {
                //     dispatch(userMissingPerson(data));
                // });
                subscribeToChat((err: any, data: any) => {
                    if (data.success) {
                        getComplaints();
                    }
                });
                setLoading(true);
            }
        });
        return function cleanup() {
            ac.abort();
            closeSocket();
        };
    }, []);
    const [x, setX] = React.useState({ state: false, id: "" });
    return (
        <Background>
            <View
                style={{
                    width: "100%",
                    height: "100%",
                    paddingHorizontal: 20,
                    paddingBottom: 60
                }}
            >
                <Text style={{ color: "#FFF", marginBottom: 18, textAlign: "center" }}>
                    {`${t("missPerson")} ${t("complaint")}`}
                </Text>
                {!loading && <ComplaintLoader />}
                <View>
                    <ScrollView>
                        {getAllComplaints &&
                            getAllComplaints.map((item: any, index) => {
                                return (
                                    <TouchableWithoutFeedback
                                        key={index}
                                        onPress={() => {
                                            setX({ state: true, id: item._id });
                                        }}
                                    >
                                        <View
                                            style={{
                                                marginVertical: 10,
                                                width: "100%",
                                                backgroundColor: "#281B89",
                                                borderRadius: 10,
                                                padding: 10,
                                                elevation: 3
                                            }}
                                        >
                                            <Modal
                                                transparent={true}
                                                animationType="slide"
                                                visible={x.state && item._id === x.id}
                                                onRequestClose={() => {
                                                    setX({ state: false, id: "" });
                                                }}
                                            >
                                                <MissingPersonLayout route={item} />
                                            </Modal>
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    alignItems: "center"
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        flexDirection: "row",
                                                        alignItems: "center"
                                                    }}
                                                >
                                                    <StatusDetail string={item.status} />
                                                    <View
                                                        style={{
                                                            flexDirection: "column",
                                                            alignItems: "flex-start",
                                                            marginLeft: 10
                                                        }}
                                                    >
                                                        <DateAndTime
                                                            string={new Date(
                                                                item.createdAt!
                                                            ).toLocaleDateString("en-IN")}
                                                        />
                                                        <DateAndTime
                                                            string={new Date(
                                                                item.createdAt!
                                                            ).toLocaleTimeString("en-IN")}
                                                        />
                                                    </View>
                                                    {/* <Image
                                                                    resizeMode="contain"
                                                                    style={{
                                                                        height: 22,
                                                                        width: 22,
                                                                        marginLeft: 4
                                                                    }}
                                                                    source={require("@assets/remainder.png")}
                                                                /> */}
                                                </View>
                                            </View>
                                            <Text
                                                weight="400"
                                                style={{
                                                    color: colors.white,
                                                    fontSize: 15,
                                                    marginTop: 5
                                                }}
                                            >
                                                {`${t("missPerson")} ${t("report")}`}
                                            </Text>
                                            <Text
                                                numberOfLines={2}
                                                weight="400"
                                                style={{
                                                    color: colors.white,
                                                    fontSize: 12,
                                                    paddingTop: 5
                                                }}
                                            >
                                                {`${t("name")}: ${item.name}`}
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                );
                            })}
                    </ScrollView>
                </View>
            </View>
        </Background>
    );
}
