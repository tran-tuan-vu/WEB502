import React, { useState } from "react";

export interface IColorButtonProps {
  label: string;
  color?: string;
  onClick?: () => void;
}

const randomColor = (): string => {
  return (
    "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0")
  );
};

const ColorButton: React.FC<IColorButtonProps> = ({ label, color, onClick }) => {
  const [bg, setBg] = useState<string>(color ?? randomColor());

  const handleClick = () => {
    if (!color) {
      setBg(randomColor()); // chỉ random nếu không truyền color
    }
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: bg,
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginLeft: "100px",
      }}
    >
      {label}
    </button>
  );
};

export default ColorButton;
