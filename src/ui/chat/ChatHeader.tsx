import { IUser } from "types/user.interface";
import Button from "../button/Button";
import { AiOutlinePlus } from "react-icons/ai";
import ReactModal from "react-modal";
import { useState } from "react";
import ModalCreateChat from "ui/modal/ModalCreateChat";

interface props {
  user: IUser;
}

const ChatHeader = ({ user }: props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 9999,
    },
    content: {
      backgroundColor: "#333",
      border: "none",
      borderRadius: "4px",
      padding: "20px",
      maxWidth: "400px",
      margin: "0 auto",
      color: "#fff",
    },
  };

  return (
    <>
      <header className="flex justify-between w-full">
        <p className="text-white font-semibold text-[48px]">Чаты</p>
        <div className="flex gap-10">
          <Button
            variant="blue"
            className="flex items-center gap-2"
            onClick={openModal}
          >
            <AiOutlinePlus />
            Чат
          </Button>
          <div className="flex items-center gap-5">
            <img
              className="w-[60px] h-[60px] rounded-full"
              src={user.avatarPath}
              alt=""
            />
            <p className="text-white">
              {user.firstName} {user.secondName}
            </p>
          </div>
        </div>
      </header>
      <ModalCreateChat isOpen={isOpen} onRequestClose={closeModal} />
    </>
  );
};

export default ChatHeader;
