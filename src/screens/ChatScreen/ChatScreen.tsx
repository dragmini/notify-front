import { SocketService } from "services/socket/socket.service";
import { useAuthRedirect } from "../AuthScreen/useAuthRedirect";
import ChatsSection from "ui/chat/ChatsSection";

export const ChatScreen = () => {
  useAuthRedirect();
  const { socket } = SocketService.initialSocket();

  socket.on("connect", () => {
    console.log("Socket connected");
  });

  return <ChatsSection />;
};
