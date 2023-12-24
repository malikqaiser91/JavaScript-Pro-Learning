/*
        setTimeout:
            Executes a function after waiting a specified number of milliseconds.

setTimeout(() => {
  console.log('Hello World !')
}, 4000)

const showNotification = (message, duration) => {
  const notification = document.createElement('div')
  notification.innerText = message
  notification.className = 'notification'
  document.body.append(notification)
  setTimeout(() => {
    notification.remove()
  }, duration)
}

showNotification('You are logged In!', 3000)
showNotification('Please come again!', 2000)

            setInterval:
            Executes a function repeatably, with a fixed time delay between each call.

setInterval(() => {
  console.log('Running...')
}, 1000)
            clearInterval:
                Clears an interval set with setInterval, stopping the function from executing repeatably
                We have to provide a interval id

const startCountDown = (duration) => {
  let secondsRemaining = duration
  const h1 = document.getElementById('timer')
  h1.innerText = secondsRemaining
  const intervalId = setInterval(() => {
    h1.innerText = secondsRemaining
    secondsRemaining -= 1
    if (secondsRemaining < 0) {
      clearInterval(intervalId)
      h1.innerText = 'Time is up!'
    }
  }, 1000)
}
startCountDown(3)

            clearTimeout:
                Clear a timeout set with setTimeout, preventing the function from executing
                clearTimeout(myTimeout)
const greet = () => {
  console.log('HELLO!!!')
}
const mySetTimeout = setTimeout(greet, 10000)
clearInterval(mySetTimeout)
console.log('The timeout has been canceled')

const cancelButton = document.getElementById('cancel')
// http://127.0.0.1:5500/timers/index.html

const timeOutId = setTimeout(() => {
  window.location.href = 'https://www.google.com'
}, 5000)

cancelButton.addEventListener('click', () => {
  clearTimeout(timeOutId)
  console.log('Redirection has been aborted.')
})

        Debouncing:
          * Making sure a function is not called too frequently.
          * Eventually adding a pause before some function is run.
          * Common use cases are events.

const queryAPI = () => {
  console.log(`Making an API request!!`)
}

const searchInput = document.getElementById('search')

let debounceTimeout
searchInput.addEventListener('input', () => {
  clearTimeout(debounceTimeout)
  debounceTimeout = setTimeout(() => {
    queryAPI()
  }, 400)
})
    Debounce fancy function: 


const queryAPI = (searchTerm) => {
  console.log(`Searching the API for: ${searchTerm}`)
}

const searchInput = document.getElementById('search')

const debounce = (callback, delay) => {
  let timeoutId
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => callback(...args), delay)
  }
}
const debouncedQueryAPI = debounce(queryAPI, 400)

searchInput.addEventListener('input', (evt) => {
  debouncedQueryAPI(evt.target.value)
})

          Throttling:
            Throttling is a technique to make sure a function is called at most one time within some durations
let isThrottled = false
window.addEventListener('scroll',()=>{
  if(!isThrottled) {
    loadMoreItems()
    isThrottled = true 
    setTimeout(()=>{
        isThrottled = false
    },300)
  }
})
*/
