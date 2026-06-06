import Link from "next/link";
import type { Post } from "@/lib/db/schema";

function formatDate(date: string | null) {
	if (!date) return "-";
	return new Date(date).toLocaleDateString("th-TH", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

export function PostCard({ post }: { post: Post }) {
	const excerpt =
		post.content.length > 160 ? `${post.content.slice(0, 160)}...` : post.content;

	return (
		<article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
			<div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
				<span>{post.author}</span>
				<span>•</span>
				<time>{formatDate(post.publishedAt ?? post.createdAt)}</time>
			</div>
			<h2 className="mb-2 text-xl font-semibold text-slate-900">
				<Link href={`/posts/${post.id}`} className="hover:text-orange-600">
					{post.title}
				</Link>
			</h2>
			<p className="mb-4 text-slate-600">{excerpt}</p>
			<Link
				href={`/posts/${post.id}`}
				className="text-sm font-medium text-orange-600 hover:text-orange-700"
			>
				อ่านต่อ →
			</Link>
		</article>
	);
}
