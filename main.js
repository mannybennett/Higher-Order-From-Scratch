function mapFromScratch(array, callBack) {
  const newArr = []
  for (let i=0; i < array.length; i++) {
    newArr.push(callBack(array[i]))
  }
  return newArr
}

const numbers = [1, 2, 3]

const myFunc = x => x + 1
console.log(mapFromScratch(numbers, myFunc))

function reduceFromScratch(array, callback, initialValue) {
  if (!initialValue) {
    let acc = array[0]
    for (let i=1; i < array.length; i++) {
      acc = callback(acc, array[i])
    }
    return acc
  } else {
    acc = initialValue
    for (let i=0; i < array.length; i++) {
      acc = callback(acc, array[i])
    }
    return acc
  }
}

const myFunc2 = (acc, curr) => acc + curr
console.log(reduceFromScratch(numbers, myFunc2, 5))

function filterFromScratch(array, callBack) {
  const newArr = []
  for (let i=0; i < array.length; i++) {
    if (callBack(array[i])) {
      newArr.push(array[i])
    }
  }
  return newArr
}

const myFunc3 = num => num > 1
console.log(filterFromScratch(numbers, myFunc3))