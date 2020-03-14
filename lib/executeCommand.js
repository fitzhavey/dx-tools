const { exec } = require('child_process');
const isProject = require('./isProject');

/**
 * Installs npm dependencies in a given folder
 * @param {*} project the path to the npm project
 */
module.exports = async (project, command) => {
	if (!isProject(project)) throw new Error('not and npm project');
	await exec(command, { cwd: project });
};
