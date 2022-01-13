import React, { ReactElement, useEffect } from "react";
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

function Navigation(): ReactElement {
    const user = useSelector((state: RootStateOrAny) => state.auth);
    console.log(user);
    const dispatch = useDispatch();
    async function data() {
        const data = await getCredentials();
        if (data) {
            dispatch(getTokens(data));
            if (!isTokenExpired(data.access_token)) {
                const res = await fetch(myDetails, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        authorization: `Bearer ${data.access_token}`
                    }
                });
                const user = await res.json();
                dispatch(userData(user));
                //active status to be send from backend to login police
            }
        }
    }

    useEffect(() => {
        data();
    }, []);
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
