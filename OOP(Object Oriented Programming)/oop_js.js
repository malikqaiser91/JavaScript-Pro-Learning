/* 
    Plain Old JavaScript Object(POJO):
    JavaScript Object:
    All javascript object keys get stringified.
    const o1 = {}
    const 02 = new Object{}

    01.name = 'Micky'
    01['name'] = 'Micky'
    01[1] = 'hello'
    01['1'] = 'goodbye'

const pet = { species: 'D', name: 'Elton', age: 1.5 }
const key = 'species'

console.log(pet[key])
console.log(pet.key) // properties that don't exist evaluate to undefined.
console.log(pet['newKey'])

const person = {
  name: 'Micky Author',
  sayHi() {
    return 'Hi!'
  },
}

person[1] = 'Hello'
person['1'] = 'Good bye'

person[true] = 'hey!'

console.log(person[true])
console.log(person.true)

person.friends = []
person.bark = function () {
  return 'WOOF WOOF !!!'
}

console.log(person.bark())

// This gets a bit messy, though - all those functions to keep track off!
function getTriangleArea(a, b) {
  return (a * b) / 2
}

function getTriangleHypotenuse(a, b) {
  return Math.sqrt(a ** 2 + b ** 2)
}

console.log(getTriangleArea(3, 4))
console.log(getTriangleHypotenuse(3, 4))

console.log(getTriangleArea(5, 12))
console.log(getTriangleHypotenuse(5, 12))

// using a POJO - we can fix functionality and data but it is tidy, annoying because we are repeating same information.
// this reference 'this object'
let myTri = {
  a: 3,
  b: 4,
  getArea: function () {
    return (this.a + this.b) / 2
  },
  getHypotenuse: function () {
    return Math.sqrt(this.a ** 2 + this.b ** 2)
  },
}

myTri.a = 5
myTri.b = 12

console.log(myTri)

console.log(myTri.getArea())
console.log(myTri.getHypotenuse())

// Classes:
// Classes are a "blueprint" of functionality:
// this refer to instance of the class(the object creating the class.)

class Triangle {
  getArea() {
    return (this.a * this.b) / 2
  }
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2)
  }
}
const firstTri = new Triangle()
firstTri.a = 3
firstTri.b = 4

const secondTri = new Triangle()
secondTri.a = 5
secondTri.b = 12

console.log(secondTri)

console.log(secondTri.getHypotenuse())

// class should be UpperCamelCase like TriangleClass

console.log(firstTri instanceof Triangle)
 
// Constructor: validate data , assigning properties
// constructor function always return undefined
// Automatically called when create new triangle
class Triangle {
  constructor(sideA, sideB) {
    if (!Number.isFinite(sideA) || sideA <= 0)
      throw new Error(`Invalid a: ${sideA}`)
    if (!Number.isFinite(sideB) || sideB <= 0)
      throw new Error(`Invalid a: ${sideB}`)
    this.a = sideA
    this.b = sideB
  }
  getArea() {
    return (this.a * this.b) / 2
  }
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2)
  }
  sayHi() {
    return 'HELLO FROM A TRIANGLE.'
  }
}

const newTri = new Triangle(5, 12)

const badTri = new Triangle(true, 'asas')

// Practical Time
class BankAccount {
  constructor(accountHolder, accountName, balance = 0) {
    this.balance = balance
    this.accountHolder = accountHolder
    this.accountName = accountName
  }
  deposit(amt) {
    if (amt <= 0) throw new Error(`Can't deposit a negative amount!`)
    this.balance = this.balance + amt
    console.log(
      `Amount Deposited Successfully, Your new balance is ${this.balance}`
    )
  }
  withdraw(amt) {
    if (amt >= this.balance) throw new Error(`Can't withdraw amount!`)
    this.balance = this.balance - amt
    console.log(
      `Amount withdraw Successfully, Your new balance is ${this.balance}`
    )
  }
}

const coltAccount = new BankAccount('Colt Steeve', '123abc')
console.log(coltAccount)
coltAccount.deposit(200)
coltAccount.withdraw(50)

const toddAccount = new BankAccount('Todd Margaret', '123', 600)
const a = new BankAccount('James Dean', '123')

// Instance Methods:
// Functions places in a class are called Method.
// Instance method are specific to an object.
class Triangle {
  constructor(a, b) {
    this.a = a
    this.b = b
  }
  getArea() {
    return (this.a * this.b) / 2
  }
  describe() {
    return `The triangle with side A of ${this.a} and side B of ${
      this.b
    } and with an area of ${this.getArea()}`
  }
}

const newTri = new Triangle(23, 10)

console.log(newTri.describe())

// Inheritance
// super keyword
class Triangle {
  constructor(a, b) {
    this.a = a
    this.b = b
  }
  getArea() {
    return (this.a * this.b) / 2
  }
  getHypotenuse() {
    return Math.sqrt(a ** 2 + b ** 2)
  }
  describe() {
    return `The triangle with side A of ${this.a} and side B of ${
      this.b
    } and with an area of ${this.getArea()}`
  }
}
// child class or sub-class inherit from parent or super class
class ShyTriangle extends Triangle {
  describe() {
    return '(run and hides.)'
  }
  beShy() {
    return 'I am shy!'
  }
}

const newShyTri = new ShyTriangle(23, 10)

console.log(newShyTri.describe())
console.log(newShyTri.getArea())
console.log(newShyTri.beShy())

// different constructor using super keyword
class Triangle {
  constructor(a, b) {
    this.a = a
    this.b = b
  }
  getArea() {
    return (this.a * this.b) / 2
  }
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2)
  }
  describe() {
    return `The triangle with side A of ${this.a} and side B of ${
      this.b
    } and with an area of ${this.getArea()}`
  }
}

class ColorTriangle extends Triangle {
  constructor(a, b, color) {
    // call parent constructor w/(a,b)
    super(a, b)
    this.color = color
  }
}

class ColorHappyTriangle extends ColorTriangle {
  constructor(a, b, color, mood) {
    super(a, b, color)
    this.mood = mood
  }
}

const color = new ColorTriangle(2, 3, 'red')
const colorMood = new ColorHappyTriangle(23, 10, 'HAPPY')

console.log(colorMood.getHypotenuse())

//  Static Properties and Static Methods:
// Modern Js also offers "static properties", where individuals pieces of data are on the class, not on instances.
// Other OO languages often call this idea a 'class attribute'.

class CatWithStaticProp {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  }
  static species = 'feline cats'
  describe() {
    return `${this.name} is a ${CatWithStaticProp.species}`
  }
}

const myCat = new CatWithStaticProp('blue', 'scottish fold')

console.log(myCat.describe())

// Static Methods: is a method that is called on a class , not an object therefore it cannot have access to individual object attributes.
// In other languages, they are called 'class methods' not static methods.
class CatWithStaticMethod {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  }

  static species = 'felis catus'

  static meow() {
    console.log(`This is: ${this}`)
    return `The ${this.breed} cat says MEOW MEOW MEOW!!!`
  }
}

const blue = new CatWithStaticMethod('cat', 'scottish fold')

console.log(CatWithStaticMethod.meow())
*/
// Use Cases for static Methods:
// Two most important use-cases
// 1): use static methods to group functionality that relate to each other , like building API class to group together related API'S.
// 2): use static methods to generate new instances

class MyMath {
  static add(a, b) {
    return a + b
  }
  static subtract(a, b) {
    return a - b
  }
  static multiply(a, b) {
    return a * b
  }
}

//  Factory method: help in creation of new instance of a class.

const choice = (arr) => {
  const ranIndex = Math.floor(Math.random() * arr.length)
  return arr[ranIndex]
}

class Cat {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  }
  meow() {
    return `${this.name} says meow.`
  }
  static registerStray() {
    const names = ['Muffin', 'Biscuit', 'Sleepy', 'Dodo', 'Princess Butterface']
    const name = choice(names)
    return new Cat(name, 'unknown')
  }
}

// console.log(Cat.registerStray())

class User {
  static registerUser(username, password) {
    return 'user registered.'
  }
}
