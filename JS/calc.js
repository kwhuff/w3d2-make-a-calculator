function add(x,y){
  return Number(x) + Number(y)
}
function subtract(x,y){
  return Number(x)-Number(y)
}
function divide(x,y){
  return Number(x)/Number(y)
}
function multiply(x,y){
  return Number(x)*Number(y)
}
function remainder(x,y){
  return Number(x)%Number(y)
}
function increment(x,y){
  return Number(x) = Number(y++)
}
function decrement(x,y){
  return Number(x) = Number(y--)
}

var answer
answer = add(40, 110)
console.assert(answer === 150)
answer = subtract(answer, 9)
console.assert(answer === 141)
answer = divide(answer, 6)
console.assert(answer === 23.5)
answer = multiply(answer, 2)
console.assert(answer === 47)

document.getElementById('addButton').addEventListener('click', function () {
    var x = document.getElementById('firstValue').value
    var y = document.getElementById('secondValue').value

    var answer = add(x,y)


    document.getElementById('firstValue').value = answer
    document.getElementById('secondValue').value = ''
})
document.getElementById('subButton').addEventListener('click', function () {
    var x = document.getElementById('firstValue').value
    var y = document.getElementById('secondValue').value

    var answer = subtract(x,y)


    document.getElementById('firstValue').value = answer
    document.getElementById('secondValue').value = ''
})
document.getElementById('divButton').addEventListener('click', function () {
    var x = document.getElementById('firstValue').value
    var y = document.getElementById('secondValue').value

    var answer = divide(x,y)


    document.getElementById('firstValue').value = answer
    document.getElementById('secondValue').value = ''
})
document.getElementById('multButton').addEventListener('click', function () {
    var x = document.getElementById('firstValue').value
    var y = document.getElementById('secondValue').value
    var answer = multiply(x,y)
      document.getElementById('firstValue').value = answer
      document.getElementById('secondValue').value = ''
})
document.getElementById('clearButton').addEventListener('click', function () {
      document.getElementById('firstValue').value = ''
      document.getElementById('secondValue').value = ''
})
