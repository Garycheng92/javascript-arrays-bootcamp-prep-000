var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, twixString) {
  return [twixString,...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, twixString) {
  chocolateBars.unshift(twixString)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, twixString) {
  return [...chocolateBars,twixString]
}

function destructivelyAddElementToEndOfArray(chocolateBars, twixString) {
  chocolateBars.push(twixString)
  return chocolateBars
}