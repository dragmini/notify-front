import { useActions } from "hooks/useActions";
import AuthLayout from "layout/AuthLayout";
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
    <AuthLayout>
      <button onClick={send}>Auth</button>
    </AuthLayout>
  );
};
