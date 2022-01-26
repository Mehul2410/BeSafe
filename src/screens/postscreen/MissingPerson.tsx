import {
    Background,
    Complaint,
    RegularText,
    CustomInput,
    PostLoader,
    Button,
    LocationLoader,
    ImageInputList,
    MediumText,
    LightText,
    CheckBox,
    Text
} from "@components";
import { missingPerson, sendNotification } from "@contexts/api/client";
import { getCredentials } from "@contexts/store/credentials";
import { colors } from "@utils";
import React, { useEffect } from "react";
import * as Location from "expo-location";
import { TouchableWithoutFeedback, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export function MissingPerson() {
    const [loading, setLoading] = React.useState(false);
    const [policeLoading, setPoliceLoading] = React.useState(false);
    const [locationLoading, setLocationLoading] = React.useState(false);
    const [imageUris, setImageUris] = React.useState<string[]>([]);
    const [location, setLocation] = React.useState("");
    const [latlng, setlatlng] = React.useState<{ latitude: number; longitude: number }>();
    const [complaint, setComplaint] = React.useState({
        dateFrom: "Date & Time",
        dateTo: "Date & Time",
        name: "",
        fatherName: "",
        height: "",
        religion: "",
        sex: "",
        locName: "",
        locAddress: "",
        stationName: "",
        stationAddress: "",
        age: ""
    });
    const [nearbyStation, setNearbyStation] = React.useState<[]>();

    const handleAdd = (uri: string) => {
        setImageUris([...imageUris, uri]);
    };

    const handleRemove = (uri: string) => {
        setImageUris(imageUris.filter(imageUris => imageUris !== uri));
    };

    async function latLong() {
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
    }
    useEffect(() => {
        latLong();
    }, []);
    async function locationAddress() {
        const loc = await fetch(
            `https://trueway-places.p.rapidapi.com/FindPlaceByText?text=${complaint.locName}&language=en`,
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
        setComplaint({ ...complaint, stationName: "", stationAddress: "" });
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
            const submit = await fetch(missingPerson, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data",
                    authorization: `Bearer ${creds.access_token}`
                }
            });
            console.log(await submit.json());
            const token = await fetch(sendNotification, {
                method: "POST",
                body: JSON.stringify({
                    userMessage: "Joi.string().required()"
                }),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    authorization: `Bearer ${creds.access_token}`
                }
            });
            const statusChange = await token.json();
        } catch (err) {
            console.log(err);
        }
    }

    const [isDatePickerVisible, setDatePickerVisibility] = React.useState({
        from: false,
        to: false
    });

    const showDatePicker = (show: string) => {
        if (show === "to") {
            setDatePickerVisibility({ ...isDatePickerVisible, to: true });
        } else {
            setDatePickerVisibility({ ...isDatePickerVisible, from: true });
        }
    };

    const hideDatePicker = (show: string) => {
        if (show === "to") {
            setDatePickerVisibility({ ...isDatePickerVisible, to: false });
        } else {
            setDatePickerVisibility({ ...isDatePickerVisible, from: false });
        }
    };

    const handleConfirmfrom = (date: any) => {
        setComplaint({ ...complaint, dateFrom: date.toString("en-IN") });
        hideDatePicker("from");
    };
    const handleConfirmto = (date: any) => {
        setComplaint({ ...complaint, dateTo: date.toString("en-IN") });
        hideDatePicker("to");
    };

    return (
        <Background>
            <Complaint>
                <MediumText size={18} string="Missing Date Range" />
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center"
                    }}
                >
                    <Button
                        style={{ fontSize: 13, width: "45%" }}
                        btnName={complaint.dateFrom}
                        numberOfLines={1}
                        onPress={() => showDatePicker("from")}
                        bgColor="#FFF"
                        textColor={colors.quatnary}
                    />
                    <LightText string="-" />
                    <Button
                        style={{ fontSize: 13, width: "45%" }}
                        btnName={complaint.dateTo}
                        numberOfLines={1}
                        onPress={() => showDatePicker("to")}
                        bgColor="#FFF"
                        textColor={colors.quatnary}
                    />
                </View>

                <CustomInput
                    placeholder="Name"
                    onChangeText={text => setComplaint({ ...complaint, name: text })}
                />
                <CustomInput
                    placeholder="Father Name"
                    onChangeText={text => setComplaint({ ...complaint, fatherName: text })}
                />
                <CustomInput
                    placeholder="height"
                    onChangeText={text => setComplaint({ ...complaint, height: text })}
                />
                <LightText textalign="center" string="Eg.5-6 feet OR in Cm" />
                <CustomInput
                    placeholder="Expected Age"
                    onChangeText={text => setComplaint({ ...complaint, age: text })}
                />
                <LightText textalign="center" string="Eg.20-25" />
                <CustomInput
                    placeholder="Religion"
                    onChangeText={text => setComplaint({ ...complaint, religion: text })}
                />

                <Text weight="200" color="#FFF">
                    Sex
                </Text>
                <View
                    style={{
                        flexDirection: "row"
                    }}
                >
                    {["Male", "Female", "Other"].map((items, index) => {
                        return (
                            <CheckBox
                                btnName={items}
                                key={index}
                                check={complaint.sex}
                                onPress={() => {
                                    setComplaint({ ...complaint, sex: items });
                                }}
                            />
                        );
                    })}
                </View>

                <CustomInput
                    onChangeText={text => setComplaint({ ...complaint, locName: text })}
                    editable={complaint.locAddress ? false : true}
                    placeholder="Location Name"
                />
                {locationLoading && <PostLoader />}
                {location !== "" && <RegularText string={location} />}
                {location === "" ? (
                    <>
                        <Button
                            btnName={
                                complaint.locAddress ? "Saved Address" : "Check location Address"
                            }
                            onPress={locationAddress}
                        />
                        {complaint.locAddress !== "" && (
                            <Button
                                btnName="Change Address"
                                onPress={() => setComplaint({ ...complaint, locAddress: "" })}
                            />
                        )}
                    </>
                ) : (
                    <Button
                        btnName="Approve Address"
                        onPress={() => {
                            setComplaint({
                                ...complaint,
                                locAddress: location
                            });
                            setLocation("");
                        }}
                    />
                )}

                <Button btnName="Get Near by Police Station" onPress={nearByPoliceStation} />
                {policeLoading && <LocationLoader />}
                {complaint.stationName === "" ? (
                    nearbyStation &&
                    nearbyStation.map((item: any, index) => {
                        return (
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => {
                                    setComplaint({
                                        ...complaint,
                                        stationName: item.name,
                                        stationAddress: item.address
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
                                            item.distance && (item.distance / 1000).toFixed(1)
                                        } KM`}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        );
                    })
                ) : (
                    <Button btnName="Saved Police Station" onPress={nearByPoliceStation} />
                )}
                <RegularText color="#FFF" string="Image of Missing Person" vmargin={8} size={18} />
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
                <DateTimePickerModal
                    isVisible={isDatePickerVisible.from}
                    mode="datetime"
                    onConfirm={handleConfirmfrom}
                    onCancel={() => hideDatePicker("from")}
                />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible.to}
                    mode="datetime"
                    onConfirm={handleConfirmto}
                    onCancel={() => hideDatePicker("to")}
                />
            </Complaint>
        </Background>
    );
}
