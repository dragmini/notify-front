import { useAuthRedirect } from "../AuthScreen/useAuthRedirect";
import ChatsSection from "ui/chat/ChatsSection";

export const ChatScreen = () => {
  useAuthRedirect();

  return <ChatsSection />;
};
