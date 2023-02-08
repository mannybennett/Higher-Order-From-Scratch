Array.prototype.mapFromScratch =
  function(callBack) {
    const newArr = []
    for (let i=0; i < this.length; i++) {
      newArr.push(callBack(this[i]))
    }
    return newArr
  }

const numbers = [1, 2, 3]
const myFunc = x => x + 1

console.log(numbers.mapFromScratch(myFunc))