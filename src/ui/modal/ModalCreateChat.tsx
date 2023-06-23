import ReactModal from "react-modal";
import { useState } from "react";
import { UserService } from "services/user/user.service";
import { errorCatch } from "api/api.helper";
import { useQuery } from "react-query";

// Стили для модального окна
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  },
  content: {
    backgroundColor: "#002047",
    border: "none",
    borderRadius: "10px",
    padding: "40px",
    maxWidth: "60%",
    maxHeight: "30%",
    margin: "auto",
    color: "#fff",
  },
};

const ModalCreateChat = ({
  isOpen,
  onRequestClose,
}: {
  isOpen: boolean;
  onRequestClose: () => void;
}) => {
  const [inputValue, setInputValue] = useState("");
  const [copyValue, setCopyValue] = useState("");
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>(
    undefined
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    clearTimeout(timeoutId);
    const newTimeoutId = setTimeout(() => {
      setCopyValue(newValue);
    }, 1000); // Задержка 1 секунда
    setTimeoutId(newTimeoutId);
  };

  const {
    data: dataUsers,
    isLoading: isLoadingUsers,
    error,
  } = useQuery(
    ["get users by slug", copyValue],
    () => UserService.searchUserBySlug(inputValue),
    {
      select: ({ data }) => data,
      onError: (error) => {
        console.log(errorCatch(error));
      },
    }
  );

  // Вывод результата поиска здесь

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalStyles}
      closeTimeoutMS={200}
      ariaHideApp={false} // Отключение предупреждения об использовании ariaHideApp
    >
      <input
        className="text-black text-[22px] px-5 w-full h-10 rounded-[10px]"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </ReactModal>
  );
};

export default ModalCreateChat;
