import { PostCard } from "@/components/PostCard";
import { getPublishedPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";

export default async function PostsPage() {
	const allPosts = await getPublishedPosts();

	return (
		<div>
			<h1 className="mb-2 text-3xl font-bold text-slate-900">บทความทั้งหมด</h1>
			<p className="mb-8 text-slate-600">รายการบทความและข่าวสารที่เผยแพร่แล้ว</p>

			{allPosts.length === 0 ? (
				<p className="text-slate-500">ยังไม่มีบทความที่เผยแพร่</p>
			) : (
				<div className="grid gap-6">
					{allPosts.map((post) => (
						<PostCard key={post.id} post={post} />
					))}
				</div>
			)}
		</div>
	);
}
