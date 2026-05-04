import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-100">
          Hello world
        </h1>

        <Link
          href="/about"
          className=" inline-block px-5 py-2.5 rounded-xl text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-all duration-200"
        >
          About
        </Link>
      </div>
    </main>
  );
}
