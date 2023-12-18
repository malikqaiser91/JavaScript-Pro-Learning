/*
    Getters and Setters:
    JS provide special methods, termed "getters" and "setters", which allow you to define the ways to retrieve or change the
    value of object properties respectively.

    Getters:
    Allow you to retrieve the value of an object property.
    Will treat it as property.

    Setters:
    Allow you to set the value of an object property.

class Circle {
  static allowedColors = new Set(['red', 'green', 'pink', 'purple'])
  constructor(radius, color) {
    this.setRadius(radius)
    this.setColor(color)
  }
  get diameter() {
    return this._radius * 2
  }
  get radius() {
    return this._radius
  }
  get color() {
    return this._color
  }
  setColor(color) {
    if (!Circle.allowedColors.has(color))
      throw new Error(`${color} not allowed.`)
    this._color = color
  }
  setRadius(radius) {
    if (radius < 0) throw new Error(`Radius cannot be negative!`)
    this._radius = radius
  }
  set radius(value) {
    this.setRadius(value)
  }
  set color(value) {
    // if (!allowedColors.includes(value)) throw new Error(`${value} not allowed.`)
    this.setColor(value)
  }
}

const c = new Circle(10, 'pink')
// c._radius = 10
// console.log(c.diameter)
// console.log(c.radius)

c.radius = 23
c.color = 'pink'

const c2 = new Circle(23, 'green')

class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName
    this._lastName = lastName
  }
  set fullName(fname) {
    const [first, last] = fname.split(' ')
    this._firstName = first
    this._lastName = last
  }
  get fullName() {
    return `${this._firstName} ${this._lastName}`
  }
}

const person = new Person('Colt', 'Steeve')
person.fullName = 'Brad Traversy'

console.log(person.fullName)
console.log(person._firstName)
console.log(person._lastName)

        Class Fields(public and private):
        Private instance class fields provide a way to maintain encapsulation and not allow external access.
        static class fields are new introduction to js , 
        public class fields (can be access within the class but also outside the class.)

class Cat {
  static numOfCats = 0
  static species = 'flues cats'
  name
  breed
  numLegs = 4 // this is the public field on the instance of the cats.
  hasTail = true

  constructor(name, breed) {
    this.name = name
    this.breed = breed
    Cat.numOfCats++
  }
  amputate() {
    this.numLegs -= 1
  }
}

// console.log(Cat.numOfCats)
// const cat = new Cat('blue')
// const blue = new Cat('blue')
// console.log(Cat.numOfCats)

const blue = new Cat('blue', 'Scottish cat')
blue.amputate()
console.log(blue)

class Circle {
  #radius // private class field
  constructor(radius) {
    this.#radius = radius
  }
  get radius() {
    return this.#radius
  }
  set radius(value) {
    if (value < 0) throw new Error(`cannot set value ${value}`)
    this.#radius = value
  }
}

const c = new Circle(23)
// c.#radius = 10
console.log(c['#radius']) // private properties are not accessible outside class.
c.radius = 100
console.log(c.radius)

// Private Methods in a class
// Do not have to use class fields like define first and then use like private class fields
class MyClass {
  #privateMethod() {
    console.log(`Private method called!!!`)
  }
  publicMethod() {
    this.#privateMethod()
  }
}

const myClass = new MyClass()

// console.log(myClass.#privateMethod)
myClass.publicMethod()

// Static Initialization Blocks:
// This will run only one time when the class is loaded.
class MyClass {
  static {
    console.log('Class is loaded')
  }
}
// const myClass = new MyClass()
// const myClass1 = new MyClass()
// const myClass2 = new MyClass()
// const myClass3 = new MyClass()
// const myClass4 = new MyClass()

class DatabaseConnection {
  static connection
  static {
    process.env.NODE_ENV === 'development'
      ? this.loadDevConnection()
      : this.loadProductionConnection()
  }
  static loadProductionConnection() {}
  static loadDevConnection() {}
}
*/
