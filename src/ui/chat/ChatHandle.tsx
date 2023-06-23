import { useSelector } from "react-redux";
import ChatMessages from "./ChatMessages";
import { TypeRootState } from "redux/store";
import { useQuery } from "react-query";
import { ChatService } from "services/chat/chat.service";
import { useState } from "react";
import { IMessage } from "types/message.interface";
import { SocketContext } from "SocketContext";
import React, { useContext, useEffect } from "react";

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

  const socket = useContext(SocketContext);

  useEffect(() => {
    if (socket) {
      const handleNewMessage = (newMessage: IMessage) => {
        // console.log(selectedChatId, newMessage.chatId);
        console.log(selectedChatId);
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
      {data !== undefined ? <ChatMessages messages={messages} /> : ""}
    </div>
  );
};

export default ChatHandle;
