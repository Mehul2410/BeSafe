import React, { useEffect } from "react";
import { Background, Text } from "@components";
import { Image, View } from "react-native";
import { NavigationProps } from "@types";

export function DetailFilled({ navigation }: NavigationProps<"DetailFilled">) {
    function validSubmission() {
        navigation.navigate("Home", {
            success: true,
            user: {
                _id: "617181ff4ab814bdab08f862",
                name: "mehulgawhale",
                email: "mehulgawhale123@gmail.com",
                password: "$2b$08$NSaRdfSqbx3fPQB39TbFEeCXZiODhdbjAYtprdzKC50nWR0AIbhf.",
                __v: 0,
                avatar: "http://res.cloudinary.com/mehulsafecould/image/upload/v1635180637/617181ff4ab814bdab08f862_profile.jpg"
            },
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTcxODFmZjRhYjgxNGJkYWIwOGY4NjIiLCJpYXQiOjE2MzUxODI1NzEsImV4cCI6MTYzNTI2ODk3MX0.lqlxjVQgtNa7OhBgU3qwvuKoimxlVl6bO3ulevKe9Cc"
        });
    }
    setTimeout(validSubmission, 3000);
    return (
        <Background>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    padding: 20
                }}
            >
                <Text weight="700" style={{ color: "#FFF", textAlign: "center" }}>
                    You have sucessfully applied for the verification process.
                </Text>
                <Image style={{ marginVertical: 25 }} source={require("@assets/yayee.png")} />
                <Text weight="200" style={{ color: "#FFF", textAlign: "center" }}>
                    You will recieve the verification mail within 2-3 working days
                </Text>
            </View>
        </Background>
    );
}
