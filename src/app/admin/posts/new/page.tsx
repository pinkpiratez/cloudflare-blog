import { PostForm } from "@/components/PostForm";
import { createPost } from "../../actions";

export default function NewPostPage() {
	return (
		<div>
			<h1 className="mb-2 text-3xl font-bold text-slate-900">สร้างบทความใหม่</h1>
			<p className="mb-8 text-slate-600">กรอกข้อมูลบทความแล้วกดบันทึก</p>
			<div className="max-w-2xl rounded-xl border border-slate-200 bg-white p-6">
				<PostForm action={createPost} />
			</div>
		</div>
	);
}
