import React from "react";

type InputProps = {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
};

const Input: React.FC<InputProps> = ({
  iconLeft,
  iconRight,
  placeholder = "",
  label,
  value,
  onChange,
  className = "",
  type = "text",
}) => {
  return (
    <div className={`form-control ${className}`}>
      {label && <label className="label">{label}</label>}
      <div className="relative flex items-center">
        {iconLeft && <span className="absolute left-2">{iconLeft}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`input w-full pl-${
            iconLeft ? "10" : "3"
          } pr-${iconRight ? "10" : "3"}`}
        />
        {iconRight && <span className="absolute right-2">{iconRight}</span>}
      </div>
    </div>
  );
};

export default Input;
