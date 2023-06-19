"use Client";
import { CustomeButtonProps } from "@/types";
import React from "react";

const CustomeButton = ({
  title,
  containerStyles,
  handelClick,
  btnType,
}: CustomeButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handelClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomeButton;
