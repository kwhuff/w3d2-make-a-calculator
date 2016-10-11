// console.log(name)
// var name= 'Kyle'
// console.log("what's up?")
//
// function whatsUp(){
//   var name = "Katie"
//   function sayHello(){
//
//   }
//   console.log('what is up?')
// }
//
// whatsUp()

var mph1 = 10
var hours1 = 5
var distance1 = mph1 * hours1

var mph2 = 19
var hours2 = 5
var distance2 = mph2 * hours2

var mph3 = 25
var hours3 = 5
var distance3 = mph3 * hours3

// console.log(distance1, distance2, distance3)

function distance(mph, hours){
  // return 'Kyle'
  // return true
  if (mph > 65){
    // console.log('Warning: Too Fast!')
    return 'Warning: TOO FAST! No way ou will get distance from us.'
  }

  return mph * hours
  console.log('Not going to see me.') //nothing after 'return' runs
}
// console.log(distance(65))

// var distanceTraveled = distance(55, 2)
// distanceTraveled = distanceTraveled + distance(80, 16)
// distanceTraveled = distanceTraveled + distance(25, .25)
//
// console.log(distanceTraveled)
var movie = 'Forrest Gump'

// var year = 1995


// if (movie ==='Forrest Gump') {
//   console.log('Life is like a box of chocolates')
// }
// else if (movie === "Groundhog Day"){
//   console.log('Repeat.')
// }
// else if (movie === "Star Wars"){
//   console.log('Luke, I am your father.')
// }
// else{
//   console.log(movie + ' is awesome!')
// }

// switch (movie) {
//   case 'Forrest Gump':
//   console.log('Bubba Gump Shrimp Company')
//   break
//   case 'Groundhog Day':
//   console.log('Just put your little hand in mine.')
//   break
//   case 'Star Wars':
//   console.log('Use the force!')
//   default:
//   console.log(movie + ' is worth seeing!')
// }

// console.log(9 % 3)

// if (51 % 5) {
//   console.log('Yes it is divisable by three.')
// }

// var list = ['Sally','Tom','Joel','Kyle','Troy','Manny','Sam','Whitney','Jeff','Brian','Young Mi','Keith','Charlie']
//
// for (var i = 0; i < list.length; i++){
//   console.log(list[i])
// }
//
// for (var i = 0; i<100; i++){
// console.log(`<div id="Row ${i}" class="row"><div class="col-sm-12"></div></div>`)
// }
var total = 0

for (var i=0; i<300; i++){
  total += i

  // document.querySelector('.container').innerHTML += `<button class="btn btn-primary btn-lg">Button${i}</button`
}
// console.log(total)
function sayHello(greeting){
  return greeting
}
console.assert(sayHello('Hello') === 'Hello')
