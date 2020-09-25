const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
  	let maxDeap = 0;
  	for (let i = 0; i < arr.length; i++) {
	  	const typeArr = Object.prototype.toString.call(arr[i])  === '[object Array]';
	  	let tempMaxDeap = 0;

  		if (i === arr.length - 1) tempMaxDeap = 1;
		if (typeArr) tempMaxDeap = (1 + this.calculateDepth(arr[i]));
		if (typeArr && arr[i].length == 0) tempMaxDeap = 2;
		if (tempMaxDeap > maxDeap) maxDeap = tempMaxDeap;
  	}


  	return maxDeap;

  }
};