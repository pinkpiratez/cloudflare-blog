import Link from "next/link";
import { getPostCounts } from "@/lib/posts";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
	const counts = await getPostCounts();

	return (
		<div>
			<h1 className="mb-2 text-3xl font-bold text-slate-900">แดชบอร์ด</h1>
			<p className="mb-8 text-slate-600">จัดการบทความและข่าวสารของเว็บไซต์</p>

			<div className="mb-8 grid gap-4 sm:grid-cols-3">
				<div className="rounded-xl border border-slate-200 bg-white p-6">
					<p className="text-sm text-slate-500">บทความทั้งหมด</p>
					<p className="text-3xl font-bold text-slate-900">{counts.total}</p>
				</div>
				<div className="rounded-xl border border-slate-200 bg-white p-6">
					<p className="text-sm text-slate-500">เผยแพร่แล้ว</p>
					<p className="text-3xl font-bold text-green-600">{counts.published}</p>
				</div>
				<div className="rounded-xl border border-slate-200 bg-white p-6">
					<p className="text-sm text-slate-500">ร่าง</p>
					<p className="text-3xl font-bold text-amber-600">{counts.draft}</p>
				</div>
			</div>

			<Link
				href="/admin/posts/new"
				className="inline-block rounded-lg bg-orange-600 px-6 py-2 font-medium text-white hover:bg-orange-700"
			>
				+ สร้างบทความใหม่
			</Link>
		</div>
	);
}
