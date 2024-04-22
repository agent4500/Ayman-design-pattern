import React, { useEffect } from "react";

import { toastType } from "../services/toast";

export default function Toast({ id, variant, text, onClose }: toastType) {
  useEffect(() => {
    setTimeout(() => {
      onClose(id);
    }, 4000);
  });

  // Define a new color palette
  const colors = {
    default: "bg-purple-400",
    confirm: "bg-green-700",
    cancel: "bg-pink-400",
  };

  return (
    <div
      className={`font-sans p-3 relative rounded w-56 text-wrap text-left ${
        variant && colors[variant]
      }`}
    >
      {text}
      <button
        onClick={() => onClose(id)}
        className="absolute right-2 text-white font-bold top-0"
      >
        x
      </button>
    </div>
  );
}
