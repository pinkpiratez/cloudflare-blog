import Link from "next/link";
import { deletePost, togglePublish } from "../actions";
import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";

function formatDate(date: string | null) {
	if (!date) return "-";
	return new Date(date).toLocaleDateString("th-TH", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
}

export default async function AdminPostsPage() {
	const allPosts = await getAllPosts();

	return (
		<div>
			<div className="mb-8 flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold text-slate-900">จัดการบทความ</h1>
					<p className="text-slate-600">เพิ่ม แก้ไข ลบ และเผยแพร่บทความ</p>
				</div>
				<Link
					href="/admin/posts/new"
					className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700"
				>
					+ สร้างใหม่
				</Link>
			</div>

			<div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
				<table className="w-full text-left text-sm">
					<thead className="border-b border-slate-200 bg-slate-50">
						<tr>
							<th className="px-4 py-3 font-medium text-slate-600">หัวข้อ</th>
							<th className="px-4 py-3 font-medium text-slate-600">ผู้เขียน</th>
							<th className="px-4 py-3 font-medium text-slate-600">สถานะ</th>
							<th className="px-4 py-3 font-medium text-slate-600">วันที่</th>
							<th className="px-4 py-3 font-medium text-slate-600">จัดการ</th>
						</tr>
					</thead>
					<tbody>
						{allPosts.length === 0 ? (
							<tr>
								<td colSpan={5} className="px-4 py-8 text-center text-slate-500">
									ยังไม่มีบทความ
								</td>
							</tr>
						) : (
							allPosts.map((post) => (
								<tr key={post.id} className="border-b border-slate-100 last:border-0">
									<td className="px-4 py-3 font-medium text-slate-900">{post.title}</td>
									<td className="px-4 py-3 text-slate-600">{post.author}</td>
									<td className="px-4 py-3">
										<span
											className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
												post.status === "published"
													? "bg-green-100 text-green-700"
													: "bg-amber-100 text-amber-700"
											}`}
										>
											{post.status === "published" ? "เผยแพร่" : "ร่าง"}
										</span>
									</td>
									<td className="px-4 py-3 text-slate-500">
										{formatDate(post.publishedAt ?? post.createdAt)}
									</td>
									<td className="px-4 py-3">
										<div className="flex flex-wrap gap-2">
											<Link
												href={`/admin/posts/${post.id}/edit`}
												className="text-orange-600 hover:text-orange-700"
											>
												แก้ไข
											</Link>
											<form action={togglePublish.bind(null, post.id)}>
												<button
													type="submit"
													className="text-blue-600 hover:text-blue-700"
												>
													{post.status === "published" ? "ยกเลิกเผยแพร่" : "เผยแพร่"}
												</button>
											</form>
											<form action={deletePost.bind(null, post.id)}>
												<button
													type="submit"
													className="text-red-600 hover:text-red-700"
												>
													ลบ
												</button>
											</form>
										</div>
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
