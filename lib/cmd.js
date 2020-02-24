const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const title = text => {
	console.log(
		chalk.yellow(
			figlet.textSync(text, { horizontalLayout: 'nodebot' })
		)
	);
};

const subTitle = text => {
	console.log(chalk.blue.bold(text));
};

const log = text => {
	console.log(chalk.blue(text));
};

const success = text => {
	console.log(chalk.green.bold(text));
};

const error = text => {
	console.log(chalk.red.bold(text));
};

module.exports = {
	clear,
	title,
	subTitle,
	log,
	success,
	error
};
