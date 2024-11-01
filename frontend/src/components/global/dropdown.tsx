import React from "react";

type DropdownProps = {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  label?: string;
  onClick?: () => void;
  className?: string;
  items: { label: string; onClick?: () => void }[];
};

const Dropdown: React.FC<DropdownProps> = ({
  iconLeft,
  iconRight,
  label = "Dropdown",
  onClick,
  className = "",
  items,
}) => {
  return (
    <details className={`dropdown ${className}`}>
      <summary className="btn flex items-center gap-2" onClick={onClick}>
        {iconLeft && <span>{iconLeft}</span>}
        <span>{label}</span>
        {iconRight && <span>{iconRight}</span>}
      </summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        {items.map((item, index) => (
          <li key={index}>
            <a onClick={item.onClick}>{item.label}</a>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default Dropdown;
