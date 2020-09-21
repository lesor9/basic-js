const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if (sampleActivity !== String) return false;

	sampleActivity = Number(sampleActivity);
	if (Number.isInteger(sampleActivity) === false) return false;
	
	const MODERN_ACTIVITY = 15;
	const HALF_LIFE_PERIOD = 10000 / 1.22;

	let age = Math.log(MODERN_ACTIVITY / sampleActivity) / HALF_LIFE_PERIOD;

	return age;
};
