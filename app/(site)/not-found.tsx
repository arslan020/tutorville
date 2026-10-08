import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-xl px-6 py-28 text-center">
        <p className="text-sm font-bold text-navy">404</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-deep-navy">This page is not here</h1>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-bold text-white">
          Back home
        </Link>
      </div>
    </main>
  );
}
