import { PostCard } from "@/components/PostCard";
import { getPublishedPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";

export default async function PostsPage() {
	const allPosts = await getPublishedPosts();

	return (
		<div className="bg-[#fbfbfd] pt-24 pb-16">
			<div className="mx-auto max-w-[980px] px-6">
				<p className="mb-2 text-center text-[17px] font-semibold text-[#bf4800]">Stories</p>
				<h1 className="mb-4 text-center text-[48px] font-semibold tracking-tight text-[#1d1d1f] sm:text-[64px]">
					บทความทั้งหมด
				</h1>
				<p className="mb-16 text-center text-[21px] text-[#86868b]">
					รายการบทความและข่าวสารที่เผยแพร่แล้ว
				</p>

				{allPosts.length === 0 ? (
					<p className="text-center text-[17px] text-[#86868b]">ยังไม่มีบทความที่เผยแพร่</p>
				) : (
					<div className="grid gap-6 sm:grid-cols-2">
						{allPosts.map((post) => (
							<PostCard key={post.id} post={post} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}
