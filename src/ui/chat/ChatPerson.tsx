import { IUser } from "types/user.interface";

interface props {
  users: IUser[];
}

const ChatPerson = ({ users }: props) => {
  return (
    <div className="bg-base-secondary rounded-[10px] flex items-center gap-5 p-[30px]">
      <img
        className="w-[50px] h-[50px] rounded-full"
        src={users[0].avatarPath}
        alt=""
      />
      <p className="text-[#CBCBCB]">
        {users[0].firstName} {users[0].secondName}
      </p>
    </div>
  );
};

export default ChatPerson;
