import { IMessage } from "types/message.interface";
import Message from "../message/Message";

const ChatMessages = ({ messages }: { messages: IMessage[] }) => {
  return (
    <section className="bg-base-secondary flex flex-col gap-5 p-6 rounded-[10px] h-full">
      {messages.length ? (
        messages.map((message) => <Message message={message} />)
      ) : (
        <p className="text-white text-center justify-self-center m-auto">
          Диалог пустой...
        </p>
      )}
    </section>
  );
};

export default ChatMessages;
