"use client";

import { useCallback, useEffect, useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  const [sortedItems, setSortedItems] = useState(items);

  // Add useCallback to prevent infinite loop
  const handleSort = useCallback(
    (sortType) => {
      setSortBy(sortType);
      let sorted = [...items];
      if (sortType === "name") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortType === "category") {
        sorted.sort((a, b) => a.category.localeCompare(b.category));
      } else if (sortType == "group by category") {
        setSortedItems(groupByCategory(items));
        return;
      }

      setSortedItems(sorted);
    },
    [items]
  );

  // Items don't rerender when items from props changing, so we need to add useEffect to monitor.
  useEffect(() => {
    handleSort(sortBy);
  }, [items, sortBy, handleSort]);

  const groupByCategory = (items) => {
    return items.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
  };
  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="m-5">
      <div className="flex items-center">
        <h2 className="text-xl mr-5">Sort By:</h2>
        <button
          onClick={() => handleSort("name")}
          className={`${
            sortBy === "name" ? "bg-orange-400" : "bg-orange-700"
          } text-white px-5 py-2 mr-5`}
        >
          Name
        </button>
        <button
          onClick={() => handleSort("category")}
          className={`${
            sortBy === "category" ? "bg-orange-400" : "bg-orange-700"
          } text-white px-5 py-2 mr-5`}
        >
          Category
        </button>

        <button
          onClick={() => handleSort("group by category")}
          className={`${
            sortBy === "group by category" ? "bg-orange-400" : "bg-orange-700"
          } text-white px-5 py-2 mr-5`}
        >
          Group By Category
        </button>
      </div>
      {sortBy === "group by category"
        ? Object.keys(sortedItems).map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mt-5">
                {capitalizeWords(category)}
              </h3>
              <ul>
                {sortedItems[category].map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </ul>
            </div>
          ))
        : sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
    </div>
  );
}
