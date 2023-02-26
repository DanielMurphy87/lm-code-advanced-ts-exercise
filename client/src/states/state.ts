import { states } from "./states";

type StateType = keyof typeof states;

export class State {
	#state: StateType = "MENU";

	get() {
		return this.#state;
	}

	set(newState: StateType) {
		this.#state = newState as "MENU";
	}
}