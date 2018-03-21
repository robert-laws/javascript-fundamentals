const name = "bob"
let greeting = `Hello, ${normalName(name)}!`
var count = 0
count++

console.log(greeting)
console.log(count)

function normalName(name) {
  var firstLetter = name.slice(0,1)
  return firstLetter.toUpperCase()
}