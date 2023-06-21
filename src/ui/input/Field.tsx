import cn from "clsx";
import { forwardRef } from "react";

import { IField } from "./field.interface";

const Field = forwardRef<HTMLInputElement, IField>(
  (
    {
      label,
      placeholder,
      error,
      className,
      type = "text",
      style,
      Icon,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={cn("mb-4", className)} style={style}>
        <label className="flex flex-col">
          <span className="mb-1 block">
            {Icon && <Icon className="mr-3" />}
            {label || placeholder}
          </span>
          <input
            ref={ref}
            type={type}
            {...rest}
            placeholder={placeholder}
            className={cn(
              "px-4 py-2 outline-none border border-gray border-solid focus:border-primary transition-all placeholder:text-gray rounded-lg",
              {
                "border-red": !!error,
              }
            )}
            w-full
            outline-none
          />
        </label>
        {error && <div className="text-red mt-1 text-sm">{error}</div>}
      </div>
    );
  }
);

Field.displayName = "Field"; //?

export default Field;
