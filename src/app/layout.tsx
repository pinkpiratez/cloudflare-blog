import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
	title: "Blog News",
	description: "เว็บบล็อกและข่าวสารบน Cloudflare",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="th">
			<body className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
