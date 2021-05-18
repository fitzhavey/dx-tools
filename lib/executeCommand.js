const { exec } = require('child_process');
const isNodeProject = require('./isNodeProject');

/**
 * Installs node dependencies in a given folder
 * @param {*} project the path to the node project
 */
module.exports = (project, command) => {
	if (!isNodeProject(project)) throw new Error('not a node project');
	const process = exec(command, { cwd: project });
	process.stdout.on('data', data => {
		console.log(data);
	});
};
