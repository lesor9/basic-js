const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	let month = 0;
	
	if (date === undefined) return 'Unable to determine the time of year!';
	if (typeof date != 'object') throw Error;

	if (date instanceof Date) {
		month = date.getMonth() + 1;
	}
	
	switch (month) {
		case 12:
		case 1:
		case 2:
			return 'winter';

		case 3:
		case 4:
		case 5:
			return 'spring';

		case 6:
		case 7:
		case 8:
			return 'summer';

		case 9:
		case 10:
		case 11:
			return 'fall';
	}	
};