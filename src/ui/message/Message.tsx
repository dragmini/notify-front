import { useAuth } from "hooks/useAuth";
import moment from "moment";
import { IMessage } from "types/message.interface";

const Message = ({ message }: { message: IMessage }) => {
  const { user } = useAuth();
  const isSelf = user.id === message.user.id;
  const formattedDate = moment(message.createdAt).format("HH:mm");

  return (
    <div className={"animate-opacity flex gap-[6px] flex-col"}>
      <div
        className={
          "flex gap-8 justify-end " + (isSelf ? "" : " flex-row-reverse")
        }
      >
        <p
          className={
            "max-w-[60%] whitespace-pre-line break-all rounded-[5px] p-[10px] text-white text-[16px] flex items-center min-w-[20%] " +
            (isSelf ? " bg-base" : "border-[2px] border-blue rounded-[10px]")
          }
        >
          {message.content}
        </p>
        <img
          className="w-[50px] h-[50px] rounded-full items-start"
          src={message.user.avatarPath}
          alt=""
        />
      </div>
      <p
        className={
          "text-[#CBCBCB] text-[12px] relative " +
          (isSelf ? "right-[82px] text-end" : "left-[82px]")
        }
      >
        {formattedDate}
      </p>
    </div>
  );
};

export default Message;
