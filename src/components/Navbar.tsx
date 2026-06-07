"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 z-50 w-full transition-all duration-500 ${
				scrolled
					? "border-b border-black/5 bg-white/72 backdrop-blur-xl"
					: "bg-transparent"
			}`}
		>
			<div className="mx-auto flex h-12 max-w-[980px] items-center justify-between px-6">
				<Link
					href="/"
					className="text-[21px] font-semibold tracking-tight text-[#1d1d1f] transition-opacity hover:opacity-70"
				>
					Blog News
				</Link>
				<nav className="flex items-center gap-8 text-[12px] font-normal text-[#1d1d1f]/80">
					<Link href="/posts" className="transition-opacity hover:opacity-100 hover:text-[#0071e3]">
						บทความ
					</Link>
					<Link href="/admin" className="transition-opacity hover:opacity-100 hover:text-[#0071e3]">
						Admin
					</Link>
				</nav>
			</div>
		</header>
	);
}
