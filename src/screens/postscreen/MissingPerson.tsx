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
import { createPost, sendNotification } from "@contexts/api/client";
import { getCredentials } from "@contexts/store/credentials";
import { colors } from "@utils";
import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export function MissingPerson() {
    const [loading, setLoading] = React.useState(false);
    const [policeLoading, setPoliceLoading] = React.useState(false);
    const [locationLoading, setLocationLoading] = React.useState(false);
    const [imageUris, setImageUris] = React.useState<string[]>([]);
    const [location, setLocation] = React.useState("");
    const [latlng, setlatlng] = React.useState<{ latitude: number; longitude: number }>();
    const [check, setCheck] = React.useState("");
    const [complaint, setComplaint] = React.useState({
        dateForm: "",
        dateTo: "",
        name: "",
        fatherName: "",
        height: "",
        religion: "",
        sex: "",
        locName: "",
        locAddress: "",
        stationName: "",
        stationAddress: ""
    });
    const [nearbyStation, setNearbyStation] = React.useState<[]>();

    const handleAdd = (uri: string) => {
        setImageUris([...imageUris, uri]);
    };

    const handleRemove = (uri: string) => {
        setImageUris(imageUris.filter(imageUris => imageUris !== uri));
    };

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

    function handleLoading() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }
    const [details, setDetails] = React.useState({
        dob: "Date & Time"
    });
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
        setDetails({ ...details, dob: date.toString("en-IN") });
        hideDatePicker();
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
                        btnName={details.dob}
                        numberOfLines={1}
                        onPress={showDatePicker}
                        bgColor="#FFF"
                        textColor={colors.quatnary}
                    />
                    <LightText string="-" />
                    <Button
                        style={{ fontSize: 13, width: "45%" }}
                        btnName={details.dob}
                        numberOfLines={1}
                        onPress={showDatePicker}
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
                <CustomInput placeholder="Expected Age" />
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
                                check={check}
                                onPress={() => setCheck(items)}
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
                    isVisible={isDatePickerVisible}
                    mode="datetime"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </Complaint>
        </Background>
    );
}
