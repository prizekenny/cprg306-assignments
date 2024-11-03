"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const categories = [
    "Produce",
    "Dairy",
    "Bakery",
    "Meat",
    "Frozen Foods",
    "Canned Goods",
    "Dry Goods",
    "Beverages",
    "Snacks",
    "Household",
    "Other",
  ];

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const handleQuantityChange = (e) => {
    let qty = e.target.value;
    if (qty <= 1) qty = 1;
    if (qty >= 20) qty = 20;
    setQuantity(qty);
  };

  function generateRandomString(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      id: generateRandomString(19),
      name: name,
      quantity: quantity,
      category: category,
    };
    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const buttonStyle =
    "bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 w-10 h-8 ml-2 rounded-xl disabled:bg-gray-400";

  return (
    <form
      className="flex justify-center mt-5 flex-col w-[500px] bg-slate-900 p-2 m-10"
      onSubmit={handleSubmit}
    >
      <input
        value={name}
        placeholder="Item name"
        className="text-black mb-5 text-2xl h-14 rounded-lg p-2"
        onChange={(event) => setName(event.target.value)}
        required
      ></input>
      <div className="flex">
        <div className="p-2 bg-white text-black">
          <input
            type="text"
            value={quantity}
            className="p-1 w-20"
            onChange={handleQuantityChange}
          ></input>
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

        <select
          className="w-40 text-black ml-auto rounded-lg pl-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>
            Category
          </option>
          {categories.map((category) => {
            return (
              <option value={category.toLowerCase()} key={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 active:outline-none active:ring-2 active:ring-blue-400 active:ring-opacity-75 h-12 mt-5 rounded-xl disabled:bg-gray-400"
      >
        +
      </button>
    </form>
  );
}
