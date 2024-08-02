import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-screen h-screen">
      <section className="w-full flex flex-col items-center justify-center h-screen">
        <div className="flex w-screen h-full">
            <Link href="/login" className="bg-orange-400 hover:bg-orange-600 text-orange-800 w-screen text-5xl align-middle content-center text-center">Login</Link>
            <Link href="/signup" className="bg-orange-800 hover:bg-orange-900 text-orange-400 w-screen text-5xl align-middle content-center text-center">Sign Up</Link>
        </div>
      </section>
    </main>
  );
}
