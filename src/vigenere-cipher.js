const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {


	encrypt(string, key) {
	  	let j = 0;
	  	let keyLength = key.length;
	  	let newKey = '';

	  	string = string.toLowerCase();
	  	key = key.toLowerCase();

	  	for (let i = 0; i < string.length; i++) {
	   		if (string.charCodeAt(i) < 97 || string.charCodeAt(i) > 122) {
	  			newKey += ' ';
	  			continue;
	  		}
	  		newKey += key[j];
	  		if (j == keyLength - 1) {
	  			j = 0;
	  			continue;
	  		}
	  		j++;
	  	}

	  	let newStr = '';
	  	for (let i = 0; i < string.length; i++) {
	  		const codeStr = string.charCodeAt(i); 
	  		const codeKey = newKey.charCodeAt(i);

	  		const finalKey = ( (codeStr + codeKey - 97) > 122) ? (codeStr + codeKey - 97 - 26) : (codeStr + codeKey - 97);

	  		if (string.charCodeAt(i) < 97 || string.charCodeAt(i) > 122) {
	  			newStr += string[i];
	  			continue;	
	  		} 
	  		newStr += String.fromCharCode(finalKey);
	  	}
	  	return newStr.toUpperCase();
}    
	decrypt(encryptedMessage, key) {
	  	let j = 0;
	  	let keyLength = key.length;
	  	let newKey = '';

	  	encryptedMessage = encryptedMessage.toLowerCase();
	  	key = key.toLowerCase();

	  	for (let i = 0; i < encryptedMessage.length; i++) {
	   		if (encryptedMessage.charCodeAt(i) < 97 || encryptedMessage.charCodeAt(i) > 122) {
	  			newKey += ' ';
	  			continue;
	  		}
	  		newKey += key[j];
	  		if (j == keyLength - 1) {
	  			j = 0;
	  			continue;
	  		}
	  		j++;
	  	}

	  	let newStr = '';
	  	for (let i = 0; i < encryptedMessage.length; i++) {
	  		const codeStr = encryptedMessage.charCodeAt(i); 
	  		const codeKey = newKey.charCodeAt(i);

			let finalKey = undefined;

			if ( (codeStr - codeKey + 97) > 122) {
				finalKey = codeStr - codeKey + 97 - 26;
			} else if ( (codeStr - codeKey + 97) < 97) {
				finalKey = codeStr - codeKey + 97 + 26;
			} else {
				finalKey = codeStr - codeKey + 97;
			}

	  		if (encryptedMessage.charCodeAt(i) < 97 || encryptedMessage.charCodeAt(i) > 122) {
	  			newStr += encryptedMessage[i];
	  			continue;	
	  		} 

	  		newStr += String.fromCharCode(finalKey);
	  	}
	  	return newStr.toUpperCase();
}

}

module.exports = VigenereCipheringMachine;
