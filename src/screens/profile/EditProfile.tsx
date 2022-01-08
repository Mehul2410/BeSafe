import React, { useState } from "react";
import { Background, CustomInput, Text, Button, ImageUpload, ImageInput } from "@components";
import { View } from "react-native";
import { colors } from "@utils";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { NavigationProps } from "@types";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { myDetails, policeDetails, uploadImage } from "@contexts/api/client";
import { getCredentials, isTokenExpired } from "@contexts/store/credentials";
import { userData } from "@contexts/slice/authSlice";

export function EditProfile({ navigation, route }: NavigationProps<"EditProfile">) {
    const [imageUri, setImageUri] = React.useState<string>();
    const dispatch = useDispatch();

    const uploadProfileImage = async () => {
        const formData = new FormData();
        formData.append("profile", {
            name: "image",
            uri: imageUri,
            type: "image/jpg"
        });
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
            console.log(data.url);
        } catch (error) {
            console.log(error);
        }
    };

    async function SubmitEditProfile() {
        try {
            if (imageUri) uploadProfileImage();

            const tokens = await getCredentials();
            // const res = await fetch(policeDetails, {
            //     method: "PUT",
            //     body: JSON.stringify({}),
            //     headers: {
            //         Accept: "application/json",
            //         authorization: `Bearer ${tokens.access_token}`
            //     }
            // });
            // const data = await res.json();
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
                        justifyContent: "space-evenly"
                    }}
                >
                    <ImageInput
                        imageUri={imageUri}
                        onChangeImage={setImageUri}
                        style={{
                            borderRadius: 70
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
