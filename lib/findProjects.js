const directoryTree = require('directory-tree');
const isProject = require('./isProject');

/* eslint-disable consistent-return */
const findProjectsRecursive = (tree, projects) => {
	const { path, children } = tree;
	if (path.includes('node_modules')) return;
	if (isProject(tree.path)) projects.push(path);
	if (children) {
		return children.forEach(child => {
			if (child.children) findProjectsRecursive(child, projects);
		});
	}
};
/* eslint-enable */

/**
 * Finds all the npm projects within a given folder
 */
module.exports = folder => {
	const tree = directoryTree(folder);
	const projects = [];
	findProjectsRecursive(tree, projects);
	return projects;
};
