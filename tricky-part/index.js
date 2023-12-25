/* 
            Numbers:
            * Floating Point Impression:
                JS represents numbers as floating point, like 1.234 . 
                Sometimes, this leads to mildly imprecise results:
                    0.1 + 0.2 = 0.30000000000000004
console.log(0.1 + 0.2 === 0.30000000000000004)
console.log(0.1 + 0.2 === 0.3)

const areFloatEqual = (a, b, epsilon = 1e-10) => {
  return Math.abs(a - b) < epsilon
}
console.log(areFloatEqual(0.3, 0.1 + 0.2))

        Big Numbers:
        Largest Number in JS: 1.7976931348623157e+308
        Largest safe number in js : 9007199254740991
console.log(Number.MAX_VALUE)
console.log(Number.MAX_SAFE_INTEGER)

        Separate type introduce in JS to deal with big numbers i-e:
        BigInt
        uses: BigInt(''), taking a number and adding n at the last like 1212312312312n

        There is no support for floats or decimals in bigInt.
        console.log(0.123123n) x
        console.log(1.232n)    x

const largeNum = Number.MAX_SAFE_INTEGER
// console.log(largeNum + 2)
const bigBoy = 1231231231231231231212312123123131312123123n
// console.log(typeof bigBoy)
const maxSafeNumber = BigInt(Number.MAX_SAFE_INTEGER)
// console.log(maxSafeNumber + 2n)
// console.log(Math.sqrt(2n)) Not supported
                Not a number(NaN): 
                JavaScript NaN value can be tricky. It often comes from:
                    * Logical Math errors like 0/0
                      console.log(1 / 'hello world')
                All NaN values are considered unique, so NaN === NaN is false.
                If you need to check for NaN, there are two different ways:
                    console.log(0 / 0 === 0 / 0)

console.log(isNaN(0 / 0))
console.log(isNaN(0 / 1))
console.log(isNaN('hello world'))

console.log(isNaN(false))
console.log(isNaN([]))
console.log(isNaN({}))

console.log(Number(false))
console.log(Number([]))
console.log(Number({}))


console.log(Number.isNaN(0 / 0))
console.log(Number.isNaN('hello world'))
console.log(Number.isNaN('0'))

        Post and Pre Increment: 
        x++ post increment => evaluate the expression first and then add the value.
        ++x pre increment => add the value first and then evaluate the expression.
        There is a difference between x++ and ++x.

let x = 1
x++
console.log(x++)
console.log(x)

let x = 2
let y = x++ // in the post increment , the current value of x will be used in the current expressions.

console.log(y)
console.log(x)

// Post increment will evaluate or run the expression and then increment the value.
let y = 5
console.log(y++) // 5
console.log(y) // 6

// Pre increment will first increment the value and then run the expression.
let x = 5
console.log(++x) // 6
console.log(x) //  6

class Counter {
  current = 1
  next() {
    return --this.current
  }
}

const counter = new Counter()
console.log(counter.next())
console.log(counter.next())
console.log(counter.next())

                Semicolons in JS:
                 We can write JS with or with semicolons;
                 if we omit them , they will be inserted by JS in a process
                 known as ASI, automatic semicolon insertion.

                Mostly, this means it works, either way - but there are some edges.

console.log('hello')
;[x, y] = [1, 2]
console.log(x)
console.log(y)

function blah() {
  return {
    name: 'hello world',
  }
}

            Generators and yield:
                JavaScript can have generator functions => functions that return a Generator that can be lazily looped over:
                Function that can pause their execution and then resume their execution.
                Allow us to produce sequence of values on demands.

function* even(n) {
  while (true) {
    yield n
    n += 2
  }
}
const evenGen = even(10)

console.log(evenGen.next())
console.log(evenGen.next())
console.log(evenGen.next())


function* myCats() {
  yield 'Blue'
  yield 'Kitty'
  yield 'Cream'
  yield 'Creedence'
}

const catGen = myCats()

console.log(catGen.next())
console.log(catGen.next())
console.log(catGen.next())
console.log(catGen.next())
console.log(catGen.next())

// Fibonacci series
function* fibonacci() {
  let a = 0,
    b = 1
  while (true) {
    yield a
    ;[a, b] = [b, a + b]
    // a = b
    // b = a + b
  }
}
const fibGen = fibonacci()

for (let i = 0; i < 20; i++) {
  console.log(fibGen.next().value)
}

            Uses of JavaScript Generators:

const allImages = Array.from(
  { length: 1000 },
  (_, i) => `http://placeimg.com/640/480/any?image=${i}`
)

function* getBatchOfImages(images, batchSize = 10) {
  let currIndx = 0
  while (currIndx < images.length) {
    yield images.slice(currIndx, currIndx + batchSize)
    currIndx += batchSize
  }
}

const imageGen = getBatchOfImages(allImages)

console.log(imageGen.next().value)
console.log(imageGen.next().value)
console.log(imageGen.next().value)
console.log(imageGen.next().value)
console.log(imageGen.next().value)


                    Array.from()
                        Help us generating new array from some sort of non-array

const arr = Array.from('hello')
const arr2 = Array.from([1, 2, 3, 4, 5])
const arr3 = Array.from(new Set([1, 2, 3, 4, 5]))

console.log(arr)
console.log(arr2)
console.log(arr3)

const buttons = document.querySelectorAll('button')
const arr = Array.from(buttons).map((val) => val)

console.log(arr)

const val = Array.from(
  {
    length: 10,
  },
  (x, i) => `${i} ${x}`
)
console.log(val)

const numSet = new Set([1, 2, 3, 4, 5, 6])
const arr = Array.from(numSet, (n) => n + 1)

console.log(numSet)
console.log(arr)

const bigArray = Array.from(
  {
    length: 1000,
  },
  (_) => 'LOL'
)
console.log(bigArray)
*/

const arr = Array.from({ length: 100 }, (_, i) => i + 1)

console.log(arr)
