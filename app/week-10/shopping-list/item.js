export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="list-none bg-slate-900 hover:bg-orange-600 w-[30rem] m-5 p-2"
      onClick={() => onSelect(name)}
    >
      <p className="text-2xl font-bold">{name}</p>
      <p>
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
