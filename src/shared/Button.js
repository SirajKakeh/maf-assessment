import React from "react";

export default function Button({
  text,
  classNames = "",
  color = "primary",
  onClick,
}) {
  return (
    <button
      className={`btn-${color} ${classNames}`}
      onClick={() => onClick && onClick()}
    >
      {text}
    </button>
  );
}
