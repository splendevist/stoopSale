import Link from "next/link";

// meta data

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1>You&apos;re Invited!</h1>
      {/* change to Image tag */}
      <img
        className="h-4/5"
        src="https://static.vecteezy.com/system/resources/previews/021/515/629/original/pigeon-in-flight-on-transparent-background-png.png"
        alt="messenger pigeon"
      />
      {/* Link */}
      <Link href="/invitation" className="border-2 rounded-lg p-2">
        Open Your Invitation
      </Link>
    </main>
  );
}
