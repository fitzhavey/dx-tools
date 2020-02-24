const directoryTree = require('directory-tree');
const cmd = require('./cmd');
const isProject = require('./isProject');

/* eslint-disable consistent-return */
const findProjectsRecursive = (tree, projects) => {
	const { path, children } = tree;
	if (isProject(tree.path)) {
		projects.push(path);
		cmd.log(`> Project: "${path}" found.`);
	}
	if (children.length !== 0) {
		for (let i = 0; i < children.length; i++) {
			const child = children[i];
			if (child.children) findProjectsRecursive(child, projects);
		}
	}
};
/* eslint-enable */

/**
 * Finds all the npm projects within a given folder
 */
module.exports = folder => {
	const tree = directoryTree(
		folder,
		{
			exclude: /node_modules|.git/,
			extensions: /.json/
		}
	);
	const projects = [];
	findProjectsRecursive(tree, projects);
	return projects;
};
