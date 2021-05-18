const directoryTree = require('directory-tree');

/**
 * Returns whether or not a given folder path contains an npm project
 *
 * @param folder Folder to check for projects
 */
const isNodeProject = folder => {
	const tree = directoryTree(folder);
	if (!tree) return false;
	let foundProject = false;
	if (tree.children) {
		tree.children.forEach(child => {
			if (child.name === 'package.json') foundProject = true;
		});
	}
	return foundProject;
};

module.exports = isNodeProject;
