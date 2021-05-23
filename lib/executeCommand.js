/* eslint-disable no-restricted-syntax */
const { exec } = require('child_process');
const cmd = require('./cmd');
const isProject = require('./isProject');

/**
 * Installs npm dependencies in a given folder
 * @param {*} project the path to the npm project
 */
module.exports = async (project, command) => {
	if (!isProject(project)) throw new Error('not an npm project');

	const child = exec(command, { cwd: project });

	let data = '';
	for await (const chunk of child.stdout) {
		cmd.log(chunk);
		data += chunk;
	}

	let error = '';
	for await (const chunk of child.stderr) {
		cmd.error(chunk);
		error += chunk;
	}
	const exitCode = await new Promise(resolve => {
		child.on('close', resolve);
	});

	if (exitCode) {
		throw new Error(`subprocess error exit ${exitCode}, ${error}`);
	}

	return data;
};
