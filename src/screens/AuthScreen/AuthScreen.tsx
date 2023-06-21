import { IEmailPassword } from "@/redux/user/user.interface";
import ShellForm from "../../ui/ShellForm";
import { useActions } from "hooks/useActions";
import AuthLayout from "layout/AuthLayout";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Field from "../../ui/input/Field";
import { validEmail } from "../../utils/validations/valid-email";
import Button from "../../ui/button/Button";
import { useAuthRedirect } from "./useAuthRedirect";

export const AuthScreen = () => {
  useAuthRedirect();

  const { login, register } = useActions();
  const [type, setType] = useState<"login" | "register">("login");

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IEmailPassword>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
    if (type === "login") login(data);
    else register(data);

    reset();
  };

  return (
    <AuthLayout>
      <ShellForm>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-white  font-semibold text-[28px] text-center">
            {type === "login" ? "Авторизация" : "Регистрация"}
          </h1>
          <Field
            {...formRegister("email", {
              required: "Email is required",
              pattern: {
                value: validEmail,
                message: "Please enter a valid email address",
              },
            })}
            placeholder="Email"
            error={errors.email?.message}
          />

          <Field
            {...formRegister("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Min length should more 6 symbols",
              },
            })}
            type="password"
            placeholder="Password"
            error={errors.password?.message}
          />
          <div className="flex justify-center mt-8">
            <Button type="submit" variant="blue" className="">
              {type === "login" ? "Войти" : "Зарегистрироваться"}
            </Button>
          </div>
          <p className="text-white text-center mt-4">
            {type === "login" ? "Нету аккаунта?" : "Есть аккаунт?"}{" "}
            <span
              onClick={() => setType(type === "login" ? "register" : "login")}
              className="text-blue cursor-pointer hover:text-[#FF4F57] hover:animate-opacity"
            >
              {type === "login" ? "Зарегистрироваться" : "Войти"}{" "}
            </span>
          </p>
        </form>
      </ShellForm>
    </AuthLayout>
  );
};
