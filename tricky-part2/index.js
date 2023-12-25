/* 
            Scope and Closure:
                VAR: (var is function scope)
                var is scope globally
                * If we define var global , it is accessible everywhere.
                * If we define it in condition like if/else,loop etc, it is also 
                accessible globally.
                * If we define it in function, it is accessible only in the function.
                * We can redeclare variables using var.
var color = 'green'

function blah() {
  console.log(color)
  var animal = 'Cuttlefish'
  console.log(animal)
}

blah()
// console.log(animal)

if (true) {
  console.log('"Inside condition"')
  console.log(color)
  var food = 'Chicken Parmesan'
}
console.log(food)

for (var i = 0; i < 10; i++) {
  console.log(i)
}
console.log('After the loop is over:', i)

            LET AND CONST(new addition in JS in ES6):
                we can reassign variable using let.
                const allow us to define a constant variable that can't be reassign.

                Variables define using let and const keyword are not added to the window object.
                Let and Const variables are block scope.

var color = 'teal'
var origin = 'Ethiopia'

let age = 0
age++

let origin = 'Ethiopia'
let color = 'purple'
const city = 'Lisbon'

function blah() {
  let sport = 'Football'
  console.log(sport)
}

// console.log(sport)

if (true) {
  let food = 'pizza'
  let animal = 'cat'
  console.log('IN THE CONDITION:')
  console.log(food)
  console.log(animal)
}
// console.log(food)
// console.log(animal)

for (let i = 0; i < 3; i++) {
  console.log('INSIDE THE LOOP', i)
}

// console.log('After the loop', i)

*********************************************************************************************************
                SCOPE CHAIN:
                    When we use variables in some lines of code, javascript will try to find the value for that variables in the following scopes:
                    1) Local scope.
                    2) Any outer function.
                    3) Global scope

let age = 10
function outer() {
  let age = 'ageless'
    if (true) {
      let age = 99
      console.log(age)
    }
  function inner() {
    let age = 'Eternal'
    function superInner() {
      const age = 23
      console.log(age)
    }
    superInner()
  }
  inner()
}
outer()
*********************************************************************************************************
                    Static Scope(Lexical Scope):
                        JavaScript is static scope or lexical scope language.
                        Don't have to worry about how our code is being called.

                        The scope of the variable is not dependent on where it is called.

let animal = 'Barn Owl'
function printAnimal() {
  console.log(animal)
}

function alsoPrintAnimal() {
  let animal = 'Burrowing Owl'
  printAnimal()
}

alsoPrintAnimal()
*********************************************************************************************************
                        Hoisting:
                            *   Hoisting is the behavior of javascript of moving our variables and functions declaration 
                                to the top of their enclosing scope(which may be global scope) during the compilation phase.
                            *   So the variable is legal, but equal to undefined until definition.

                            * var variable declarations are pulled to the top of their function.

var food = undefined
console.log(food)
food = 'pizza'

function blah() {
  var color = undefined
  console.log(color)
  color = 'black'
}
blah()

console.log(food)
let food = 'pizza'


// Variables declare with var and const are technically hoisted, but we can't access it , it has not been initialized at all.
// Js not allow to use that variable until that original line run where we declare it.
function blah() {
  // let color = NO VALUE AT ALL
  // TEMPORAL DEAD ZONE STARTS
  console.log(color)
  //   Reference Error: Cannot access 'color'
  let color = 'black'
  //   TEMPORAL DEAD ZONE ENDS
}
blah()

function blah() {
  if (false) {
    var message = 'hello'
  }
  console.log(message) // undefined, might be unexpected if unaware of hoisting.
}
blah()

*********************************************************************************************************
                        IIFE(Immediately Invoked Function Expression):

;(function () {
  let secret = 10
  console.log(`Secret is ${secret}`)
})()
;(function () {
  let origin = 'brazil'
  console.log(`Origin is ${origin}`)
})()

*********************************************************************************************************
                    Closures in JS:
                        * A function define inside a function that have access to the outer function variables and parameters.
                        * The ability for inner functions to remember variables defined in outer functions, long after 
                          the outer function has returned
                        * So a closure is created when a function is defined inside an another function, and that allows the 
                          inner function to access variables from outer functions even outer outer function has finished executing.

function outerFunction() {
  let outerVar = 'I am from outer'
  function innerFunction() {
    console.log('I AM THE INNER FUNCTION')
    console.log(`Outer variable is "${outerVar}"`)
  }
  return innerFunction
}

const myClosure = outerFunction()

myClosure()

function idGenerator() {
  let count = 1
  function generate() {
    return count++
  }
  return generate
}

const getId = idGenerator()
console.log(getId())
console.log(getId())
console.log(getId())
console.log(getId())
console.log(getId())
console.log(getId())

let count = 1
function nextId() {
  return count++
}

console.log(nextId())
console.log(nextId())
console.log(nextId())
console.log(nextId())
console.log(nextId())

        One of the benefits of closure is that they allows us to create private variables.

function createCounter() {
  let count = 0
  return {
    increment: function () {
      return count++
    },
    decrement: function () {
      return count--
    },
    getCount: function () {
      return count
    },
  }
}

const myCount = createCounter()
console.log(myCount.increment())
console.log(myCount.increment())
console.log(myCount.decrement())
console.log(myCount.decrement())

const counter = (function () {
  let count = 0
  return {
    increment: function () {
      return count++
    },
    decrement: function () {
      return count--
    },
    getCount: function () {
      return count
    },
  }
})()

console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.getCount())

            Closure Factory Function:


function createExponentFunction(exp) {
  return function (val) {
    return val ** exp
  }
}

const square = createExponentFunction(2)
const cube = createExponentFunction(3)

console.log(square(2))
console.log(cube(3))

function uniqueIdGenerator(prefix) {
  let id = 0
  return function () {
    id++
    return `${prefix}-${id}`
  }
}

const userIdGenerator = uniqueIdGenerator('user')
const bookIdGenerator = uniqueIdGenerator('book')

console.log(userIdGenerator())
console.log(userIdGenerator())

console.log(bookIdGenerator())
console.log(bookIdGenerator())

// Having some outer functions that have some variables and parameters , different values and inner function have still have access to those because of the way scope chain work 


****************************************************************************************************************************
                    Closure in Events Listeners:

const btn = document.getElementById('btn')

let count = 0
btn.addEventListener('click', function () {
  count++
  console.log(`You clicked me ${count} times.`)
})


const btn = document.getElementById('btn')

btn.addEventListener(
  'click',
  (function () {
    let count = 0
    return function () {
      count++
      console.log(`You clicked me ${count} times.`)
    }
  })()
)

function createCounterButton(id) {
  const btn = document.getElementById(id)
  let count = 0
  btn.addEventListener('click', function () {
    count++
    btn.innerText = `Clicked ${count} times.`
  })
}

createCounterButton('btn1')
createCounterButton('btn2')
createCounterButton('btn3')


        Closure allows to avoid global variables.

****************************************************************************************************************************
                            Closure Loops:
setTimeout(() => {
  console.log('TIMES UP!')
}, 2000)


for (var i = 1; i < 6; i++) {
  ;(function (j) {
    setTimeout(() => {
      console.log(j)
    }, 1000 * j)
  })(i)
}

// Result will be 6 for all the loop


for (let i = 1; i < 6; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000 * i)
}
*/
