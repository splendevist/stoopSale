import Link from "next/link";

export default function Button({ title, anchor }) {
  return (
    <div
      id="zoom-button"
      className="bg-[url('/button-tape.png')] text-center text-white h-10 w-52 bg-cover bg-no-repeat flex justify-center items-center"
    >
      <Link href={anchor} className="w-full flex justify-center items-center">
        {title}
      </Link>
    </div>
  );
}
