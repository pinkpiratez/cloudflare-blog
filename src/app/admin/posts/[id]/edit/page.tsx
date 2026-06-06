import { notFound } from "next/navigation";
import { PostForm } from "@/components/PostForm";
import { updatePost } from "@/app/admin/actions";
import { getPostById } from "@/lib/posts";

export const dynamic = "force-dynamic";

export default async function EditPostPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const postId = Number(id);
	if (Number.isNaN(postId)) notFound();

	const post = await getPostById(postId);
	if (!post) notFound();

	const boundUpdate = updatePost.bind(null, postId);

	return (
		<div>
			<h1 className="mb-2 text-3xl font-bold text-slate-900">แก้ไขบทความ</h1>
			<p className="mb-8 text-slate-600">{post.title}</p>
			<div className="max-w-2xl rounded-xl border border-slate-200 bg-white p-6">
				<PostForm post={post} action={boundUpdate} />
			</div>
		</div>
	);
}
