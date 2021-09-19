import React, { ReactElement, ReactNode } from "react";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

type AppBootstrapProps = {
    children: ReactNode;
};

export default function AppBootstrap({ children }: AppBootstrapProps): ReactElement {
    const [loaded] = useFonts({
        "Chillax-Medium": require("@assets/fonts/Chillax-Medium.ttf"),
        "Chillax-Regular": require("@assets/fonts/Chillax-Regular.ttf"),
        "Chillax-Bold": require("@assets/fonts/Chillax-Bold.ttf"),
        "Chillax-Light": require("@assets/fonts/Chillax-Light.ttf")
    });
    return loaded ? <>{children}</> : <AppLoading />;
}
