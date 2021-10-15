import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";

export type StackNavigatorParams = {
    Home: undefined;
    Getstarted: undefined;
    Language: undefined;
    Register: undefined;
    PoliceSignin: undefined;
    PoliceSignup: undefined;
    PoliceDetail: undefined;
    DetailFilled: undefined;
    CitizenSignin: undefined;
    CitizenSignup: undefined;
    Profile: undefined;
};

export type NavigationProps<T extends keyof StackNavigatorParams> = {
    navigation: StackNavigationProp<StackNavigatorParams, T>;
    route: RouteProp<StackNavigatorParams, T>;
};
