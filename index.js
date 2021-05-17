/* eslint-disable no-unused-expressions */
const cmd = require('./lib/cmd');
const executeRecursive = require('./scripts/execute-recursive');

module.exports = async () => {

	try {
		cmd.clear();
		cmd.title('DX Tools');

		require('yargs')
			.scriptName('dx-tools')
			.usage('$0 <cmd> [args]')
			.command('execute-recursive [folder] [command]', 'Execute given command for projects', yargs => {
				yargs.option('folder', {
					alias: 'f',
					default: '.'
				});
				yargs.option('command', {
					alias: 'c',
					demandOption: true
				});
			}, argv => {
				cmd.subTitle(`${argv._}:`);
				executeRecursive(argv.folder, argv.command);
			})
			.help()
			.argv;

	} catch (err) {
		cmd.error(err);
	}

};
