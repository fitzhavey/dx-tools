const { exec } = require('child_process');
const isProject = require('./isProject');

/**
 * Installs npm dependencies in a given folder
 * @param {*} project the path to the npm project
 */
const installDependencies = async project => {
	if (!isProject(project)) throw new Error('not and npm project');
	await exec('npm install', {
		cwd: project
	});
};

module.exports = installDependencies;
