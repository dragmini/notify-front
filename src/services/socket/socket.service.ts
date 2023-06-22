import Cookies from "js-cookie";
import { io } from "socket.io-client";

const socketUrl = process.env.REACT_APP_SOCKET_URL;

export const SocketService = {
    initialSocket() {
        const token = Cookies.get('accessToken');
        const socket = io(socketUrl!, {
            query: {
                token: token,
            },
        });

        return {socket: socket}
    }
}