import React, { ReactElement } from "react";
import { AppBootstrap } from "@components";
import Tabs from "@config/tabnavigator/Tab";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import AuthNavigator from "@config/navigations/AuthNavigator";
import Navigator from "@config/Navigator";
export default function App(): ReactElement {
    const [login, setLogin] = useState(false);

    return (
        <AppBootstrap>
            {login ? (
                <NavigationContainer>
                    <Tabs />
                </NavigationContainer>
            ) : (
                <Navigator />
            )}
            {/* <Navigator /> */}
        </AppBootstrap>
    );
}
