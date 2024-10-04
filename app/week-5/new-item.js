"use client";

import { useState } from "react";

export default function NewItem({ quantity, setQuantity }) {
  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const buttonStyle =
    "bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 w-10 h-8 ml-2 rounded-xl disabled:bg-gray-400";

  return (
    <div className="p-2 bg-white text-black">
      <input type="text" defaultValue={quantity} className="p-1 w-20"></input>
      <button
        type="button"
        onClick={decrement}
        className={buttonStyle}
        disabled={quantity <= 1}
      >
        -
      </button>
      <button
        type="button"
        onClick={increment}
        className={buttonStyle}
        disabled={quantity >= 20}
      >
        +
      </button>
    </div>
  );
}