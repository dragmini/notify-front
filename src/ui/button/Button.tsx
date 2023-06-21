import cn from "clsx";
import { Component, FC, PropsWithChildren } from "react";

import { IButton } from "./button.interface";

const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  variant,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cn(
        "rounded-xl font-bold shadow-sm px-8 py-2 hover:shadow-lg transition duration-300 ease-in-out",
        {
          "text-base-secondary bg-blue": variant === "blue",
          "text-blue bg-white": variant === "white",
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
