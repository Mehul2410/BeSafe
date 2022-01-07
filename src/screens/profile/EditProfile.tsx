import React, { useState } from "react";
import { Background, CustomInput, Text, Button, ImageUpload } from "@components";
import { View } from "react-native";
import { colors } from "@utils";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { NavigationProps } from "@types";
import { useSelector, RootStateOrAny } from "react-redux";

export function EditProfile({ navigation, route }: NavigationProps<"EditProfile">) {
    const token = useSelector((state: RootStateOrAny) => state.auth.token);
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
                    <ImageUpload navigation={navigation} token={token} />
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
