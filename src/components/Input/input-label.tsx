import React from "react";
import { InputLabelProps } from "@/components/types";
import { twMerge } from "tailwind-merge";

export const InputLabel: React.FC<InputLabelProps> = ({
  label,
  labelStyle,
  focused,
  hasValue,
  required,
  disabled,
  id,
  className,
  hasError,
}) => {
  const floating = labelStyle === "floating";
  const outer = labelStyle === "outer";

  return (
    <label
      htmlFor={id}
      className={twMerge(
        "text-base leading-[1] text-white-400 transition-all duration-900",
        disabled && "opacity-40 pointer-events-none",
        floating && "absolute left-3 pointer-events-none transform",
        floating && !(focused || hasValue) && "-translate-y-[-20px]",
        outer && "mb-1",
        floating && (focused || hasValue) && "-translate-y-[-12px] !text-[9px]",
        outer && !(focused || hasValue) && "top-1/3",
        hasError && "text-error",
        className
      )}
    >
      {label}{" "}
      {required && <span className={twMerge("text-primary", hasError ? "text-error" : "")}>*</span>}
    </label>
  );
};
