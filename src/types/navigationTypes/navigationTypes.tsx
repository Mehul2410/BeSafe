import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";

export type StackNavigatorParams = {
    Getstarted: undefined;
    Language: undefined;
    Register: undefined;
    PoliceSignin: undefined;
    PoliceSignup: undefined;
    PoliceDetail: undefined;
    DetailFilled: undefined;
    CitizenSignin: undefined;
    CitizenSignup: undefined;
};

export type LanguageNavigationProps<T extends keyof StackNavigatorParams> = {
    navigation: StackNavigationProp<StackNavigatorParams, T>;
    route: RouteProp<StackNavigatorParams, T>;
};
