/* 
    THIS KEYWORD:
*/

const person = {
  name: 'Conan',
  city: 'Los Angeles',
  sing() {
    return `${this.name} sings LA LA LA !!!`
  },
}

const pSing = person.sing

console.log(pSing())
