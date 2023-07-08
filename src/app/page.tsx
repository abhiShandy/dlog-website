import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>D-Log: Log your dreams</h1>
      <Link href="/privacy-policy">Privacy Policy</Link>
    </main>
  );
}
