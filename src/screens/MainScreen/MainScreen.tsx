import { useChats } from "../../hooks/useChats";
import { useAuthRedirect } from "../AuthScreen/useAuthRedirect";

export const MainScreen = () => {
  useAuthRedirect();

  // const { chats, isLoading, error } = useChats();

  // console.log(chats);

  return <div className="text-[24px]">Main Page</div>;
};
