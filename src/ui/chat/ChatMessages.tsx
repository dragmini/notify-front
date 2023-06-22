import { IMessage } from "types/message.interface";
import Message from "../message/Message";
import ChatField from "../input/ChatFiled";
import Button from "../button/Button";
import { BiMessageSquareEdit } from "react-icons/bi";
import { IMessageSend } from "types/chat.interface";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { TypeRootState } from "redux/store";
import { SocketContext } from "SocketContext";
import React, { useContext } from "react";

const ChatMessages = ({ messages }: { messages: IMessage[] }) => {
  const {
    register: chatMessage,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IMessageSend>({
    mode: "onChange",
  });

  const chatId: number = useSelector(
    (state: TypeRootState) => state.chat.selectedChat
  );
  const socket = useContext(SocketContext);

  const onSubmit: SubmitHandler<IMessageSend> = (data) => {
    if (socket) {
      socket.emit("chat message", { ...data, chatId: chatId });
    }

    reset();
  };

  return (
    <section className="bg-base-secondary flex flex-col gap-5 p-6 rounded-[10px] h-full">
      {messages.length ? (
        messages.map((message) => <Message message={message} />)
      ) : (
        <p className="text-white text-center justify-self-center m-auto">
          Диалог пустой...
        </p>
      )}
      <form
        className="flex items-center gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ChatField
          placeholder="Введите сообщение"
          className="w-full"
          {...chatMessage("content", {
            required: "Content is required",
            minLength: {
              value: 1,
              message: "Min length should more 1 symbols",
            },
          })}
          error={errors.content?.message}
        />
        <Button variant="blue">
          <BiMessageSquareEdit className="" />
        </Button>
      </form>
    </section>
  );
};

export default ChatMessages;
