/* 
    New features of JavaScript:
        1) Optional Chaining:
            Allows reading the value of a property located deep within a chain of connected objects without having to check each reference in the chain.
const user = {
  firstName: 'Raj',
  lastName: 'Hamilton',
  age: 12,
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  },
  address: {
    street: '1234 Elma St',
    // city: 'Houston',
    state: 'Texas',
    country: 'USA',
    postalCode: undefined,
    coordinates: {
      lat: 23,
      long: {
        left: 23.2,
        right: 78.2,
      },
    },
  },
  greet() {
    return 'Welcome!'
  },
}

// console.log(user?.name?.firstName)
// console.log(user && user.address && user.address.city)

// optional chaining:
console.log(user?.address?.coordinates?.long?.left)

// optional chaining in functions:
const greet = user?.blah?.person?.greet?.()

console.log(greet)


            2) Nullish coalescing(??):
            It return it's right side value when it's left side value is null or undefined.
            This is a way to handle default values more predictably than using the OR(||) operator

const user = {
  name: 'Mark Williams',
  age: 0,
}

const firstName = user.name.firstName || 'Anonymous'
const age = user?.age ?? 'IDK THE AGE!'

console.log(firstName)
console.log(age)

                3)  Numeric Separator:
                Numeric separator enhance readability by allowing underscores to be inserted between digits in numeric literals
                1000000000 => 1_000_000_000


const withoutSeparator = 1000000000

const withSeparator = 1_000_000_000

console.log(withoutSeparator)
console.log(withSeparator)

                4)  Array.at
                    Allow us to get array entities


const colors = ['yellow', 'orange', 'black', 'purple', 'green']

const lastColor = colors.at(-1)
const secondLastColor = colors.at(-2)
const firstColor = colors.at(0)

console.log(lastColor)
console.log(secondLastColor)
console.log(firstColor)


                    5)  .replaceAll()
                            Allow us replace all the occurrences of a entity in a string.

const str = `I really love cats. My cat is such an amazing pet. She loves to cuddle with me and play.What a great CAT. cAt. cat.`
const newStr = str.replaceAll(new RegExp('cat', 'gi'), 'dog')
console.log(newStr)

                    5)  Logical Assignment:
                            Logical assignment are a combination of logical operators and assignment operators.
                            OR logical assignment ||= (Will assign the right value when the left side is falsy value)

                            AND logical assignment &&= (Will only assign the right side value when the left side is truly value)

                            Nullish coercing operator logical assignment ??= (if the value is null or defined , it will update it.)

const todo = {
  priority: 'High',
  task: 'Finish Editing Course',
}

// Logical OR
// console.log(todo.priority || (todo.priority = 'Medium')) Old way
// todo.priority ||= 'Medium'
// console.log(todo)

// Logical AND
let num = 10
num &&= 50
num &&= 100

num = null
num &&= 12

console.log(num)
let loggedInUser = {
  username: 'Taco',
}
loggedInUser &&= { ...loggedInUser, colorPreference: 'purple' }
console.log(loggedInUser)

let score
score ??= 23
score ??= 100
console.log(score)
const doSomeSetup = (options = {}) => {
  options.timeout ??= 3000
  options.retries ??= 5
  console.log(options)
}
doSomeSetup()

                Promise.any:
                    Promise.any takes an array of promises that's return the first fulfilled promise.
                    Promise.any is a new addition to js , that takes a literal, and will only rejected when all the 
                    promises are rejected , and resolve when the first promise is resolved.
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
Promise.any([
  fetch(`${BASE_URL}/1`),
  fetch(`http://none.none`),
  fetch(`${BASE_URL}/2`),
  fetch(`${BASE_URL}/3`),
  fetch(`${BASE_URL}/4`),
  fetch(`${BASE_URL}/5`),
  fetch(`${BASE_URL}/6`),
])
  .then((firstToFinish) => firstToFinish.json())
  .then((res) => console.log(res.name))
  .catch((err) => console.log(err?.message))
  */
