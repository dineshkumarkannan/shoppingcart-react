import React from "react";

interface ButtonProps {
  id?: string;
  type?: "button" | "submit" | "reset";
  width?: string;
  variant?: "fill" | "outline" | "text";
  sentiment?: "info" | "neutral";
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  id,
  type = "button",
  width = "auto",
  variant = "fill",
  sentiment = "info",
  children,
}) => {
  const variantSentiment: Record<string, string> = {
    "fill-info":
      "bg-(--primary-color) text-(--secondary-color) rounded-sm hover:bg-(--primary-color-light)",
    "fill-neutral": "bg-gray-300 text-black rounded-sm hover:bg-gray-100",
    "outline-info":
      "border border-(--primary-color) text-(--primary-color) rounded-sm hover:opacity-50",
    "outline-neutral":
      "border border-gray-300 text-black rounded-sm hover:opacity-50",
    "text-info": "text-(--primary-color) hover:underline",
    "text-neutral": "text-black hover:underline",
  };

  const className = `${
    variantSentiment[`${variant}-${sentiment}`]
  } w-[${width}] px-12 py-4 text-base hover:cursor-pointer`;

  return (
    <button id={id} type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
