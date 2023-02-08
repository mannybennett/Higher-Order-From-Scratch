function mapFromScratch(array, callBack) {
  const newArr = []
  for (let i=0; i < array.length; i++) {
    newArr.push(callBack(array[i], i, array))
  }
  return newArr
}

const numbers = [1, 2, 3]
const myFunc = x => x + 1

console.log(mapFromScratch(numbers, myFunc))