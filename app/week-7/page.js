"use client";

import { useEffect, useState } from "react";
import ItemList from "./item-list";

import initialItems from "./item.json";
import NewItem from "./new-item";

export default function Page() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <main className="bg-slate-950 m-2">
      <h1 className="text-5xl font-bold p-5">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
