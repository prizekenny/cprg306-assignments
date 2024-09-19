import Link from "next/link";

export default function StudentInfo() {
  let linkStyle = "underline text-cyan-600 hover:text-cyan-300;";
  let name = "Kenny Li";
  let githubLink = "https://github.com/prizekenny/cprg306-assignments";
  return (
    <div>
      <p>Name: {name}</p>
      <p>
        Github Link:{" "}
        <Link href={githubLink} className={linkStyle}>
          {githubLink}
        </Link>
      </p>
    </div>
  );
}
