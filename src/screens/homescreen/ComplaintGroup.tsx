import React, { useEffect, useState } from "react";
import {
    View,
    Image,
    ScrollView,
    Modal,
    TouchableOpacity,
    TouchableWithoutFeedback
} from "react-native";
import {
    Background,
    StatusDetail,
    Text,
    DateAndTime,
    PostLoader,
    Normalloader,
    ComplaintLoader
} from "@components";
import { NavigationProps } from "@types";
import { colors } from "@utils";
import { complaints } from "@contexts/api/client";
import { getCredentials, isTokenExpired } from "@contexts/store/credentials";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { userComplaints } from "@contexts/slice/authSlice";

interface complaintProps {
    _id?: string;
    complaintType?: string;
    createdAt?: Date;
    location?: {
        name?: string;
    };
    proof?: string;
    reason?: string;
    status?: string;
    updatedAt?: Date;
    image?: string[];
}

type multiProps = complaintProps[];

export function ComplaintGroup({ navigation }: NavigationProps<"ComplaintGroup">) {
    const [loading, setLoading] = React.useState(false);
    const getAllComplaints: multiProps = useSelector(
        (state: RootStateOrAny) => state.auth.complaints
    );
    // console.log(getAllComplaints);
    const dispatch = useDispatch();
    async function getComplaints() {
        const data = await getCredentials();
        if (data) {
            if (!isTokenExpired(data.access_token)) {
                const res = await fetch(complaints, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        authorization: `Bearer ${data.access_token}`
                    }
                });
                const user = await res.json();
                if (user.myComplaints) {
                    dispatch(userComplaints(user));
                }
                //active status to be send from backend to login police
            }
            setLoading(true);
        }
    }
    useEffect(() => {
        getComplaints();
    }, []);
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
                    Complaints
                </Text>
                {!loading && <ComplaintLoader />}
                <View>
                    <ScrollView>
                        {getAllComplaints &&
                            getAllComplaints.map((item, index) => {
                                return (
                                    <TouchableWithoutFeedback
                                        key={index}
                                        onPress={() => {
                                            navigation.navigate("ComplaintsLayout", item);
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
                                                Reason
                                            </Text>
                                            <Text
                                                numberOfLines={4}
                                                weight="400"
                                                style={{
                                                    color: colors.white,
                                                    fontSize: 12,
                                                    paddingTop: 5
                                                }}
                                            >
                                                {item.reason}
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

// id={a?.id}
// status={a?.status}
// date={a?.date}
// time={a?.time}
// reason={a?.reason}
// text={a?.text}
