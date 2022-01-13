import React from "react";
import {
    Background,
    Button,
    CustomInput,
    ImageInput,
    ImageInputList,
    Text,
    RegularText
} from "@components";
import { TouchableOpacity, ScrollView, FlatList, Image } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./detail.styles";
import { NavigationProps } from "@types";
import { colors } from "@utils";

export function PoliceDetail({ route, navigation }: NavigationProps<"PoliceDetail">) {
    const [imageUris, setImageUris] = React.useState<string[]>([]);

    const handleAdd = (uri: string) => {
        setImageUris([...imageUris, uri]);
    };

    const handleRemove = (uri: string) => {
        setImageUris(imageUris.filter(imageUris => imageUris !== uri));
    };
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
                        <CustomInput placeholder="Adhaar Card No." />
                        <CustomInput placeholder="Pan Card No." />
                        <CustomInput placeholder="Police Id" />
                        <CustomInput placeholder="Posting Area" />
                        <CustomInput placeholder="Station Name" />
                        <CustomInput placeholder="Police Post" />
                        <CustomInput placeholder="DOB" />
                        <CustomInput placeholder="City" />
                        <CustomInput placeholder="Address" />
                        <Text weight="700" color="#FFF">
                            Verification paper
                        </Text>
                        <ImageInputList
                            imageUri={imageUris}
                            onAddImage={handleAdd}
                            onRemoveImage={(uri: string) => handleRemove(uri)}
                        />
                        <Button
                            style={{ backgroundColor: "#281B89" }}
                            btnName="verify"
                            weight="400"
                            onPress={() => navigation.navigate("DetailFilled")}
                        />
                    </ScrollView>
                </View>
            </View>
        </Background>
    );
}
