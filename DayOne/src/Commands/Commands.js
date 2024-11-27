class Commands {
	constructor(cmd1, cmd2) {
		this.cmd1 = cmd1;
		// this.cmd2 = cmd2;
		console.log(`Command 1: ${cmd1}`);
	}
}

export const commandOne = '/NG';
export const command1 = new Commands(commandOne);
