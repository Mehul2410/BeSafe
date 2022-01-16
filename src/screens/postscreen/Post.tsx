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
import { View } from "react-native";
import { ScrollView } from "react-native";
import useSWR from "swr";
import { allUsers, createPost } from "@contexts/api/client";
import { getCredentials } from "@contexts/store/credentials";
// import useLocation from "@assets/hooks/useLocation.hook";
import * as Location from "expo-location";

export function Post() {
    const [imageUris, setImageUris] = React.useState<string[]>([]);
    const [location, setLocation] = React.useState("");
    const [latlng, setlatlng] = React.useState<{ latitude: number; longitude: number }>();
    const [users, setUser] = React.useState<[]>();
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
    const [nearbyStation, setNearbyStation] = React.useState<[]>();
    const SearchResult =
        users &&
        users.filter(value => {
            return Object.values(value)
                .join(" ")
                .toLowerCase()
                .includes(complaint.complaintAgainst.toLowerCase());
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
    }
    async function nearByPoliceStation() {
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
    }

    async function submitComplaint() {
        const formData = new FormData();
        formData.append(
            "imageProof",
            JSON.parse(
                JSON.stringify({
                    uri: imageUris,
                    type: "image"
                })
            )
        );
        const blob = new Blob([JSON.stringify(complaint)], {
            type: "application/json"
        });
        formData.append("data", blob);
        const creds = await getCredentials();
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
                            onChangeText={text =>
                                setComplaint({ ...complaint, complaintAgainst: text })
                            }
                            placeholder="Complaint against"
                        />
                        {/* {SearchResult &&
                            SearchResult.map(item => {
                                console.log(item);
                                // ithe ek view banav tyat image ani name fkta display kr insta gram vr search kela vr kasa yeta tasa
                            })} */}

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
                        {location !== "" && <RegularText string={location} />}
                        {location === "" ? (
                            <Button
                                btnName={
                                    complaint.locationAddress
                                        ? "Saved Address"
                                        : "Check location Address"
                                }
                                weight="400"
                                onPress={locationAddress}
                            />
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
                        {/* <CustomInput
                            onChangeText={text =>
                                setComplaint({ ...complaint, nearestPoliceStation: text })
                            }
                            placeholder="Near by Police Station"
                        /> */}
                        <Button
                            weight="400"
                            btnName="Get Near by Police Station"
                            onPress={nearByPoliceStation}
                        />
                        <RegularText string="Image Proof" vmargin={8} />
                        <ImageInputList
                            imageUri={imageUris}
                            onAddImage={handleAdd}
                            onRemoveImage={(uri: string) => handleRemove(uri)}
                        />
                        <Button btnName="Submit" style={{ fontSize: 18, marginTop: 6 }} />
                    </ScrollView>
                </View>
            </View>
        </Background>
    );
}
