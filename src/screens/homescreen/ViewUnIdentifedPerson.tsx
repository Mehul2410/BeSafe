import React, { useEffect } from "react";
import { View, ScrollView, TouchableWithoutFeedback, Modal } from "react-native";
import { Background, StatusDetail, Text, DateAndTime, ComplaintLoader } from "@components";
import { NavigationProps } from "@types";
import { colors } from "@utils";
import { getUnIdPerson } from "@contexts/api/client";
import { getCredentials, isTokenExpired } from "@contexts/store/credentials";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { AllUnIdPerson, subscribeToChat } from "../../service/socketio.service";
import { ComplaintsLayout } from "./ComplaintsLayout";
import { userUnidentifiedPerson } from "@contexts/slice/complaintsSlice";

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

export function ViewUnidentifiedPerson({ navigation }: NavigationProps<"ViewPost">) {
    const [loading, setLoading] = React.useState(false);
    const getAllComplaints: multiProps = useSelector(
        (state: RootStateOrAny) => state.complaints.UnidentifiedPerson
    );

    const dispatch = useDispatch();
    async function getComplaints() {
        const data = await getCredentials();
        if (data) {
            if (!isTokenExpired(data.access_token)) {
                const res = await fetch(getUnIdPerson, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        authorization: `Bearer ${data.access_token}`
                    }
                });
                //active status to be send from backend to login police
            }
        }
    }

    useEffect(() => {
        getComplaints();
        AllUnIdPerson((err, data) => {
            dispatch(userUnidentifiedPerson(data));
            setLoading(true);
        });
        subscribeToChat((err, data) => {
            if (data.success) {
                getComplaints();
            }
        });
    }, []);
    console.log(getAllComplaints);
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
                    Complaints
                </Text>
                {!loading && <ComplaintLoader />}
                <View>
                    <ScrollView></ScrollView>
                </View>
            </View>
        </Background>
    );
}
