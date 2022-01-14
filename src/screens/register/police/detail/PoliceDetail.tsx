import React from "react";
import { Background, Button, CustomInput, ImageInput, Text, RegularText } from "@components";
import { ScrollView, FlatList, Image } from "react-native";
import { View } from "react-native";
import styles from "./detail.styles";
import { NavigationProps } from "@types";
import { colors } from "@utils";
import { policeDetails, uploadPaper } from "@contexts/api/client";
import { getCredentials } from "@contexts/store/credentials";
import { useDispatch } from "react-redux";
import { userData } from "@contexts/slice/authSlice";

export function PoliceDetail({ route, navigation }: NavigationProps<"PoliceDetail">) {
    const dispatch = useDispatch();
    const [imageUri, setImageUri] = React.useState<string>();
    const [error, setError] = React.useState<string>("");

    const [verificationDetails, setVerificationDetails] = React.useState({
        adhaarCard: "",
        panCard: "",
        policeID: "",
        postingArea: "",
        policePost: "",
        dob: "",
        city: "",
        address: "",
        postingAreaAddress: ""
    });
    const [postingArea, setPostingArea] = React.useState("");

    async function fetchPostingArea() {
        const res = await fetch(
            `https://trueway-places.p.rapidapi.com/FindPlaceByText?text=${verificationDetails.postingArea}&language=en`,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "trueway-places.p.rapidapi.com",
                    "x-rapidapi-key": "4dbe734a50msh60cc149bbe99849p1aefa1jsn434bf0188f79"
                }
            }
        );
        const { results } = await res.json();
        setPostingArea(results[0].address);
    }
    const formData = new FormData();
    formData.append(
        "verification",
        JSON.parse(
            JSON.stringify({
                name: "image",
                uri: imageUri,
                type: "image/jpg"
            })
        )
    );
    async function SubmitForVerification() {
        const creds = await getCredentials();
        if (creds) {
            try {
                const upPaper = await fetch(uploadPaper, {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "multipart/form-data",
                        authorization: `Bearer ${creds.access_token}`
                    }
                });
                const paper = await upPaper.json();
                try {
                    if (paper.success) {
                        const data = {
                            ...verificationDetails,
                            verificationPaper: paper.uri
                        };
                        const res = await fetch(policeDetails, {
                            method: "PUT",
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json",
                                authorization: `Bearer ${creds.access_token}`
                            }
                        });
                        const user = await res.json();
                        if (user.success) {
                            dispatch(userData(user));
                        } else {
                            setError(
                                "Error occured kindly recheck your adhaar,pan or posting area"
                            );
                        }
                    } else {
                        setError("Server Error or Verification Paper was not found");
                    }
                } catch (error) {
                    console.log(error);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <Background>
            <View style={styles.view}>
                <View style={styles.box1}>
                    <Text
                        weight="700"
                        style={{
                            textAlign: "center",
                            color: colors.white
                        }}
                    >
                        Verification Details
                    </Text>
                </View>
                <View style={styles.box2}>
                    <ScrollView>
                        {error !== "" && <RegularText string={error} />}
                        <CustomInput
                            onChangeText={text =>
                                setVerificationDetails({ ...verificationDetails, adhaarCard: text })
                            }
                            placeholder="Adhaar Card No."
                        />
                        <CustomInput
                            onChangeText={text =>
                                setVerificationDetails({ ...verificationDetails, panCard: text })
                            }
                            placeholder="Pan Card No."
                        />
                        <CustomInput
                            onChangeText={text =>
                                setVerificationDetails({ ...verificationDetails, policeID: text })
                            }
                            placeholder="Police Id"
                        />
                        <CustomInput
                            onChangeText={text =>
                                setVerificationDetails({
                                    ...verificationDetails,
                                    postingArea: text
                                })
                            }
                            placeholder="Posting Area"
                        />
                        {postingArea !== "" && <RegularText string={postingArea} />}
                        {postingArea === "" ? (
                            <Button
                                style={{ backgroundColor: "#281B89" }}
                                btnName={
                                    verificationDetails.postingAreaAddress
                                        ? "Saved Address"
                                        : "Check Posting Area Address"
                                }
                                weight="400"
                                onPress={fetchPostingArea}
                            />
                        ) : (
                            <Button
                                style={{ backgroundColor: "#281B89" }}
                                btnName="Approve Address"
                                weight="400"
                                onPress={() => {
                                    setVerificationDetails({
                                        ...verificationDetails,
                                        postingAreaAddress: postingArea
                                    });
                                    setPostingArea("");
                                }}
                            />
                        )}
                        <CustomInput
                            onChangeText={text =>
                                setVerificationDetails({ ...verificationDetails, policePost: text })
                            }
                            placeholder="Police Post"
                        />
                        <CustomInput
                            onChangeText={text => {
                                setVerificationDetails({
                                    ...verificationDetails,
                                    dob: text
                                });
                            }}
                            placeholder="DOB"
                        />
                        <CustomInput
                            onChangeText={text =>
                                setVerificationDetails({ ...verificationDetails, city: text })
                            }
                            placeholder="City"
                        />
                        <CustomInput
                            onChangeText={text =>
                                setVerificationDetails({ ...verificationDetails, address: text })
                            }
                            placeholder="Personal Address"
                        />
                        <Text weight="700" color="#FFF">
                            Verification paper
                        </Text>
                        <ImageInput
                            imageUri={imageUri}
                            onChangeImage={setImageUri}
                            style={{
                                borderRadius: 70,
                                marginBottom: 15
                            }}
                        />
                        <Button
                            style={{ backgroundColor: "#281B89" }}
                            btnName="verify"
                            weight="400"
                            onPress={SubmitForVerification}
                        />
                    </ScrollView>
                </View>
            </View>
        </Background>
    );
}
