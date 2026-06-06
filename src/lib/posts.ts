import { desc, eq } from "drizzle-orm";
import { getDb } from "./db";
import { posts } from "./db/schema";

export async function getPublishedPosts(limit?: number) {
	const db = getDb();
	const query = db
		.select()
		.from(posts)
		.where(eq(posts.status, "published"))
		.orderBy(desc(posts.publishedAt));

	if (limit) {
		return query.limit(limit);
	}

	return query;
}

export async function getAllPosts() {
	const db = getDb();
	return db.select().from(posts).orderBy(desc(posts.createdAt));
}

export async function getPostById(id: number) {
	const db = getDb();
	const result = await db.select().from(posts).where(eq(posts.id, id)).limit(1);
	return result[0] ?? null;
}

export async function getPostCounts() {
	const all = await getAllPosts();
	return {
		total: all.length,
		published: all.filter((p) => p.status === "published").length,
		draft: all.filter((p) => p.status === "draft").length,
	};
}
