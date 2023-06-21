import { IChat } from "types/chat.interface";
import FavoriteChatImg from "assets/images/favorite-chat.png";
import { changeSelectChat } from "redux/chat/chat.slice";
import { useDispatch, useSelector } from "react-redux";
import { TypeRootState } from "@/redux/store";
import { useTypedSelector } from "hooks/useTypedSelector";

const ChatPreview = ({ chat }: { chat: IChat }) => {
  const isFavorite = chat.users.length === 1;
  const dispatch = useDispatch();
  const isSelected =
    useSelector((state: TypeRootState) => state.chat.selectedChat) === chat.id;

  return (
    <div
      className={
        "h-[80px]  cursor-pointer " +
        (isSelected ? "bg-blue" : "bg-base-secondary")
      }
      onClick={() => dispatch(changeSelectChat(chat.id))}
    >
      <div className="flex">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src={isFavorite ? FavoriteChatImg : ""}
          alt="Favorite Chat"
        />
        <p className="text-light text-[18px]">
          {isFavorite ? "Избранное" : "чат"}
        </p>
      </div>
    </div>
  );
};

export default ChatPreview;
