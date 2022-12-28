import { Inter } from "@next/font/google";
import { FC, InputHTMLAttributes } from "react";

const inter = Inter({});

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  inline?: boolean;
}

export const Input: FC<InputProps> = ({
  name,
  label,
  inline = true,
  ...rest
}) => {
  return (
    <div
      className={`${
        inline ? "flex items-center space-x-3" : "space-y-1 flex flex-col"
      }`}
    >
      <label
        htmlFor={name}
        className={`${inter.className} text-gray-600 font-semibold text-sm capitalize`}
      >
        {label}
      </label>
      <input
        name={name}
        id={name}
        {...rest}
        className={`${inter.className} w-full font-medium px-3 py-2 outline-none border text-gray-700 border-gray-500/25 placeholder-gray-400 rounded-md shadow-md focus:ring ring-blue-500 ring-offset-2 duration-300`}
      />
    </div>
  );
};
