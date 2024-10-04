import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-slate-950">
      <h1 className="text-5xl">ShoppingList</h1>
      <ItemList />
    </main>
  );
}
