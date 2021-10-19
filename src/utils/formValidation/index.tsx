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
