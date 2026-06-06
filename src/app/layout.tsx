import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
	title: "Blog News",
	description: "เว็บบล็อกและข่าวสารบน Cloudflare",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="th">
			<body className="min-h-screen bg-slate-50 text-slate-900">
				<header className="border-b border-slate-200 bg-white">
					<div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
						<Link href="/" className="text-xl font-bold text-orange-600">
							Blog News
						</Link>
						<nav className="flex gap-4 text-sm font-medium">
							<Link href="/posts" className="text-slate-600 hover:text-orange-600">
								บทความทั้งหมด
							</Link>
							<Link href="/admin" className="text-slate-600 hover:text-orange-600">
								Admin
							</Link>
						</nav>
					</div>
				</header>
				<main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
				<footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500">
					Powered by Next.js + Cloudflare D1
				</footer>
			</body>
		</html>
	);
}
