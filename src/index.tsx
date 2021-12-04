import React, { ReactElement } from "react";
import { AppBootstrap } from "@components";
import Tabs from "@config/tabnavigator/Tab";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import AuthNavigator from "@config/navigations/AuthNavigator";
import Navigator from "@config/Navigator";
import { store } from "@contexts/store/store";
import { Provider } from "react-redux";

export default function App(): ReactElement {
    const [login, setLogin] = useState(false);

    return (
        <AppBootstrap>
            <Provider store={store}>
                {login ? (
                    <NavigationContainer>
                        <Tabs />
                    </NavigationContainer>
                ) : (
                    <Navigator />
                )}
                {/* <Navigator /> */}
            </Provider>
        </AppBootstrap>
    );
}
