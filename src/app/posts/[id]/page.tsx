import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostById } from "@/lib/posts";

export const dynamic = "force-dynamic";

function formatDate(date: string | null) {
	if (!date) return "-";
	return new Date(date).toLocaleDateString("th-TH", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

export default async function PostDetailPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const postId = Number(id);
	if (Number.isNaN(postId)) notFound();

	const post = await getPostById(postId);
	if (!post || post.status !== "published") notFound();

	return (
		<article className="bg-[#fbfbfd] pt-24 pb-20">
			<div className="mx-auto max-w-[680px] px-6">
				<Link
					href="/posts"
					className="mb-10 inline-flex items-center gap-1 text-[14px] text-[#0071e3] transition-opacity hover:opacity-70"
				>
					‹ กลับไปรายการบทความ
				</Link>

				<header className="mb-12 text-center">
					<p className="mb-4 text-[12px] font-medium uppercase tracking-widest text-[#86868b]">
						{post.author} · {formatDate(post.publishedAt ?? post.createdAt)}
					</p>
					<h1 className="text-[40px] font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-[56px]">
						{post.title}
					</h1>
				</header>

				<div className="whitespace-pre-wrap text-[19px] leading-[1.7] text-[#1d1d1f]">
					{post.content}
				</div>
			</div>
		</article>
	);
}
