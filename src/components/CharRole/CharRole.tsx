import Text from "../text/Text";
import React, { ReactElement } from "react";
import {
    View,
    Image,
    StyleSheet,
    ImageSourcePropType,
    TouchableWithoutFeedbackProps,
    TouchableWithoutFeedback
} from "react-native";

type charRoleProps = {
    role: string;
    uri: ImageSourcePropType;
} & TouchableWithoutFeedbackProps;

export function CharRole({ role, uri, ...props }: charRoleProps): ReactElement {
    return (
        <View>
            <TouchableWithoutFeedback {...props}>
                <View style={styles.char}>
                    <Image source={uri} style={styles.img} />
                    <Text weight="400" style={styles.text}>
                        {role}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    char: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15
    },
    text: {
        color: "#FFF"
    },
    img: {
        height: 180,
        maxWidth: "80%",
        resizeMode: "contain"
    }
});
