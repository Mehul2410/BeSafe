import React, { ReactElement } from "react";
import { AppBootstrap } from "@components";
import Navigator from "@config/Navigator";
import Tabs from "@config/tabnavigator/Tab";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
export default function App(): ReactElement {
    const [login, setLogin] = useState(true);

    return (
        <AppBootstrap>
            {/* {login ? (
                <NavigationContainer>
                    <Tabs />
                </NavigationContainer>
            ) : (
                <Navigator />
            )} */}
            <Navigator />
        </AppBootstrap>
    );
}
