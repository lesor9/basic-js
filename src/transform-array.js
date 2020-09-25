const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	if (arr == []) return [];
	
	const newArr = [];

	for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case "--discard-next":
				i++;
				break;

			case "--discard-prev":
				if (newArr[newArr.length] == []) continue;
				if (arr[i - 2] === '--discard-next') continue;
				newArr.pop();
				break;

			case "--double-next":
				if (arr[i + 1] === undefined) continue;
				newArr.push(arr[i + 1]);
				break;

			case "--double-prev":
				if (arr[i - 1] === undefined) continue;
				if (arr[i - 2] === '--discard-next') continue;
				newArr.push(arr[i - 1]);
				break;

			default: 
				newArr.push(arr[i]);
		}
	}
	
	return newArr;
};
