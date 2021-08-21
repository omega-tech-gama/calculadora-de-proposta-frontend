import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  labelName?: string;
};

export const Input = ({ labelName, ...props }: InputProps) => {
  return (
    <div>
      <label className="block font-bold text-gray-500">{labelName}</label>
      <input {...props} />
    </div>
  );
};
