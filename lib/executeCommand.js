const { exec } = require('child_process');
const isProject = require('./isProject');

/**
 * Installs npm dependencies in a given folder
 * @param {*} project the path to the npm project
 */
module.exports = (project, command) => {
	if (!isProject(project)) throw new Error('not and npm project');
	const process = exec(command, { cwd: project });
	process.stdout.on('data', data => {
		console.log(data);
	});
};
