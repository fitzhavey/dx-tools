/**
 * Installs all dependencies for projects inside a monorepo.
 *
 * The first argument given is the path to the folder to work on,
 * if none is provided it will default to the current directory.
 */

const cmd = require('../lib/cmd');
const findProjects = require('../lib/findProjects');
const installDependencies = require('../lib/installDependencies');

module.exports = async () => {
	let folder = process.argv[3];
	if (!folder) folder = '.';
	cmd.log(`> Finding all projects in: "${folder}"...`);
	const projects = findProjects(folder);

	cmd.log('> Installing all dependencies...');
	const installations = projects.map(async project => {
		cmd.log(`> Installing dependencies for: "${project}"...`);
		await installDependencies(project);
	});
	await Promise.all(installations);

	cmd.success('> Done.');
};
