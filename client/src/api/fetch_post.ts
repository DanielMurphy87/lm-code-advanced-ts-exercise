import { baseUrl } from "./base_url";
import { Post } from "./types";

export async function fetchPost(id: number): Promise<Post | null> {
	try {
		const result = await fetch(baseUrl + "/api/posts/" + id);
		const post = await result.json();
		return post;
	} catch {
		return null;
	}
}