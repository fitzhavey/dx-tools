const { exec } = require('child_process');
const isProject = require('./isProject');

function promiseFromChildProcess(child) {
	return new Promise((resolve, reject) => {
		child.addListener('error', reject);
		child.addListener('exit', resolve);
	});
}

/**
 * Installs npm dependencies in a given folder
 * @param {*} project the path to the npm project
 */
module.exports = async (project, command) => {
	if (!isProject(project)) throw new Error('not and npm project');
	const process = exec(command, { cwd: project });
	process.stdout.on('data', data => {
		console.log(data);
	});
	await promiseFromChildProcess(process).then(() => {},
		err => console.log(`Error: ${err}`));
};
