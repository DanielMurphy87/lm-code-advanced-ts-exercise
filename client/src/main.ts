import { exit } from "./exit/exit";
import { showMenu } from "./menu/menu";
import { browsePosts } from "./menu/options/browse_posts/browse_posts";
import { sendMessage } from "./menu/options/send_message/send_message";
import { showAllPosts } from "./menu/options/show_all_posts/show_all_posts";
import { showAllUsers } from "./menu/options/show_all_users/show_all_users";
// import { State } from "./states/state";
import { states } from "./states/states";
import { clear, print, printNewLine, prompt } from "./ui/console";


async function begin() {
	clear("yes");
	print("👋 Welcome to our cool blog browser!");
	await prompt("⌨️ Press [ENTER] to continue! 🕶️");
	main();
}

async function main() {
	const stateHandlers = {
		MENU: async () => {
			await showMenu();
			return states.MENU;
		},
		SEND_MESSAGE: async () => {
			await sendMessage();
			return states.MENU;
		},
		SHOW_POSTS: async () => {
			clear("yes");
			await showAllPosts();
			return states.MENU;
		},
		SHOW_USERS: async () => {
			clear("yes");
			await showAllUsers();
			return states.MENU;
		},
		BROWSE_POSTS: async () => {
			clear("yes");
			await browsePosts();
			return states.MENU;
		},
		ADD_USER: async () => {
			clear("yes");
			print("🏗️  This functionality has not been implemented!");
			await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
			return states.MENU;
		},
		UNKNOWN: async () => {
			clear("yes");
			print("😵 We have entered an unknown state.");
			await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
			return states.MENU;
		},
	};

	let currentState = states.MENU;

	while (true) {
		const stateHandler = stateHandlers[currentState];
		if (!stateHandler) {
			clear("yes");
			print(`🌋 😱 Uh-oh, we've entered an invalid state: "${currentState}"`);
			print("💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥", false);
			print("💥 Crashing the program now...  💥", false);
			print("💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥", false);
			printNewLine();
			exit(99);
			break;
		}
		currentState = await stateHandler();
	}
}

begin();