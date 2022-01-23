import React from "react";
import {
    Background,
    CustomInput,
    Text,
    Button,
    ImageInput,
    ImageInputList,
    RegularText,
    PostLoader,
    LocationLoader
} from "@components";
import { View, Image, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native";
import useSWR from "swr";
import { allUsers, createPost } from "@contexts/api/client";
import { getCredentials } from "@contexts/store/credentials";
// import useLocation from "@assets/hooks/useLocation.hook";
import * as Location from "expo-location";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
// import { ViewProfile } from "../profile/ViewProfile";
//notification
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

export function Post() {
    // async function registerForPushNotificationsAsync() {
    //     let token;
    //     console.log(token);
    //     if (Constants.isDevice) {
    //         const { status: existingStatus } = await Notifications.getPermissionsAsync();
    //         let finalStatus = existingStatus;
    //         if (existingStatus !== "granted") {
    //             const { status } = await Notifications.requestPermissionsAsync();
    //             finalStatus = status;
    //         }
    //         if (finalStatus !== "granted") {
    //             alert("Failed to get push token for push notification!");
    //             return;
    //         }
    //         token = (await Notifications.getExpoPushTokenAsync()).data;
    //     } else {
    //         alert("Must use physical device for Push Notifications");
    //     }
    // }

    const [loading, setLoading] = React.useState(false);
    const [policeLoading, setPoliceLoading] = React.useState(false);
    const [locationLoading, setLocationLoading] = React.useState(false);
    const [imageUris, setImageUris] = React.useState<string[]>([]);
    const [location, setLocation] = React.useState("");
    const [latlng, setlatlng] = React.useState<{ latitude: number; longitude: number }>();
    const [users, setUser] = React.useState<[]>();
    const [complaint, setComplaint] = React.useState({
        complaintAgainstName: "",
        complaintAgainst: "",
        reason: "",
        complaintType: "",
        locationName: "",
        locationAddress: "",
        currentSituation: "",
        nearestPoliceStation: "",
        nearestPoliceStationAddress: ""
    });
    const [nearbyStation, setNearbyStation] = React.useState<[]>();
    const SearchResult =
        complaint.complaintAgainstName !== "" &&
        users &&
        users.filter(value => {
            return Object.values(value)
                .join(" ")
                .toLowerCase()
                .includes(complaint.complaintAgainstName.toLowerCase());
        });

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
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync();
            if (!granted) return;
            const {
                coords: { latitude, longitude }
            } = await Location.getCurrentPositionAsync();
            setlatlng({ latitude, longitude });
        } catch (error) {
            console.log(error);
        }
        return true;
    }
    const { data, error } = useSWR(allUsers, fetcher);
    const handleAdd = (uri: string) => {
        setImageUris([...imageUris, uri]);
    };

    const handleRemove = (uri: string) => {
        setImageUris(imageUris.filter(imageUris => imageUris !== uri));
    };

    async function locationAddress() {
        const loc = await fetch(
            `https://trueway-places.p.rapidapi.com/FindPlaceByText?text=${complaint.locationName}&language=en`,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "trueway-places.p.rapidapi.com",
                    "x-rapidapi-key": "4dbe734a50msh60cc149bbe99849p1aefa1jsn434bf0188f79"
                }
            }
        );
        const { results } = await loc.json();
        setLocation(results[0].address);
        setLocationLoading(true);
        setTimeout(() => {
            setLocationLoading(false);
        }, 1000);
    }
    async function nearByPoliceStation() {
        setComplaint({ ...complaint, nearestPoliceStation: "", nearestPoliceStationAddress: "" });
        const station = await fetch(
            `https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=${latlng?.latitude},${latlng?.longitude}&type=police_station&language=en`,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "trueway-places.p.rapidapi.com",
                    "x-rapidapi-key": "4dbe734a50msh60cc149bbe99849p1aefa1jsn434bf0188f79"
                }
            }
        );
        const { results } = await station.json();
        setNearbyStation(results);
        setPoliceLoading(true);
        setTimeout(() => {
            setPoliceLoading(false);
        }, 1000);
    }

    async function submitComplaint() {
        const formData = new FormData();
        imageUris.forEach(element => {
            formData.append(
                "imageProof",
                JSON.parse(
                    JSON.stringify({
                        name: `image.${element.split(".")[1]}`,
                        uri: element,
                        type: `image/${element.split(".")[1]}`
                    })
                )
            );
        });
        formData.append("data", JSON.stringify(complaint));
        const creds = await getCredentials();
        try {
            const submit = await fetch(createPost, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data",
                    authorization: `Bearer ${creds.access_token}`
                }
            });
            console.log(await submit.json());
        } catch (err) {
            console.log(err);
        }
    }

    function handleLoading() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }

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
                            value={complaint.complaintAgainstName}
                            onChangeText={text => {
                                setComplaint({ ...complaint, complaintAgainstName: text });
                                handleLoading();
                            }}
                            placeholder="Complaint against"
                        />
                        {SearchResult &&
                            SearchResult.map((item: any, index) => {
                                return (
                                    <TouchableWithoutFeedback
                                        key={index}
                                        onPress={() => {
                                            setComplaint({
                                                ...complaint,
                                                complaintAgainst: item._id,
                                                complaintAgainstName: item.name
                                            });
                                        }}
                                    >
                                        <View
                                            style={{
                                                width: "100%",
                                                flexDirection: "row",
                                                marginBottom: 10
                                            }}
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
                                            <RegularText
                                                color="#FFF"
                                                align="center"
                                                string={item.name}
                                            />
                                        </View>
                                    </TouchableWithoutFeedback>
                                );
                            })}
                        {loading && <PostLoader />}
                        <CustomInput
                            onChangeText={text =>
                                setComplaint({ ...complaint, complaintType: text })
                            }
                            placeholder="Complaint Type"
                        />
                        <CustomInput
                            onChangeText={text => setComplaint({ ...complaint, reason: text })}
                            placeholder="Reason of complaint"
                        />
                        <CustomInput
                            onChangeText={text =>
                                setComplaint({ ...complaint, locationName: text })
                            }
                            editable={complaint.locationAddress ? false : true}
                            placeholder="Location Name"
                        />
                        {locationLoading && <PostLoader />}
                        {location !== "" && <RegularText string={location} />}
                        {location === "" ? (
                            <>
                                <Button
                                    btnName={
                                        complaint.locationAddress
                                            ? "Saved Address"
                                            : "Check location Address"
                                    }
                                    weight="400"
                                    onPress={locationAddress}
                                />
                                {complaint.locationAddress !== "" && (
                                    <Button
                                        btnName="Change Address"
                                        weight="400"
                                        onPress={() =>
                                            setComplaint({ ...complaint, locationAddress: "" })
                                        }
                                    />
                                )}
                            </>
                        ) : (
                            <Button
                                btnName="Approve Address"
                                weight="400"
                                onPress={() => {
                                    setComplaint({
                                        ...complaint,
                                        locationAddress: location
                                    });
                                    setLocation("");
                                }}
                            />
                        )}
                        <CustomInput
                            onChangeText={text =>
                                setComplaint({ ...complaint, currentSituation: text })
                            }
                            placeholder="Current Situation"
                        />
                        <Button
                            weight="400"
                            btnName="Get Near by Police Station"
                            onPress={nearByPoliceStation}
                        />
                        {policeLoading && <LocationLoader />}
                        {complaint.nearestPoliceStation === "" ? (
                            nearbyStation &&
                            nearbyStation.map((item: any, index) => {
                                return (
                                    <TouchableWithoutFeedback
                                        key={index}
                                        onPress={() => {
                                            setComplaint({
                                                ...complaint,
                                                nearestPoliceStation: item.name,
                                                nearestPoliceStationAddress: item.address
                                            });
                                        }}
                                    >
                                        <View
                                            style={{
                                                width: "100%",
                                                flexDirection: "column",
                                                backgroundColor: "#FFF",
                                                borderRadius: 5,
                                                padding: 5,
                                                marginVertical: 4
                                            }}
                                        >
                                            <RegularText
                                                align="flex-start"
                                                size={11}
                                                color="#000"
                                                string={`Station Name: ${item.name && item.name}`}
                                            />
                                            <RegularText
                                                size={11}
                                                color="#000"
                                                textalign="justify"
                                                string={`Address: ${item.address && item.address}`}
                                            />
                                            <RegularText
                                                color="#000"
                                                size={11}
                                                align="flex-start"
                                                string={`${
                                                    item.distance &&
                                                    (item.distance / 1000).toFixed(1)
                                                } KM`}
                                            />
                                        </View>
                                    </TouchableWithoutFeedback>
                                );
                            })
                        ) : (
                            <Button
                                weight="400"
                                btnName="Saved Police Station"
                                onPress={nearByPoliceStation}
                            />
                        )}
                        <RegularText color="#FFF" string="Image Proof" vmargin={8} size={18} />
                        <ImageInputList
                            imageUri={imageUris}
                            onAddImage={handleAdd}
                            onRemoveImage={(uri: string) => handleRemove(uri)}
                        />
                        <Button
                            btnName="Submit"
                            style={{ fontSize: 18, marginTop: 6 }}
                            onPress={submitComplaint}
                        />
                    </ScrollView>
                </View>
            </View>
        </Background>
    );
}
