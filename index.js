const cmd = require('./lib/cmd');
const scripts = require('./scripts');

module.exports = async () => {

	try {
		cmd.clear();
		cmd.title('DX Tools');

		const selection = process.argv[2];
		const chosenScript = scripts[selection];

		if (!chosenScript) {
			cmd.error(`Script: ${selection} not found.`);
		} else {
			cmd.subTitle(`${selection}:`);
			await chosenScript();
		}
	} catch (err) {
		cmd.error(err);
	}

};
