import React, { ReactElement } from "react";
import { AppBootstrap } from "@components";
import Tabs from "@config/tabnavigator/Tab";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import AuthNavigator from "@config/navigations/AuthNavigator";
export default function App(): ReactElement {
    const [login, setLogin] = useState(true);

    return (
        <AppBootstrap>
            <NavigationContainer>{login ? <Tabs /> : <AuthNavigator />}</NavigationContainer>
        </AppBootstrap>
    );
}
