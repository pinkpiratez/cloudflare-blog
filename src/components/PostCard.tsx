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

type PostCardProps = {
	post: Post;
	variant?: "default" | "compact";
};

export function PostCard({ post, variant = "default" }: PostCardProps) {
	const excerpt =
		post.content.length > (variant === "compact" ? 100 : 160)
			? `${post.content.slice(0, variant === "compact" ? 100 : 160)}...`
			: post.content;

	return (
		<article className="group overflow-hidden rounded-[18px] bg-white transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
			<div className="h-1 bg-gradient-to-r from-[#0071e3] via-[#bf5af2] to-[#30d158] opacity-0 transition-opacity group-hover:opacity-100" />
			<div className="p-8">
				<div className="mb-3 flex items-center gap-2 text-[12px] text-[#86868b]">
					<span>{post.author}</span>
					<span>·</span>
					<time>{formatDate(post.publishedAt ?? post.createdAt)}</time>
				</div>
				<h2 className="mb-3 text-[24px] font-semibold tracking-tight text-[#1d1d1f]">
					<Link
						href={`/posts/${post.id}`}
						className="transition-colors hover:text-[#0071e3]"
					>
						{post.title}
					</Link>
				</h2>
				<p className="mb-5 text-[17px] leading-relaxed text-[#86868b]">{excerpt}</p>
				<Link
					href={`/posts/${post.id}`}
					className="text-[14px] font-medium text-[#0071e3] transition-opacity hover:opacity-70"
				>
					อ่านต่อ ›
				</Link>
			</div>
		</article>
	);
}
