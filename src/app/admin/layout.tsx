import Link from "next/link";

const navItems = [
	{ href: "/admin", label: "แดชบอร์ด" },
	{ href: "/admin/posts", label: "จัดการบทความ" },
	{ href: "/admin/posts/new", label: "สร้างบทความใหม่" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-[calc(100vh-12rem)] gap-8">
			<aside className="w-56 shrink-0">
				<div className="sticky top-8 rounded-xl border border-slate-200 bg-white p-4">
					<h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
						Admin Panel
					</h2>
					<nav className="flex flex-col gap-1">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600"
							>
								{item.label}
							</Link>
						))}
						<hr className="my-2 border-slate-200" />
						<Link
							href="/"
							className="rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-50"
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
