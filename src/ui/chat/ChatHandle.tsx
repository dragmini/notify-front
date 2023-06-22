import { useSelector } from "react-redux";
import ChatMessages from "./ChatMessages";
import { TypeRootState } from "@/redux/store";
import { useQuery } from "react-query";
import { ChatService } from "services/chat/chat.service";
import { useState } from "react";
import { SocketService } from "services/socket/socket.service";
import { IMessage } from "types/message.interface";

const ChatHandle = () => {
  const selectedChatId = useSelector(
    (state: TypeRootState) => state.chat.selectedChat
  );

  const { data, isLoading, error } = useQuery(
    ["get chats by id", selectedChatId],
    () => ChatService.getChatById(selectedChatId),
    {
      enabled: selectedChatId !== null,
      select: ({ data }) => data,
      onSuccess: (data) => {
        if (data && data.messages) {
          setMessages(data.messages);
        }
      },
    }
  );

  const [messages, setMessages] = useState<IMessage[]>([]);

  const { socket } = SocketService.initialSocket();

  socket.on("chat message", (newMessage: IMessage) => {
    setMessages([...messages, newMessage]);
  });

  return (
    <div className="w-full ">
      {data !== undefined ? <ChatMessages messages={messages} /> : ""}
    </div>
  );
};

export default ChatHandle;
