import React, { useState } from "react";
import { Background, CustomInput, Text, Button, ImageUpload, ImageInput } from "@components";
import { View, ScrollView } from "react-native";
import { colors } from "@utils";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { NavigationProps } from "@types";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { myDetails, policeDetails, uploadImage } from "@contexts/api/client";
import { getCredentials, isTokenExpired } from "@contexts/store/credentials";
import { userData } from "@contexts/slice/authSlice";
import { string } from "yup/lib/locale";

export function EditProfile({ navigation, route }: NavigationProps<"EditProfile">) {
    const [imageUri, setImageUri] = React.useState<string>();
    const [details, setDetails] = React.useState();
    const dispatch = useDispatch();
    const uploadProfileImage = async () => {
        const formData = new FormData();
        formData.append(
            "profile",
            JSON.parse(
                JSON.stringify({
                    name: "image",
                    uri: imageUri,
                    type: "image/jpg"
                })
            )
        );
        try {
            const tokens = await getCredentials();
            const res = await fetch(uploadImage, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data",
                    authorization: `Bearer ${tokens.access_token}`
                }
            });
            const data = await res.json();
            if (!isTokenExpired(tokens.access_token)) {
                const res = await fetch(myDetails, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        authorization: `Bearer ${tokens.access_token}`
                    }
                });
                const user = await res.json();
                dispatch(userData(user));
            }
        } catch (error) {
            console.log(error);
        }
    };

    async function SubmitEditProfile() {
        try {
            if (imageUri) uploadProfileImage();
            const tokens = await getCredentials();
            const res = await fetch(policeDetails, {
                method: "PUT",
                body: JSON.stringify({
                    adharCard: "2202 2525 5151",
                    panCard: "AAAPZ1234C",
                    policeId: "1234",
                    postingArea: {
                        lat: 20220,
                        long: 220200
                    },
                    stationName: "mumbai",
                    policePost: "pnvl",
                    dob: "1-1-1222",
                    address: "bgsuighfiguifhgifikgiohjiojhoi"
                }),
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${tokens.access_token}`
                }
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const [date, setDate] = useState("Date");

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
        setDate(date.toLocaleDateString("en-IN"));
        hideDatePicker();
    };

    return (
        <Background>
            <View
                style={{
                    height: "100%",
                    width: "100%",
                    alignItems: "center",
                    padding: 20,
                    justifyContent: "center"
                }}
            >
                <Button weight="400" btnName="Edit Profile" />
                <View
                    style={{
                        marginTop: 25,
                        alignItems: "center",
                        width: "100%",
                        height: "80%",
                        justifyContent: "center"
                    }}
                >
                    <ScrollView style={{ width: "100%", paddingHorizontal: 10 }}>
                        <ImageInput
                            imageUri={imageUri}
                            onChangeImage={setImageUri}
                            style={{
                                borderRadius: 70,
                                marginBottom: 15
                            }}
                        />
                        {/* <ImageUpload /> */}
                        <Button
                            btnName={date}
                            weight="400"
                            numberOfLines={1}
                            onPress={showDatePicker}
                            bgColor="#FFF"
                            textColor={colors.quatnary}
                        />
                        <CustomInput placeholder="Adharcard or Pancard" />
                        <CustomInput placeholder="Address" />
                        <CustomInput placeholder="Occupation" />
                        <Button btnName="save" onPress={SubmitEditProfile} />
                    </ScrollView>
                </View>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>
        </Background>
    );
}
