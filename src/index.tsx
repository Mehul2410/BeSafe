import React, { ReactElement } from "react";
import { AppBootstrap } from "@components";
import Tabs from "@config/tabnavigator/Tab";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "@config/navigations/AuthNavigator";
import { store } from "@contexts/store/store";
import { Provider, RootStateOrAny, useSelector } from "react-redux";

function Navigation(): ReactElement {
    const token = useSelector((state: RootStateOrAny) => state.auth.token);
    return (
        <>
            <NavigationContainer>{token ? <Tabs /> : <AuthNavigator />}</NavigationContainer>
        </>
    );
}

export default function App(): ReactElement {
    // const token = useSelector((state: RootStateOrAny) => state.auth.token);
    // const { auth } = store.getState();

    // console.log(auth);
    return (
        <AppBootstrap>
            <Provider store={store}>
                <Navigation />
                {/* <Navigator /> */}
            </Provider>
        </AppBootstrap>
    );
}
