const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objArray) {
  // {year: , result: }
  let result
  objArray.find(function(obj) {
    if (obj.result === 'W') {
      result = obj.year
    }
  })
  return result
}
