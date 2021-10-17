import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { ImageSourcePropType } from "react-native";

export type StackNavigatorParams = {
    Home: undefined;
    Getstarted: undefined;
    Language: undefined;
    Register: {
        langauge: string;
    };
    PoliceSignin: undefined;
    PoliceSignup: undefined;
    PoliceDetail: {
        uri: ImageSourcePropType;
        role: string;
    };
    DetailFilled: undefined;
    CitizenSignin: undefined;
    CitizenSignup: undefined;
    SignIn: {
        uri: ImageSourcePropType;
        role: string;
        agree?: string;
    };
    SignUp: {
        uri: ImageSourcePropType;
        role: string;
        agree?: string;
    };
    Profile: undefined;
};

export type NavigationProps<T extends keyof StackNavigatorParams> = {
    navigation: StackNavigationProp<StackNavigatorParams, T>;
    route: RouteProp<StackNavigatorParams, T>;
};
