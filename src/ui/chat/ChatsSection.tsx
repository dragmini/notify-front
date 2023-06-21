import { IChat } from "types/chat.interface";
import { useChats } from "hooks/useChats";
import ChatPreview from "./ChatPreview";

const ChatsSection = () => {
  const { data, isLoading, error } = useChats();

  return (
    <section className="text-[24px]">
      <div className="flex flex-col gap-[2px] w-[250px]">
        {!isLoading
          ? data.chats.map((chat: IChat) => (
              <ChatPreview chat={chat} key={chat.id} />
            ))
          : "НЕту"}
      </div>
    </section>
  );
};

export default ChatsSection;
