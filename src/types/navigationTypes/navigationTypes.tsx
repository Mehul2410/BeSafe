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
    UserProfile: undefined;
    EditProfile: undefined;
    Setting: undefined;
    Help: undefined;
    Post: undefined;
    Complaints: undefined;
    ComplaintGroup: undefined;
    ComplaintsLayout: {
        id?: number;
        date?: string;
        time?: string;
        status?: string;
        text?: string;
    };
};

export type NavigationProps<T extends keyof StackNavigatorParams> = {
    navigation: StackNavigationProp<StackNavigatorParams, T>;
    route: RouteProp<StackNavigatorParams, T>;
};
