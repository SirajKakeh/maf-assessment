import React from "react";

export default function Button({ text, color = "primary" }) {
  return <button className={`btn-${color}`}>{text}</button>;
}
