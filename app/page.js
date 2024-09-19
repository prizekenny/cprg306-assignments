import Link from "next/link";

export default function Home() {
  let linkStyle = "underline text-cyan-600 hover:text-cyan-300;";
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
          <Link href="./week-2" class={linkStyle}>
            Week-2
          </Link>
        </li>
      </ul>
    </main>
  );
}
