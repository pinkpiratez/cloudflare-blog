import Link from "next/link";

const navItems = [
	{ href: "/admin", label: "แดชบอร์ด" },
	{ href: "/admin/posts", label: "จัดการบทความ" },
	{ href: "/admin/posts/new", label: "สร้างบทความใหม่" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="mx-auto flex min-h-screen max-w-[1200px] gap-8 px-6 pt-20 pb-16">
			<aside className="w-56 shrink-0">
				<div className="sticky top-16 rounded-[18px] border border-black/8 bg-white p-4 shadow-sm">
					<h2 className="mb-4 text-[12px] font-semibold uppercase tracking-widest text-[#86868b]">
						Admin Panel
					</h2>
					<nav className="flex flex-col gap-1">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="rounded-lg px-3 py-2 text-[14px] font-medium text-[#1d1d1f] hover:bg-[#f5f5f7] hover:text-[#0071e3]"
							>
								{item.label}
							</Link>
						))}
						<hr className="my-2 border-black/8" />
						<Link
							href="/"
							className="rounded-lg px-3 py-2 text-[14px] text-[#86868b] hover:bg-[#f5f5f7]"
						>
							← กลับหน้าเว็บ
						</Link>
					</nav>
				</div>
			</aside>
			<div className="flex-1">{children}</div>
		</div>
	);
}
