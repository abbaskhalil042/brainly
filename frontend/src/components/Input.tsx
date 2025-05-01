import React from "react";
interface InputProps {
  placeholder: string;
  onChange?: () => void;
  type: string;
  ref?: React.Ref<HTMLInputElement>;}
const Input = ({ placeholder, onChange, type, ref }: InputProps) => {
  return (
    <input
      type={type}
      ref={ref}
      className="p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
