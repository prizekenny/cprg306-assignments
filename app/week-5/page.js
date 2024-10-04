"use client";

import { useState } from "react";
import NewItem from "./new-item";

export default function Page() {
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
  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };
    console.log(item);

    alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };
  return (
    <main className="flex justify-center items-center">
      <form
        className="flex justify-center mt-5 flex-col w-[500px] bg-slate-900 p-5"
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
          <NewItem quantity={quantity} setQuantity={setQuantity} />
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
    </main>
  );
}
