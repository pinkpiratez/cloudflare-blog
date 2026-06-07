import Link from "next/link";

export function Footer() {
	return (
		<footer className="border-t border-black/8 bg-[#f5f5f7]">
			<div className="mx-auto max-w-[980px] px-6 py-8">
				<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
					<p className="text-[12px] text-[#86868b]">
						Copyright © {new Date().getFullYear()} Blog News. Built with Next.js + Cloudflare D1.
					</p>
					<div className="flex gap-6 text-[12px] text-[#424245]">
						<Link href="/posts" className="hover:underline">
							บทความ
						</Link>
						<Link href="/admin" className="hover:underline">
							Admin
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
