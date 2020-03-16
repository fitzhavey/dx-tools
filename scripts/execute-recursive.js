/**
 * Executes given commands for projects inside a monorepo.
 *
 * The first argument given is the path to the folder to work on,
 * if none is provided it will default to the current directory.
 *
 * The second argument is the command to run.
 */

const cmd = require('../lib/cmd');
const findProjects = require('../lib/findProjects');
const executeCommand = require('../lib/executeCommand');

module.exports = async (givenFolder, givenCommand) => {
	let folder = givenFolder || process.argv[3];
	const command = givenCommand || process.argv[4];
	if (!folder) folder = '.';
	cmd.log(`> Finding all projects in: "${folder}"...`);
	const projects = findProjects(folder);

	cmd.log(`> Executing "${command}" on all projects...`);
	projects.forEach(project => {
		cmd.log(`> ${project}...`);
		executeCommand(project, command);
	});
};
