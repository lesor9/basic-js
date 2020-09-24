const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	const answer = {
	};

	answer['turns'] = Math.pow(2, disksNumber) - 1;
	answer['seconds'] = Math.floor(answer['turns'] / (turnsSpeed / 3600));

	return answer;
};
