const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	let teamName = '';

	const isArr = members instanceof Array;
	if (!isArr) {
		return false;
	}

	for (let i = 0; i < members.length; i++) {
		if (typeof members[i] === 'string') {
			members[i] = members[i].trim().toUpperCase();
		}
	}

	members.sort();

	for (let i = 0; i < members.length; i++) {
		if (typeof members[i] === 'string') {
			teamName += members[i][0];
		}

	}

	return teamName;
};