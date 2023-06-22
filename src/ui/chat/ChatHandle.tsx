import { useSelector } from "react-redux";
import ChatMessages from "./ChatMessages";
import { TypeRootState } from "@/redux/store";
import { useQuery } from "react-query";
import { ChatService } from "services/chat/chat.service";

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
    }
  );

  return (
    <div className="w-full ">
      {data !== undefined ? <ChatMessages messages={data.messages} /> : ""}
    </div>
  );
};

export default ChatHandle;
