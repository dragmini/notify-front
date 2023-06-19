import { useActions } from "hooks/useActions";
import { useState } from "react";

export const AuthScreen = () => {
  const { login, register } = useActions();
  const [type, setType] = useState<"login" | "register">("login");

  const send = () => {
    login({
      email: "belyaev@test.ru",
      password: "Linkoln228",
    });
  };

  return (
    <div>
      <button onClick={send}>Auth</button>
    </div>
  );
};
