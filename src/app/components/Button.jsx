import Link from "next/link";

export default function Button({ title, anchor }) {
  return (
    <Link
      href={anchor}
      className="bg-white rounded-lg py-2 px-10 hover:bg-indigo-500 hover:text-white active:bg-white active:text-black"
    >
      {title}
    </Link>
  );
}
