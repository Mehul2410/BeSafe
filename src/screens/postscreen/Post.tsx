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

export function Post() {
    const [imageUris, setImageUris] = React.useState<string[]>([]);

    const handleAdd = (uri: string) => {
        setImageUris([...imageUris, uri]);
    };

    const handleRemove = (uri: string) => {
        setImageUris(imageUris.filter(imageUris => imageUris !== uri));
    };

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
                        <CustomInput placeholder="Reason of complaint" />
                        <CustomInput placeholder="Location" />
                        <CustomInput placeholder="Situation" />
                        <CustomInput placeholder="Near by" />
                        <CustomInput placeholder="Situation proof" />
                        <RegularText string="Image Proof" />
                        <ImageInputList
                            imageUri={imageUris}
                            onAddImage={handleAdd}
                            onRemoveImage={(uri: string) => handleRemove(uri)}
                        />

                        <CustomInput placeholder="Your nearest police station" />
                        <Button btnName="Submit" style={{ fontSize: 18, marginTop: 6 }} />
                    </ScrollView>
                </View>
            </View>
        </Background>
    );
}
