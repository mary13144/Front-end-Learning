/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
	command = command.replaceAll('()', 'o');
	return command.replaceAll('(al)', 'al');
};