import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";

export type LanguageRoute = {
    getStarted: undefined;
    Language: undefined;
};

export type LanguageNavigationProps<T extends keyof LanguageRoute> = {
    navigation: StackNavigationProp<LanguageRoute, T>;
    route: RouteProp<LanguageRoute, T>;
};
