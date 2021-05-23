const executeRecursive = require('./execute-recursive');

module.exports = {
	'execute-recursive': {
		executable: executeRecursive,
		command: 'execute-recursive [folder] [command]',
		description: 'Execute given command for all projects within a subdirectory',
		options: [
			{
				name: 'folder',
				alias: 'f',
				default: '.'
			},
			{
				name: 'command',
				alias: 'c',
				demandOption: true
			}
		]
	}
};
