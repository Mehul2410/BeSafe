import { io } from "socket.io-client";

let socket;

export const initiateSocketConnection = () => {
    socket = io("https://besaferestapi.herokuapp.com");
    console.log(`Connecting socket...`);
};

export const disconnectSocket = () => {
    console.log("Disconnecting socket...");
    if (socket) socket.disconnect();
};

export const subscribeToChat = cb => {
    socket.on("statusUpdated", msg => {
        return cb(null, msg);
    });
};
export const AllComplaints = cb => {
    socket.on("getComplaints", msg => {
        return cb(null, msg);
    });
};
export const AllMSLF = cb => {
    socket.on("getmslf", msg => {
        return cb(null, msg);
    });
};
export const AllMissingPerson = cb => {
    socket.on("getMissingPerson", msg => {
        return cb(null, msg);
    });
};
export const AllUnIdPerson = cb => {
    socket.on("getUnIdPerson", msg => {
        return cb(null, msg);
    });
};
