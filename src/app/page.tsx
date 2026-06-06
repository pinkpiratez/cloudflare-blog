import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { getPublishedPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";

export default async function HomePage() {
	const latestPosts = await getPublishedPosts(5);

	return (
		<div>
			<section className="mb-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 px-8 py-12 text-white">
				<h1 className="mb-4 text-4xl font-bold">ยินดีต้อนรับสู่ Blog News</h1>
				<p className="mb-6 max-w-2xl text-lg text-orange-50">
					เว็บบล็อกและข่าวสารที่สร้างด้วย Next.js และ Cloudflare D1
					จัดการเนื้อหาได้จากหน้า Admin
				</p>
				<div className="flex gap-3">
					<Link
						href="/posts"
						className="rounded-lg bg-white px-5 py-2 font-medium text-orange-600 hover:bg-orange-50"
					>
						อ่านบทความทั้งหมด
					</Link>
					<Link
						href="/admin"
						className="rounded-lg border border-white/60 px-5 py-2 font-medium text-white hover:bg-white/10"
					>
						ไปหน้า Admin
					</Link>
				</div>
			</section>

			<section>
				<h2 className="mb-6 text-2xl font-bold text-slate-900">บทความล่าสุด</h2>
				{latestPosts.length === 0 ? (
					<p className="text-slate-500">ยังไม่มีบทความที่เผยแพร่</p>
				) : (
					<div className="grid gap-6">
						{latestPosts.map((post) => (
							<PostCard key={post.id} post={post} />
						))}
					</div>
				)}
			</section>
		</div>
	);
}
