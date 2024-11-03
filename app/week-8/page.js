"use client";

import { useEffect, useState } from "react";
import ItemList from "./item-list";

import initialItems from "./item.json";
import NewItem from "./new-item";
import IdeaMeals from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(initialItems);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleItemSelect = (name) => {
    name = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );
    setSelectedItemName(name);
  };

  return (
    <main className="bg-slate-950 m-2">
      <h1 className="text-5xl font-bold p-5">Shopping List</h1>
      <div className="flex flex-row">
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div>
          <IdeaMeals ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
