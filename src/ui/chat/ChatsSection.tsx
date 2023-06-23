import { IChat } from "types/chat.interface";
import { useChats } from "hooks/useChats";
import ChatPreview from "./ChatPreview";
import ChatHandle from "./ChatHandle";
import { useUsers } from "hooks/useUsers";
import { IUser } from "types/user.interface";
import { ChatService } from "services/chat/chat.service";
import { useAuth } from "hooks/useAuth";

const ChatsSection = () => {
  const { data, isLoading, error, refetch } = useChats();
  const { usersData, isLoadingUsers, errorUsers } = useUsers();
  const { user } = useAuth();
  let filteredUser = [];

  if (!isLoadingUsers)
    filteredUser = usersData.filter((userMap: IUser) => userMap.id !== user.id);

  const createNewChat = async (id: number | null) => {
    if (id) await ChatService.createChat([id, user.id]);
    else await ChatService.createChat([user.id]);
    refetch();
  };

  return (
    <section className="text-[24px] flex gap-5">
      <div className="flex flex-col min-w-[350px] gap-2 animate-opacity chat">
        <div className="border border-white rounded-[10px] p-5">
          <p className="text-white font-semibold">Список друзей</p>
          <div className="flex flex-col  items-start">
            {!isLoadingUsers
              ? filteredUser.map((userMap: IUser) => (
                  <button
                    className="text-white"
                    onClick={() => createNewChat(userMap.id)}
                    key={userMap.id}
                  >
                    {userMap.firstName} {userMap.secondName}
                  </button>
                ))
              : ""}
            <button className="text-white" onClick={() => createNewChat(null)}>
              Избранное
            </button>
          </div>
        </div>
        <div className="overflow-y-auto flex flex-col gap-2">
          {!isLoading
            ? data.chats.map((chat: IChat) => (
                <ChatPreview chat={chat} key={chat.id} />
              ))
            : "НЕту"}
        </div>
      </div>
      <ChatHandle />
    </section>
  );
};

export default ChatsSection;
