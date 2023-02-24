import { fetchPost } from "../../../api/fetch_post";
import { clear, print, prompt, printNewLine } from "../../../ui/console";
import { Post } from "../../../api/types";

export async function browsePosts(): Promise<Post | null> {
	clear("nope");

	const desiredPostIdString = await prompt("Enter Post ID");

	const desiredPostId = parseInt(desiredPostIdString);

	if (isNaN(desiredPostId)) {
		print("Invalid Post ID. Please enter a valid number.");
		return null;
	}

	print(`📨 Fetching post "${desiredPostId}...`);

	const result = await fetchPost(desiredPostId);

	print(`🥳 Received post:`);

	console.log(result);

	printNewLine();
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return result || null;
}