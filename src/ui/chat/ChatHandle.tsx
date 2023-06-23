import { useSelector } from "react-redux";
import ChatMessages from "./ChatMessages";
import { TypeRootState } from "redux/store";
import { useQuery } from "react-query";
import { ChatService } from "services/chat/chat.service";
import { useState } from "react";
import { IMessage } from "types/message.interface";
import { SocketContext } from "SocketContext";
import { useContext, useEffect } from "react";
import ChatPerson from "./ChatPerson";
import { IUser } from "types/user.interface";
import { useAuth } from "hooks/useAuth";

const ChatHandle = () => {
  const selectedChatId = useSelector(
    (state: TypeRootState) => state.chat.selectedChat
  );

  const { user } = useAuth();

  const { data, isLoading, error } = useQuery(
    ["get chats by id", selectedChatId],
    () => ChatService.getChatById(selectedChatId),
    {
      enabled: selectedChatId !== null,
      select: ({ data }) => data,
      onSuccess: (data) => {
        if (data && data.messages) {
          setMessages(data.messages);
          if (data.users.length === 1) setUsers(data.users);
          else
            setUsers([
              ...data.users.filter((userMap: IUser) => user.id !== userMap.id),
            ]);
        }
      },
    }
  );

  const [messages, setMessages] = useState<IMessage[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);

  const socket = useContext(SocketContext);

  useEffect(() => {
    if (socket) {
      const handleNewMessage = (newMessage: IMessage) => {
        if (selectedChatId === newMessage.chatId)
          setMessages((prevMessages) => [...prevMessages, newMessage]);
      };

      // Проверяем, установлена ли подписка
      const hasSubscribed = socket
        .listeners("chat message")
        .includes(handleNewMessage);

      if (!hasSubscribed) {
        socket.on("chat message", handleNewMessage);
      }
    }
  }, [socket, selectedChatId]);

  return (
    <div className="w-full ">
      {data !== undefined ? (
        <div className="flex flex-col gap-5 chat">
          <ChatPerson users={users} />
          <ChatMessages messages={messages} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ChatHandle;
