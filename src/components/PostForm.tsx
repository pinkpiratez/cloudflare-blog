import type { Post } from "@/lib/db/schema";

type PostFormProps = {
	post?: Post;
	action: (formData: FormData) => Promise<void>;
};

export function PostForm({ post, action }: PostFormProps) {
	return (
		<form action={action} className="space-y-6">
			<div>
				<label htmlFor="title" className="mb-1 block text-sm font-medium text-slate-700">
					หัวข้อ
				</label>
				<input
					id="title"
					name="title"
					type="text"
					required
					defaultValue={post?.title ?? ""}
					className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
				/>
			</div>

			<div>
				<label htmlFor="author" className="mb-1 block text-sm font-medium text-slate-700">
					ผู้เขียน
				</label>
				<input
					id="author"
					name="author"
					type="text"
					required
					defaultValue={post?.author ?? "Admin"}
					className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
				/>
			</div>

			<div>
				<label htmlFor="content" className="mb-1 block text-sm font-medium text-slate-700">
					เนื้อหา
				</label>
				<textarea
					id="content"
					name="content"
					required
					rows={12}
					defaultValue={post?.content ?? ""}
					className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
				/>
			</div>

			<div>
				<label htmlFor="status" className="mb-1 block text-sm font-medium text-slate-700">
					สถานะ
				</label>
				<select
					id="status"
					name="status"
					defaultValue={post?.status ?? "draft"}
					className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
				>
					<option value="draft">ร่าง (Draft)</option>
					<option value="published">เผยแพร่ (Published)</option>
				</select>
			</div>

			<div className="flex gap-3">
				<button
					type="submit"
					className="rounded-lg bg-orange-600 px-6 py-2 font-medium text-white hover:bg-orange-700"
				>
					บันทึก
				</button>
			</div>
		</form>
	);
}
