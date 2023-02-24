import { baseUrl } from "./base_url";
import { Post } from "./types";

export async function fetchAllPosts(): Promise<Post[] | []> {
	try {
		const result = await fetch(baseUrl + "/api/posts/all");
		const posts = await result.json();
		return posts;
	} catch {
		return [];
	}
}