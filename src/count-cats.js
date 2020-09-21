const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {  	
  	let cats = 0;

	for (let i = 0; i <= backyard.length - 1; i++) {
		arr = backyard[i];
		for (let j = 0; j <= arr.length - 1; j++) {
			if (backyard[i][j] == '^^') {
				cats += 1;
			}
		}
	}
	return cats;
};
