import ItemList from "./item-list";

import items from "./item.json";

export default function Page() {
  const initialItems = items.map((item) => {
    return { ...item };
  });
  return (
    <main className="bg-slate-950">
      <h1 className="text-5xl font-bold p-7">Shopping List</h1>
      <ItemList items={initialItems} />
    </main>
  );
}
