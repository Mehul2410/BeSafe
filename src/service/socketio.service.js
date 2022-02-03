import { io } from "socket.io-client";

let socket;

export const initiateSocketConnection = cb => {
    socket = io("https://besaferestapi.herokuapp.com");
    socket.on("connect", () => {
        console.log(`Connecting socket...`);
        return cb(socket.connected);
    });
};

export const disconnectSocket = () => {
    console.log("Disconnecting socket...");
    if (socket) socket.disconnect();
};
export const closeSocket = () => {
    console.log("close socket...");
    if (socket) socket.close();
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
export const ComplaintsHistory = cb => {
    socket.on("ComplaintsHistory", msg => {
        return cb(null, msg);
    });
};
export const MISSINGPersonHistory = cb => {
    console.log("fetching");
    socket.on("missingPersonHistory", msg => {
        return cb(null, msg);
    });
};
export const MSLFHistory = cb => {
    socket.on("mslfHistory", msg => {
        return cb(null, msg);
    });
};
export const UnIdPersonHistory = cb => {
    socket.on("UnIdPersonHistory", msg => {
        return cb(null, msg);
    });
};
