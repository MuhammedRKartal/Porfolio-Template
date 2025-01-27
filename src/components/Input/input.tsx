"use client";

import clsx from "clsx";
import { forwardRef, FocusEvent, useState } from "react";

import { InputLabel } from "@/components/Input/input-label";
import { Button } from "@/components/button";
import { InputProps } from "@/components/types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [showValue, setShowValue] = useState(false);

  const {
    id,
    label,
    labelStyle,
    error,
    type,
    required = false,
    disabled = false,
    labelClassName,
    ...rest
  } = props;

  const hasFloatingLabel = label && labelStyle === "floating";
  const hasPlaceholder = label && (labelStyle === "inner" || !labelStyle);
  const isPassword = type && type === "password";

  const inputClass = clsx(
    "bg-transparent text-base w-full  border px-3 h-10 rounded my-[3px] transition duration-200",
    "placeholder:text-white-400", // Removed dark mode style
    "hover:border-outline-100", // Removed dark mode style
    "active:border-outline", // Removed dark mode style
    "focus-visible:outline-none focus:border-outline", // Removed dark mode style
    { "pt-3 h-12": hasFloatingLabel },
    error &&
      "border-error focus:!border-error active:!border-error hover:!border-error !text-error",
    disabled && "pointer-events-none opacity-40",
    props.className
  );

  const inputProps: any = {
    id,
    ref,
    className: inputClass,
    type: type === "password" ? (showValue ? "text" : type) : type,
    onFocus: () => setFocused(true),
    onBlur: (event: FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      setHasValue(!!event.target.value);
    },
  };

  return (
    <>
      <div className="relative flex flex-col transition-all w-full">
        {!hasPlaceholder && (
          <InputLabel
            label={label}
            labelStyle={labelStyle}
            focused={focused}
            hasValue={hasValue}
            required={required}
            disabled={disabled}
            id={id}
            className={labelClassName}
            hasError={error ? true : false}
          />
        )}
        <div className="relative">
          <input
            {...rest}
            {...inputProps}
            placeholder={hasPlaceholder ? `${label} ${required ? "*" : ""}` : ""}
          />
          {isPassword && (
            <Button
              type="button"
              appearance="bright"
              size="xs"
              className="absolute right-0 top-1/2 -translate-y-1/2"
              onClick={() => {
                setShowValue(!showValue);
              }}
            >
              <FontAwesomeIcon
                icon={faEye}
                className={clsx(
                  "text-primary-600", // Removed dark mode style
                  error && "!text-error"
                )}
              />

              {showValue && (
                <span
                  className={clsx(
                    "w-1 h-3/5 absolute top-1/2 left-1/2 bg-primary-600 rounded-xl border-l-2 border-l-black content-[''] -translate-x-1/2 -translate-y-1/2 -rotate-[60deg]",
                    error && "!bg-error"
                  )}
                />
              )}
            </Button>
          )}
        </div>
        {error && <span className="-mt-1 text-sm text-error">{error.message}</span>}
      </div>
    </>
  );
});

Input.displayName = "Input";
