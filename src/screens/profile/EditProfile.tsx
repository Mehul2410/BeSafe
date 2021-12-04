import React, { useState } from "react";
import { Background, CustomInput, Text, Button, ImageUpload } from "@components";
import { View } from "react-native";
import { colors } from "@utils";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { NavigationProps } from "@types";

export function EditProfile({ navigation, route }: NavigationProps<"EditProfile">) {
    console.log("aaa  ", route.params.token);
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
            <View style={{ height: "100%", alignItems: "center" }}>
                <Text
                    weight="400"
                    style={{
                        color: colors.white,
                        fontSize: 24,
                        height: 60,
                        width: 350,
                        backgroundColor: colors.tertiary,
                        textAlign: "center",
                        textAlignVertical: "center",
                        borderRadius: 10
                    }}
                >
                    Edit Profile
                </Text>
                <View style={{ marginTop: 25, alignItems: "center" }}>
                    <ImageUpload navigation={navigation} token={route.params.token} />
                    <Button
                        btnName={date}
                        weight="400"
                        numberOfLines={1}
                        onPress={showDatePicker}
                        style={{
                            backgroundColor: "#FFF",
                            color: colors.quatnary,
                            height: 53,
                            width: 350,
                            borderRadius: 10,
                            fontSize: 18,
                            marginVertical: 12
                        }}
                    />

                    <CustomInput
                        placeholder="Adharcard or Pancard"
                        style={{ height: 53, width: 350, borderRadius: 10 }}
                    />
                    <CustomInput
                        placeholder="Address "
                        style={{ height: 53, width: 350, borderRadius: 10 }}
                    />
                    <CustomInput
                        placeholder="Occupation"
                        style={{ height: 53, width: 350, borderRadius: 10 }}
                    />
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
