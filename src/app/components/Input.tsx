import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface IInput {
  label: string;
  idName: string;
  classNameInput?: string;
}
export const Input = ({
  label,
  type,
  placeholder,
  name,
  idName,
  className,
  classNameInput,
  ...props
}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  IInput) => {
  return (
    <div className={className}>
      <label className="block text-sm font-bold mb-1" htmlFor={idName}>
        {label}
      </label>
      <input
        className={`${classNameInput} w-full rounded-md border-0 py-1 px-2 shadow-sm placeholder:text-gray-200 sm:text-sm sm:leading-6 bg-[#465a7e66]`}
        id={idName}
        name={name}
        type={type}
        placeholder={placeholder}
        {...props}
      ></input>
    </div>
  );
};
