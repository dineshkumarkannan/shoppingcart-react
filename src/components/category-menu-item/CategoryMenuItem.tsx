import React from "react";
import phone from "../../assets/phone-svgrepo-com.svg";

interface CategoryMenuItemProps {
  id?: string;
  img?: string;
  text?: string;
  children?: React.ReactNode;
}

const CategoryMenuItem: React.FC<CategoryMenuItemProps> = ({
  id,
  img,
  text,
}) => {
  return (
    <div
      id={id || ""}
      className="w-[170px] h-[145px] border-1 border-gray-500/50 text-base rounded-sm flex-row justify-items-center content-center 
        hover:bg-(--primary-color) hover:text-white hover:cursor-pointer hover:border-0"
    >
      <img className="w-20 h-20" src={img || phone} alt="category" />
      <>{text || "Phone"}</>
    </div>
  );
};

export default CategoryMenuItem;
