import React from "react";

type ButtonProps = {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  label?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  iconLeft,
  iconRight,
  label,
  type = "button",
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn flex items-center border-none gap-2 ${className}`}
    >
      {iconLeft && <span>{iconLeft}</span>}
      {label && <span>{label}</span>}
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
};

export default Button;
