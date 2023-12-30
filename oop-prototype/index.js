/* 
    JavaScript Object Oriented Programming Under the Hood using prototypes:
    1) new keyword:
        * creates an empty object.
        * sets the keyword this to be that object.
        * return the object - return this.

class Dog {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  }
  bark() {
    return 'WOOF!!!'
  }
}
const dog = new Dog('Elton', 'Aussie')

        Constructor Functions:
            Start with the capital name.
            It would generate objects.
            Function generally used in javascript to generate objects for us, that we use in conjunction with the keyword 'new'.

function Dog(name, breed) {
  console.log('This is:', this)
  this.name = name
  this.breed = breed
}

const dog = new Dog('Wyatt', 'Golden')

function User(username, email) {
  this.username = username
  this.email = email
  this.isAdmin = false
}

const colt = new User('colt', 'colt@gmail.com')
console.log(colt)

    2) Create a link to the object prototype:

class Dog {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  }
  bark() {
    return `${this.name} says WOOF!!!`
  }
  sleep() {
    return `${this.name} is sleeping`
  }
}
const elton = new Dog('elton', 'aussie')
console.log(elton.bark())
In classes, every methods is not linked with objects, but in constructor functions , they are linked to every new object
created from constructor function.

function Dog(name, breed) {
  this.name = name
  this.breed = breed
  this.bark = function () {
    return `${this.name} says WOOF!!!`
  }
  this.sleep = function () {
    return `${this.name} is sleeping!`
  }
}
const elton = new Dog('elton', 'aussie')
console.log(elton.bark())

Prototypes are the basic mechanisms that gives javascript object the ability to inherit features and functionality from each other.
Every javascript object has it's basic build-in property which is called it's prototype.
Prototype is a object.

const myObj = {
  color: 'purple',
  score: 99,
  greet() {
    console.log('hi!')
  },
}

const nums = [1, 2, 3]

console.log(myObj.__proto__)
console.log(nums.__proto__)


class Dog {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  }
  bark() {
    return `${this.name} says WOOF!!!`
  }
  sleep() {
    return `${this.name} is sleeping`
  }
}

const walton = new Dog('walton', 'aussie')
const elton = new Dog('elton', 'aussie')

console.log(walton.__proto__)
console.log(elton.__proto__)
Creates a link to the object's  prototype,
    * Every function has a property on it called prototype.
    * The prototype object has a property called constructor which points back to the object.
    * constructor is just a reference on the prototype object to the constructor function.
    * when we use the new keyword to invoke the function, a link between the object created from new and the prototype object is established.

function Dog(name, breed) {
  this.name = name
  this.breed = breed
}
Dog.prototype.bark = function () {
  return `${this.name} says WOOF!!!`
}
Dog.prototype.sleep = function () {
  return `${this.name} is sleeping!`
}

const elton = new Dog('elton', 'aussie')
// console.log(elton.__proto__) // it's prototype link is set to the constructor function Dog.

console.log(new elton.constructor('Bilbo', 'pug'))

          //  Prototype Chain:

const grandParent = {
  greet() {
    return 'Hi there!'
  },
}

const parent = {
  color: 'purple',
  sing() {
    return 'LA LA LA'
  },
  __proto__: grandParent,
}
const child = {
  num: 2,
  __proto__: parent,
  // obj: parent,
}

console.log(child.__proto__)
console.log(child.sing())
console.log(child.color)

console.log(child.greet())
// console.log(child.__proto__.__proto__.__proto__)
console.log(child.toString())

function Dog(name, breed) {
  this.name = name
  this.breed = breed
}

Dog.prototype.bark = function () {
  return `${this.name} says woof!`
}

Dog.prototype.sleep = function () {
  return `${this.name} is sleeping!`
}

// console.log(new Dog('Elton', 'Aussie').__proto__.__proto__)
// console.log(new Dog('Elton', 'Aussie').toString())
        Classes, Inheritance and Prototypes:  
class Dog {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  }
  bark() {
    return `${this.name} says woof!`
  }
  sleep() {
    return `${this.name} is sleeping!`
  }
}

// Inheritance
class GuideDog extends Dog {
  constructor(name, breed, owner) {
    super(name, breed)
    this.owner = owner
  }
  alert() {
    return `${this.name} alert you to danger. Good dog!`
  }
}

const maggieDog = new GuideDog('Chaco', 'Aussie', 'Maggie')

// console.log(maggieDog.__proto__.__proto__)
// console.log(maggieDog.__proto__)
// console.log(maggieDog.__proto__.__proto__)
console.log(maggieDog.__proto__.__proto__.__proto__)
console.log(maggieDog.__proto__.__proto__.__proto__.__proto__)
Prototype is a object where shared functionality can live.
By prototype chain , we can enable the inheritance.
        Difference between prototype and __prototype__
        Prototype is used when we are adding methods exclusively to the prototypes, so that every instance of object will point to the Dog function that has bark and sleep on it.
        __proto__ is an internal property of an object pointing to it's prototype object, used by js under the hoods.

function Dog(name, breed) {
  this.name = name
  this.breed = breed
}

Dog.prototype.bark = function () {
  return `${this.name} says woof!`
}

Dog.prototype.sleep = function () {
  return `${this.name} is sleeping!`
}

console.log(Dog.prototype)

    Useful prototype methods:
*/
// Object.create
const person = {
  greet() {
    return 'Hello!'
  },
  isHuman: true,
}

const tom = Object.create(person)
tom.firstName = 'tom'
// console.log(tom.greet())
// console.log(tom.greet())

// console.log(tom.firstName)

// Object.getPrototypeOf => gives us the parent prototype
// console.log(Object.getPrototypeOf(tom))

// Object.setPrototypeOf
// Object.setPrototypeOf(tom, { isHuman: false })
// console.log(tom.greet())

// isPrototypeOf
// console.log(tom.isPrototypeOf(tom))
const ling = Object.create(person)
ling.firstName = 'ling'

console.log(person.isPrototypeOf(ling))
