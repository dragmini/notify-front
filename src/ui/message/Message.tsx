import { useAuth } from "hooks/useAuth";
import moment from "moment";
import { IMessage } from "types/message.interface";

const Message = ({ message }: { message: IMessage }) => {
  const { user } = useAuth();
  const isSelf = user.id === message.user.id;
  const formattedDate = moment(message.createdAt).format("HH:mm");

  return (
    <div className="animate-opacity flex flex-col gap-[6px]">
      <div className="flex justify-end gap-8">
        <p className="bg-base rounded-[5px] p-[10px] text-white text-[16px] flex items-center min-w-[20%]">
          {message.content}
        </p>
        <img
          className="w-[50px] rounded-full items-start"
          src={message.user.avatarPath}
          alt=""
        />
      </div>
      <p className="text-white text-[12px] text-end relative right-[82px]">
        {formattedDate}
      </p>
    </div>
  );
};

export default Message;
