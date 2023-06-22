import { IChat } from "types/chat.interface";
import FavoriteChatImg from "assets/images/favorite-chat.png";
import { changeSelectChat } from "redux/chat/chat.slice";
import { useDispatch, useSelector } from "react-redux";
import { TypeRootState } from "@/redux/store";
import { useTypedSelector } from "hooks/useTypedSelector";
import { IUser } from "types/user.interface";
import { useAuth } from "hooks/useAuth";

const ChatPreview = ({ chat }: { chat: IChat }) => {
  const isFavorite = chat.users.length === 1;
  const dispatch = useDispatch();
  const { user } = useAuth();
  const isSelected =
    useSelector((state: TypeRootState) => state.chat.selectedChat) === chat.id;
  const filteredUsers = chat.users.filter(
    (userMap: IUser) => userMap.id !== user.id
  );

  return (
    <div
      className={
        "rounded-[10px] h-[80px]  cursor-pointer flex p-2 " +
        (isSelected ? "bg-blue" : "bg-base-secondary")
      }
      onClick={() => dispatch(changeSelectChat(chat.id))}
    >
      <div className="flex items-center gap-3">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src={isFavorite ? FavoriteChatImg : filteredUsers[0].avatarPath}
          alt="Favorite Chat"
        />
        <p className="text-light text-[18px] self-start">
          {isFavorite
            ? "Избранное"
            : `${filteredUsers[0].firstName} ${filteredUsers[0].secondName}`}
        </p>
      </div>
    </div>
  );
};

export default ChatPreview;
