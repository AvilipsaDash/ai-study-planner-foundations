import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="border-b bg-white">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-6 px-6 py-4">
            <Link href="/" className="font-bold">
              AI Study Planner
            </Link>

            <Link href="/planner">Planner</Link>
            <Link href="/about">About</Link>
            <Link href="/settings">Settings</Link>
            <Link href="/health">Health</Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}