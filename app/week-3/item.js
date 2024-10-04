export default function Item({ name, quantity, category }) {
  return (
    <li className="list-none bg-slate-900 w-80 m-3 p-2">
      <p className="text-2xl font-bold">{name}</p>
      <p>
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
