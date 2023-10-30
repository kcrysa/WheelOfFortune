import React, { CSSProperties, FC } from "react";

interface IconProps {
  iconStyle?: CSSProperties | undefined;
}

export const CloseIcon: FC<IconProps> = ({ iconStyle }) => {
  return (
    <svg
      width="37"
      height="36"
      viewBox="0 0 37 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="customIcon"
      style={iconStyle}
    >
      <path
        d="M8.44141 27.75L27.9414 8.25M27.9414 27.75L8.44141 8.25"
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};