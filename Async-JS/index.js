/*
    Asynchronous JavaScript:
    1) Callback Function:
        A callback function is a function passed to another function, and it is invoked into that function , for it to call.
        They are used for many things in JS.
        They are used for following purposes:
            1) Functional programming patterns like array function filters , map etc.
                const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

                const eventNumber = numbers.filter((num) => num % 2 === 0)

                console.log(eventNumber)
            2) Event Driven Programming , most commonly working with DOM events.
                register a function to be called when an event happens.
                const btn = document.querySelector("#btn")
                function sayHi(){
                    alert('Hello')
                }
                btn.addEventListener("click",sayHi)
            3) Asynchronous code.
            call those callbacks when asynchronous operation completes.
                const sayHi = () => console.log('Hi!')

                setTimeout(sayHi, 3000)
                setInterval(sayHi, 1000)

            Callback will always be useful for event-driven programming and functional programming patters.

            ##############################################
            Callback Hell & The Pyramid of Doom:
                JavaScript is single-threaded, only one bit of code can run at once.
                We have to work with async code , and treat is specially

                Sequential code can lead to hard-to-understand code:
                This pyramid of doom also called callback hell.

                We can flatten that by using non-anonymous functions:

                ajaxLib.get('/step-1,function (req){
                    ajaxLib.get('/step-2',{req,body},function(res){
                        ajaxLib.get('/step-3',{res,body},function(data){
                            console.log('got final answer')
                        })
                    })
                })
        ##############################################
        Promises in JavaScript:
            Promises provide an alternative way to think about asynchronicity.
            A promise is one time guarantee of future value.
            Promises are future value , they are used to represent the eventual success or failure of an asynchronous operation. 
            They allowed us to write cleaner async code , compose and chain async operation together.
            Easier to handle errors , making it easier to handle complex async flow throughout our code.
            Fundamental part of modern javascript environment.

            Promise in JS is object.
            A promise can be in one of three states.
                1) Pending: It doesn't have the value yet.
                2) Resolved: It has successfully obtained a value.
                3) Rejected: Failed to obtain the value.

            const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
            const url = `${BASE_URL}/1`

            fetch(url).then((res) => res.json())
            fetch(url)
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(`Error : ${err}`))

            fetch(`${BASE_URL}/1`)
            .then((res1) => {
                console.log('Response 1', res1)
                fetch(`${BASE_URL}/2`)
                .then((res2) => {
                    console.log('Response 2', res2)
                })
                .catch((err) => console.log(`Err: ${err}`))
            })
            .catch((err) => console.log(`Err: ${err}`))

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
const url = `${BASE_URL}/1`

fetch(`${BASE_URL}/1`)
  .then((res1) => {
    console.log(`Response 1: ${res1}`)
    return fetch(`${BASE_URL}/2`)
  })
  .then((res2) => {
    console.log(`Response 2: ${res2}`)
    return fetch(`${BASE_URL}/3`)
  })
  .then((res3) => {
    console.log(`Response 3: ${res3}`)
    return fetch(`http://none.none/4`)
  })
  .then((res4) => {
    console.log(`Response 4: ${res4}`)
  })
  .catch((err) => console.log(`Err: ${err}`))

  ************************************************************************************************************************
                Async/Await:  
            * Async and Await are keywords for working with promises.
            * We can declare any function in JS as async function.
            * Async functions always return promises.
            * async function hello(){ return  'Hello' } => Promise 'pending'.
            * Inside an async function, we can use await keyword.
            * await pauses the execution.
            * Can await any promise(eg other async functions)
            * awaits wait for promise to resolve and evaluates to its resolved value.
            * It then resume execution.
            * Think of the await keyword like a pause button.



const url = `${BASE_URL}/1`

async function getFirstPokemon() {
  const res = await fetch(url)
  const data = await res.json()
  console.log(data?.weight)
}

getFirstPokemon()
try {
  console.bath('asdasd')
} catch (err) {
  console.log(err.message)
}

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

const getData = async () => {
  try {
    const res1 = await fetch(`${BASE_URL}/1`)
    const data1 = await res1.json()
    console.log(`Response 1: ${data1.weight}`)

    const res2 = await fetch(`${BASE_URL}/2`)
    const data2 = await res2.json()
    console.log(`Response 2: ${data2.weight}`)

    const res3 = await fetch(`${BASE_URL}/3`)
    const data3 = await res3.json()
    console.log(`Response 3: ${data3.weight}`)

    const res4 = await fetch(`${BASE_URL}/4`)
    const data4 = await res4.json()
    console.log(`Response 4: ${data4.weight}`)
  } catch (err) {
    console.log(`Err: ${err.message}`)
  }
}
getData()

const fetchFakeWebsites = async () => {
  try {
    const res = await fetch(`http://non.non`)
    const data = await res.json()
    console.log(`Response data`, data)
  } catch (err) {
    console.log(`Error: ${err?.message}`)
  }
}

fetchFakeWebsites()
****************************************************************************************************
            Comparing .then/catch and async/await
                * Under the hood, they do the same thing.
                * async/await are the modern improvement(Code can be written more naturally).
                * There are few cases when dealing with promises is preferable directly.

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
const results = []

fetch(`${BASE_URL}/1`).then(async (res1) => {
  const data = await res1.json()
  results.push(data.name)
  console.log('Request 1 completed')
})

fetch(`${BASE_URL}/2`).then(async (res2) => {
  const data = await res2.json()
  results.push(data.name)
  console.log('Request 2 completed')
})

fetch(`${BASE_URL}/3`).then(async (res3) => {
  const data = await res3.json()
  results.push(data.name)
  console.log('Request 3 completed')
})

console.log('Waiting for Requests to complete!')

        *** Many calls , Do things on return and don't block.


const getPokemonResult = async (num) => {
  const res = await fetch(`${BASE_URL}/${num}`)
  const data = await res.json()
  console.log(`Request ${num} finished: ${data.name}`)
}

console.log(`Waiting for requests to completed.`)
getPokemonResult(1)
getPokemonResult(2)
getPokemonResult(3)

// NEED TO MAKE AJAX calls one-at-a-time, in order

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
const results = []

fetch(`${BASE_URL}/1`)
  .then(async (res1) => {
    const data = await res1.json()
    results.push(data.name)
    console.log('Request 1 finished')
    return fetch(`${BASE_URL}/2`)
  })
  .then(async (res2) => {
    const data = await res2.json()
    results.push(data.name)
    console.log('Request 2 finished')
    return fetch(`${BASE_URL}/3`)
  })
  .then(async (res3) => {
    const data = await res3.json()
    results.push(data.name)
    console.log('Request 3 finished')
  })
  .catch((err) => console.log(`Err: ${err}`))

console.log('Waiting for result to finished....')

const getPokemonInSequence = async () => {
  const res1 = await fetch(`${BASE_URL}/1`)
  console.log('Request 1 finished')
  const res2 = await fetch(`${BASE_URL}/2`)
  console.log('Request 2 finished')
  const res3 = await fetch(`${BASE_URL}/3`)
  console.log('Request 3 finished')

  const results = [res1, res2, res3]
  console.log(results)
}
console.log(getPokemonInSequence())

************************ Many calls in sequence:

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

const data = [
  fetch(`${BASE_URL}/1`).then((res) => res.json()),
  fetch(`${BASE_URL}/2`).then((res) => res.json()),
  fetch(`${BASE_URL}/3`).then((res) => res.json()),
  fetch(`${BASE_URL}/4`).then((res) => res.json()),
  fetch(`${BASE_URL}/5`).then((res) => res.json()),
  fetch(`${BASE_URL}/6`).then((res) => res.json()),
]


Promise.all(data)
  .then((res) => {
    const data = res.map((pokemon) => pokemon.name)
    console.log(data)
  })
  .catch((err) => console.log(`Err: ${err.message}`))


const getLotsOfPokemon = async () => {
  try {
    const res = await Promise.all(data)
    console.log('All promises resolved successfully !')
    console.log(res.map((pokemon) => pokemon.name))
  } catch (err) {
    console.log(`One of the promise is rejected !`)
    console.log(`Err: ${err.message}`)
  }
}
getLotsOfPokemon()


    * Promise.allSettled accepts an array of promises and return a new promise.
    * The promise resolve after all of the given promises have either fulfilled or rejected, 
      with an array of objects that each describes the outcome of each promise.

const BASE_URL = 'https://api.github.com'

const getAllSettledDown = async () => {
  try {
    const eliteP = fetch(`${BASE_URL}/users/elite`)
    const joelP = fetch(`${BASE_URL}/users/joelburton`)
    const badUrl = fetch(`http://definatelynotarealsite.com`)
    const coltP = fetch(`${BASE_URL}/users/colt`)
    const anotherBadUrl = fetch(`http://definatelynotarealsite2.com`)

    const results = await Promise.allSettled([
      eliteP,
      joelP,
      badUrl,
      coltP,
      anotherBadUrl,
    ])
    const fulfilledPromises = results.filter(
      (promise) => promise.status === 'fulfilled'
    )
    const rejectedPromises = results.filter(
      (promise) => promise.status === 'rejected'
    )
    console.log(rejectedPromises)
  } catch (err) {
    console.log(`Error: ${err.message}`)
  }
}
getAllSettledDown()


// Many calls, First One Wins.
// Promise.race accepts an array of promises and return a new promise.
// This new promise will resolve or reject as soon as one promise in the array resolves or rejects.

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

const lotOfFetchCalls = [
  fetch(`${BASE_URL}/1`),
  fetch(`${BASE_URL}/2`),
  fetch(`${BASE_URL}/3`),
  fetch(`${BASE_URL}/4`),
  fetch(`${BASE_URL}/5`),
  fetch(`${BASE_URL}/6`),
]

Promise.race(lotOfFetchCalls)
  .then(async (data) => {
    const winner = await data.json()
    console.log(`Winner: `, winner.name)
  })
  .catch((err) => console.log(err.message))


// Building own promises:
// We can use Promise with the new keyword to make a new promise.
// Promise accept a single function as an argument.
// This function itself accept two functions arguments , resolve and rejects

const wait = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise is running')
    }, duration)
  })
}

const demo = async () => {
  console.log('Starting...')
  const val = await wait(2000)
  console.log(val)
  console.log('Ending...')
}

// demo()

wait(5000).then((val) => console.log(val))

const randomResolveReject = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random()
      if (random < 0.5) resolve('Pickles')
      else reject('Error!!!!')
    }, duration)
  })
}

randomResolveReject(3000)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  readFiles('poem1.txt')
  .then((res1) => {
    console.log(res1)
    return readFiles('poem2.txt')
  })
  .then((res2) => {
    console.log(res2)
    return readFiles('poem3.txt')
  })
  .then((res3) => {
    console.log(res3)
  })
  .catch((err) => console.log(err.message))
  */

const fs = require('fs').pro

const readFiles = async (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(`./${fileName}`, 'utf8', (err, data) => {
      if (err) reject(err.message)
      resolve(data)
    })
  })
}

const getFullPoem = async () => {
  try {
    const part1 = await readFiles('./poem1.txt')
    console.log(part1)
    const part2 = await readFiles('./poem2.txt')
    console.log(part2)
    const part3 = await readFiles('./poem3.txt')
    console.log(part3)
  } catch (err) {
    console.log(err.message)
  }
}

getFullPoem()
