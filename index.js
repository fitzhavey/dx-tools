/* eslint-disable no-unused-expressions */
const yargs = require('yargs');
const cmd = require('./lib/cmd');
const scripts = require('./scripts');

module.exports = async () => {

	try {
		cmd.clear();
		cmd.title('DX Tools');

		// configure arguments for scripts
		yargs.usage('$0 <cmd> [args]');
		Object.keys(scripts).forEach(scriptName => {
			const script = scripts[scriptName];
			yargs.command(
				script.command,
				script.description,
				args => {
					script.options.forEach(options => {
						const optionName = options.name;
						args.option(optionName, { ...options });
					});
				},
				args => {
					cmd.subTitle(`${args._}:`);
					const parameters = script.options.map(option => args[option.name]);
					script.executable(...parameters);
				}
			).help().argv;
		});


	} catch (err) {
		cmd.error(err);
	}

};
