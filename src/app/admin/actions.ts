"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getDb } from "@/lib/db";
import { posts } from "@/lib/db/schema";

function now() {
	return new Date().toISOString();
}

export async function createPost(formData: FormData) {
	const title = String(formData.get("title") ?? "").trim();
	const content = String(formData.get("content") ?? "").trim();
	const author = String(formData.get("author") ?? "Admin").trim();
	const status = String(formData.get("status") ?? "draft");

	if (!title || !content) return;

	const db = getDb();
	const timestamp = now();

	await db.insert(posts).values({
		title,
		content,
		author,
		status,
		publishedAt: status === "published" ? timestamp : null,
		createdAt: timestamp,
		updatedAt: timestamp,
	});

	revalidatePath("/");
	revalidatePath("/posts");
	revalidatePath("/admin");
	redirect("/admin/posts");
}

export async function updatePost(id: number, formData: FormData) {
	const title = String(formData.get("title") ?? "").trim();
	const content = String(formData.get("content") ?? "").trim();
	const author = String(formData.get("author") ?? "Admin").trim();
	const status = String(formData.get("status") ?? "draft");

	if (!title || !content) return;

	const db = getDb();
	const existing = await db.select().from(posts).where(eq(posts.id, id)).limit(1);
	const current = existing[0];
	if (!current) return;

	const timestamp = now();
	const publishedAt =
		status === "published"
			? current.publishedAt ?? timestamp
			: null;

	await db
		.update(posts)
		.set({
			title,
			content,
			author,
			status,
			publishedAt,
			updatedAt: timestamp,
		})
		.where(eq(posts.id, id));

	revalidatePath("/");
	revalidatePath("/posts");
	revalidatePath(`/posts/${id}`);
	revalidatePath("/admin");
	redirect("/admin/posts");
}

export async function deletePost(id: number) {
	const db = getDb();
	await db.delete(posts).where(eq(posts.id, id));

	revalidatePath("/");
	revalidatePath("/posts");
	revalidatePath("/admin");
}

export async function togglePublish(id: number) {
	const db = getDb();
	const existing = await db.select().from(posts).where(eq(posts.id, id)).limit(1);
	const current = existing[0];
	if (!current) return;

	const timestamp = now();
	const isPublished = current.status === "published";

	await db
		.update(posts)
		.set({
			status: isPublished ? "draft" : "published",
			publishedAt: isPublished ? null : current.publishedAt ?? timestamp,
			updatedAt: timestamp,
		})
		.where(eq(posts.id, id));

	revalidatePath("/");
	revalidatePath("/posts");
	revalidatePath(`/posts/${id}`);
	revalidatePath("/admin");
}
