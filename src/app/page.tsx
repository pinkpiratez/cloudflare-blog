import { LandingPage } from "@/components/LandingPage";
import { getPublishedPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";

export default async function HomePage() {
	const latestPosts = await getPublishedPosts(6);

	return <LandingPage posts={latestPosts} />;
}
