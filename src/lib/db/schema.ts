import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const posts = sqliteTable("posts", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	title: text("title").notNull(),
	content: text("content").notNull(),
	author: text("author").notNull().default("Admin"),
	status: text("status").notNull().default("draft"),
	publishedAt: text("published_at"),
	createdAt: text("created_at").notNull(),
	updatedAt: text("updated_at").notNull(),
});

export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;
