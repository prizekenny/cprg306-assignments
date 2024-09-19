export default function Item({ name, quantity, category }) {
  return (
    <li className="list-none bg-blue-950 text-white w-64 m-3 p-2">
      <p className="text-2xl font-bold">{name}</p>
      <p>
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
