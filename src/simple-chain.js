const CustomError = require("../extensions/custom-error");

const chainMaker = {
  finalArr : [],

  getLength() {
    return this.finalArr.length;
  },

  addLink(value) {
    this.finalArr.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if ( (position < 1) || (typeof position !== 'number')) {
      this.finalArr = [];
      throw Error;
    }
    this.finalArr.splice(position - 1 , 1);
    return this;
  },

  reverseChain() {
    this.finalArr.reverse();
    return this;
  },

  finishChain() {
    const arr = this.finalArr.join('~~');
    this.finalArr = [];
    return arr;
  }
};


module.exports = chainMaker;