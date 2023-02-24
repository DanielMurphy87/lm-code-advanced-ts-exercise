import { baseUrl } from "./base_url";
import { User } from "./types";

export async function fetchAllUsers(): Promise<User[] | []> {
	try {
		const result = await fetch(baseUrl + "/api/users/all");
		const users = await result.json();
		return users;
	} catch {
		return [];
	}
}