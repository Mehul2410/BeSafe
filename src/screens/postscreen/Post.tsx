import React from "react";
import {
    Background,
    CustomInput,
    Text,
    Button,
    ImageInput,
    ImageInputList,
    RegularText
} from "@components";
import { View, Image } from "react-native";
import { ScrollView } from "react-native";
import useSWR from "swr";
import { allUsers } from "@contexts/api/client";
import { getCredentials } from "@contexts/store/credentials";
import { ViewProfile } from "../profile/ViewProfile";

export function Post() {
    const [imageUris, setImageUris] = React.useState<string[]>([]);
    const [users, setUser] = React.useState<[]>();
    async function fetcher(url: string) {
        const creds = await getCredentials();
        const res = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
                authorization: `Bearer ${creds.access_token}`
            }
        });
        const result = await res.json();
        setUser(result);
        return true;
    }
    const { data, error } = useSWR(allUsers, fetcher);
    const [complaint, setComplaint] = React.useState({
        complaintAgainst: "",
        reason: "",
        complaintType: "",
        locationName: "",
        locationAddress: "",
        currentSituation: "",
        nearestPoliceStation: "",
        nearestPoliceStationAddress: ""
    });

    const SearchResult =
        complaint.complaintAgainst !== "" &&
        users &&
        users.filter(value => {
            return Object.values(value)
                .join(" ")
                .toLowerCase()
                .includes(complaint.complaintAgainst.toLowerCase());
        });
    const handleAdd = (uri: string) => {
        setImageUris([...imageUris, uri]);
    };

    const handleRemove = (uri: string) => {
        setImageUris(imageUris.filter(imageUris => imageUris !== uri));
    };

    return (
        <Background>
            <View
                style={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 20
                }}
            >
                <Text weight="700" style={{ color: "#FFF", fontSize: 18, textAlign: "center" }}>
                    Your details will be verified before processing!
                </Text>
                <Text
                    weight="400"
                    style={{
                        color: "#FFF",
                        fontSize: 13,
                        textDecorationLine: "underline",
                        textAlign: "center",
                        marginVertical: 10
                    }}
                >
                    Strict action will be taken for registering false complaint!!!
                </Text>
                <View
                    style={{
                        width: "100%",
                        height: "85%",
                        backgroundColor: "#281B89",
                        paddingHorizontal: 20,
                        paddingVertical: 22,
                        borderRadius: 15
                    }}
                >
                    <ScrollView>
                        <CustomInput
                            onChangeText={text =>
                                setComplaint({ ...complaint, complaintAgainst: text })
                            }
                            placeholder="Complaint against"
                        />
                        {SearchResult &&
                            SearchResult.map((item: any, index) => {
                                return (
                                    <View
                                        style={{
                                            width: "100%",
                                            flexDirection: "row",
                                            marginBottom: 10
                                        }}
                                        key={index}
                                    >
                                        <Image
                                            style={{
                                                height: 35,
                                                width: 35,
                                                marginRight: 10,
                                                borderRadius: 100
                                            }}
                                            resizeMode="contain"
                                            source={
                                                item.avatar
                                                    ? { uri: item.avatar }
                                                    : require("@assets/img.png")
                                            }
                                        />
                                        <RegularText align="center" string={item.name} />
                                    </View>
                                );
                            })}

                        <CustomInput
                            onChangeText={text => setComplaint({ ...complaint, reason: text })}
                            placeholder="Reason of complaint"
                        />
                        <CustomInput
                            onChangeText={text =>
                                setComplaint({ ...complaint, locationName: text })
                            }
                            placeholder="Location Name"
                        />
                        <CustomInput
                            onChangeText={text =>
                                setComplaint({ ...complaint, currentSituation: text })
                            }
                            placeholder="Current Situation"
                        />
                        <CustomInput
                            onChangeText={text =>
                                setComplaint({ ...complaint, nearestPoliceStation: text })
                            }
                            placeholder="Near by Police Station"
                        />
                        <RegularText string="Image Proof" vmargin={8} />
                        <ImageInputList
                            imageUri={imageUris}
                            onAddImage={handleAdd}
                            onRemoveImage={(uri: string) => handleRemove(uri)}
                        />

                        <CustomInput
                            onChangeText={text =>
                                setComplaint({ ...complaint, nearestPoliceStation: text })
                            }
                            placeholder="Your nearest police station"
                        />
                        <Button btnName="Submit" style={{ fontSize: 18, marginTop: 6 }} />
                    </ScrollView>
                </View>
            </View>
        </Background>
    );
}
