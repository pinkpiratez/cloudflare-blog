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
		<article>
			<Link href="/posts" className="mb-6 inline-block text-sm text-orange-600 hover:text-orange-700">
				← กลับไปรายการบทความ
			</Link>

			<header className="mb-8">
				<h1 className="mb-3 text-4xl font-bold text-slate-900">{post.title}</h1>
				<div className="flex items-center gap-2 text-sm text-slate-500">
					<span>โดย {post.author}</span>
					<span>•</span>
					<time>{formatDate(post.publishedAt ?? post.createdAt)}</time>
				</div>
			</header>

			<div className="whitespace-pre-wrap text-lg leading-relaxed text-slate-700">
				{post.content}
			</div>
		</article>
	);
}
