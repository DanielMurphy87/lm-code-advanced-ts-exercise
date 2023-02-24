import { sendMessageToServer } from "../../../api/send_message_to_server";
import { State } from "../../../states/state";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export async function sendMessage(): Promise<string> {
	const state = new State();

	clear("yes");

	const message = await prompt("What message shall we send? ");

	printNewLine();
	print(`📨 Sending message "${message}"...`);

	const success = await sendMessageToServer(message);

	if (success === true) {
		print("🥳 Message received successfully!");
	} else {
		print("😵 Message NOT received.");
	}

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	state.set("MENU");

	return state.get();
}