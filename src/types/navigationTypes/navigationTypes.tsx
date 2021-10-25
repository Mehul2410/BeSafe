import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { ImageSourcePropType } from "react-native";

export type StackNavigatorParams = {
    Home: {
        user: {
            _id: string;
            name: string;
            email: string;
            password: string;
            __v: number;
            avatar: string;
        };
        success: boolean;
        token: string;
    };
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
    Profile: {
        token: string;
    };
    EditProfile: {
        token: string;
    };
    Setting: undefined;
    Post: undefined;
    Complaints: undefined;
    ComplaintGroup: undefined;
};

export type NavigationProps<T extends keyof StackNavigatorParams> = {
    navigation: StackNavigationProp<StackNavigatorParams, T>;
    route: RouteProp<StackNavigatorParams, T>;
};
