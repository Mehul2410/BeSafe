import Text from "../text/Text";
import React from "react";
import { colors } from "../../utils/colors/colors";
import { View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import Button from "../Button/Button";
import { uploadImage } from "../../contexts/api/client";

const ImageUpload = ({ navigation, token }) => {
    const [profileImage, setProfileImage] = React.useState("");

    const openImageLibrary = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            alert("Sorry we need camera roll premission to make this work!");
        }
        if (status === "granted") {
            const response = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true
            });
            if (!response.cancelled) {
                setProfileImage(response.uri);
            }
        }
    };
    const uploadProfileImage = async () => {
        const formData = new FormData();
        formData.append("profile", {
            name: "image",
            uri: profileImage,
            type: "image/jpg"
        });

        try {
            const res = await fetch(uploadImage, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data",
                    authorization: `JWT ${token}`
                }
            });
            const data = await res.json();
            console.log(data);
            if (data.success) {
                // navigation.navigate("Profile", { token });
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <View style={{ alignItems: "center" }}>
            <View style={styles.circle}>
                <TouchableOpacity onPress={openImageLibrary}>
                    <Image
                        style={styles.image}
                        source={
                            profileImage ? { uri: profileImage } : require("@assets/smiley.png")
                        }
                    />
                </TouchableOpacity>
            </View>
            <Text style={{ color: colors.tertiary, fontSize: 20 }}>Change Profile Pic</Text>

            {profileImage ? (
                <Button
                    onPress={uploadProfileImage}
                    btnName="Upload"
                    weight="400"
                    style={{
                        backgroundColor: colors.tertiary,
                        paddingHorizontal: 10,
                        marginVertical: 10
                    }}
                />
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120
    },
    circle: {
        borderRadius: 75,
        overflow: "hidden"
    }
});

export default ImageUpload;
