import clsx from "clsx";
import React from "react";
import { type UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label?: string;
  placeholder?: string;
  type: string;
  errorMsg?: string;
  registration?: UseFormRegisterReturn; // 👈 hook form registration
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = ({
  label,
  placeholder,
  type,
  errorMsg,
  className,
  registration,
  ...rest
}: Props) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-gray-500 mb-1 text-[1.2rem]">{label}</label>
      )}
      <input
        type={type}
        className={clsx(
          "border border-gray-300 rounded-[10px] py-2 px-4 text-[20px] mb-1 w-full font-sans box-border",
          errorMsg && "border-red-500",
          className
        )}
        placeholder={placeholder}
        {...registration} // 👈 spread RHF props
        {...rest}
      />
      {errorMsg && <p className="text-red-500 text-sm mt-1">{errorMsg}</p>}
    </div>
  );
};

export default InputField;
