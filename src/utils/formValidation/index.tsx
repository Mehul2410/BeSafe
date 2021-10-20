import * as Yup from "yup";

export const SignInvalidationSchema = Yup.object({
    email: Yup.string().email("Invalid email!").required("email is required"),
    password: Yup.string().trim().min(8, "Password is to short! ").required("Password is required")
});
export const SignUpvalidationSchema = Yup.object({
    name: Yup.string().trim().min(3, "Invalid name").required("Name is required"),
    email: Yup.string().email("Invalid email!").required("email is required"),
    password: Yup.string().trim().min(8, "Password is to short! ").required("Password is required"),
    confirmPassword: Yup.string().equals([Yup.ref("password"), null], "Password does not match!")
});

interface signInInfoProps {
    email: string;
    password: string;
}

export const isValidObjectField = (obj: signInInfoProps): boolean => {
    return Object.values(obj).every(value => value.trim());
};

export const updateError = (
    error: string,
    stateUpdater: React.Dispatch<React.SetStateAction<string>>
): void => {
    stateUpdater(error);
    setTimeout(() => {
        stateUpdater("");
    }, 2500);
};

export const isValidEmail = (value: string): boolean => {
    const regx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    return regx.test(value);
};

// const handleOnChangeText = (value: string, fieldName: string) => {
//     return setSignUpInfo({ ...signUpInfo, [fieldName]: value });
// };

// const isValidForm = () => {
//     if (!isValidObjectField(signUpInfo)) return updateError("Required all fields!", setError);
//     if (!name.trimEnd() || name.length < 3) return updateError("Invalid name!", setError);
//     if (!isValidEmail(email)) return updateError("Invalid Email!", setError);
//     if (!password.trim() || password.length < 8)
//         return updateError("Password is less then 8 characters!", setError);
//     if (confirmPassword !== password) return updateError("Password does not match!", setError);
//     if (toggleCheckBox !== true) return updateError("Kindly agree to continue", setError);
//     return true;
// };
// const submitForm = () => {
//     if (isValidForm() === true) {
//         if (route.params.role == "Police") {
//             console.log(signUpInfo);
//             navigation.navigate("PoliceDetail", route.params);
//         } else {
//             navigation.navigate("SignIn", route.params);
//         }
//     }
// };
