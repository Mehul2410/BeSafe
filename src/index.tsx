import React, { ReactElement } from "react";
import { AppBootstrap } from "@components";
import Tabs from "@config/tabnavigator/Tab";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "@config/navigations/AuthNavigator";
import { store } from "@contexts/store/store";
import { Provider, RootStateOrAny, useSelector } from "react-redux";
import { getCredentials, isTokenExpired } from "@contexts/store/credentials";
import { useDispatch } from "react-redux";
import { getTokens, userData } from "@contexts/slice/authSlice";
import { myDetails } from "@contexts/api/client";
import PoliceNavigation from "@config/tabnavigator/PoliceNavigation";
import useSWR from "swr";
import { Image, View } from "react-native";

function Navigation(): ReactElement {
    const dispatch = useDispatch();
    async function getData() {
        const creds = await getCredentials();
        if (creds) {
            const res = await fetch(myDetails, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    authorization: `Bearer ${creds.access_token}`
                }
            });
            const user = await res.json();
            return { creds, user };
        }
    }
    const { data, error } = useSWR("operator_key", getData);
    if (data) {
        dispatch(getTokens(data.creds));
        dispatch(userData(data.user));
    }
    const user = useSelector((state: RootStateOrAny) => state.auth);
    return (
        <>
            <NavigationContainer>
                {user.token ? (
                    user.active === false ? (
                        <PoliceNavigation />
                    ) : (
                        <Tabs />
                    )
                ) : (
                    <AuthNavigator />
                )}
            </NavigationContainer>
        </>
    );
}

export default function App(): ReactElement {
    return (
        <AppBootstrap>
            <Provider store={store}>
                <Navigation />
                {/* <Navigator /> */}
            </Provider>
        </AppBootstrap>
    );
}
