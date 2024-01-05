/* 
    LocalStorage:
        Allow web applications to store key-value pairs in a web browser persistently across sessions
    Restrictions:
        * 5 MB of data per domain or website(vary from browser to browser).
    To access local storage:
        localStorage

    To set local storage:
        localStorage('myKey','myValue')

    To retrieve value from local storage:
        localStorage.getItem('myKey')

    To remove some value form local storage:
        localStorage.removeItem('myKey')

    Wipe out entire local storage:
        localStorage.clear()

localStorage.setItem('color', 'magenta')
localStorage.setItem('username', 'colt')

const color = localStorage.getItem('color')

console.log(`My fav color is ${color}`)
// localStorage.clear()
// console.log('Score is ', score)

    Local Storage with complex objects:

localStorage.setItem('score', 2312)
const score = localStorage.getItem('score')

const numbers = [1, 2, 3, 4]
localStorage.setItem('nums', JSON.stringify(numbers))

console.log(JSON.parse(localStorage.getItem('nums')))

        What should and should not go in local storage!
            * local storage should only be used to store non-sensitive data.
            * non-sensitive data like passwords , user specific data should not be stored.
            * user preference should be stored in local storage, the actions of user.
            * partially filled out form.
            * shopping cart data.
            * caching data can be stored.
            * analytics data can be stored.
            * add tracking data can be stored.

            Local storage simple project:

const btn = document.getElementById('btnMode')

const toggleTheme = () => {
  const isDark = document.body.classList.contains('dark-mode')
  if (isDark) {
    localStorage.setItem('theme', 'light')
    document.body.classList.remove('dark-mode')
    btn.textContent = 'Enable Dark Mode'
  } else {
    localStorage.setItem('theme', 'dark')
    document.body.classList.add('dark-mode')
    btn.textContent = 'Enable Light Mode'
  }
}

const applySavedTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode')
    btn.textContent = 'Enable Light Mode'
  }
}

btn.addEventListener('click', toggleTheme)
applySavedTheme()


// Simples Notes Apps
const noteInput = document.getElementById(`noteInput`)
const saveNote = document.getElementById(`saveNote`)
const notesContainer = document.getElementById(`notesContainer`)

// const notes = ['Walk the dog', 'Remember to take the trash out']
// localStorage.setItem('notes', JSON.stringify(notes))

const createNoteElement = (content) => {
  const noteLi = document.createElement('li')
  noteLi.textContent = content
  notesContainer.append(noteLi)
}

const loadNotes = () => {
  const notes = JSON.parse(localStorage.getItem('notes')) ?? []
  notes?.forEach(createNoteElement)

  for (const note of notes) {
    createNoteElement(note)
  }
}

saveNote.addEventListener('click', () => {
  const note = noteInput.value?.trim()
  if (note === '') alert(`Please enter some text.`)
  createNoteElement(note)
  const notes = JSON.parse(localStorage.getItem('notes')) ?? []
  notes.push(note)
  localStorage.setItem('notes', JSON.stringify(notes))
  noteInput.value = ''
})

loadNotes()

    Syncing Tabs with the storage Events:

const btn = document.getElementById('btnMode')

const toggleTheme = () => {
  const isDark = document.body.classList.contains('dark-mode')
  if (isDark) {
    localStorage.setItem('theme', 'light')
    document.body.classList.remove('dark-mode')
    btn.textContent = 'Enable Dark Mode'
  } else {
    localStorage.setItem('theme', 'dark')
    document.body.classList.add('dark-mode')
    btn.textContent = 'Enable Light Mode'
  }
}

const applySavedTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode')
    btn.textContent = 'Enable Light Mode'
  } else {
    document.body.classList.remove('dark-mode')
    btn.textContent = 'Enable Dark Mode'
  }
}

window.addEventListener('storage', (e) => {
  if (e.key === 'theme') applySavedTheme()
})

btn.addEventListener('click', toggleTheme)
applySavedTheme()

      Session Storage:
        * Allow web applications to store key-value pairs in a web browser for a single session.
        * Every session is unique , when the user open a new window or tab of a browser , a new session is created, 
          nothing is share between tabs.
        * When the user close the tab or window, the session is deleted.
        * Less commonly used.
        * It persists the data on refreshes.
        * Once window is close , it is gone!
        * Things to do once per user session.
        * Size is around 5 MB
        
    sessionStorage.setItem('sessionKey','sessionValue')
    const sessionValue = sessionStorage.getItem('sessionKey')
    sessionStorage.removeItem('sessionKey')
    sessionStorage.clear()

  Session Storage use_case #01

const onPageLoad = () => {
  const val = 'Warning!!! we are shutting down our apps in 2 weeks.'
  if (!sessionStorage.getItem('warning')) {
    alert(val)
  }
  sessionStorage.setItem('warning', true)
}
onPageLoad()

Session Storage use_case #02

const searchInput = document.getElementById('search')

searchInput.addEventListener('input', (e) => {
  sessionStorage.setItem('searchField', e.target.value)
})

const pageLoad = () => {
  const searchField = sessionStorage.getItem('searchField') ?? ''
  searchInput.value = searchField
}
pageLoad()

const form = document.getElementById('checkoutForm')

form.addEventListener('input', (e) => {
  const { name, value } = e.target
  const formData = JSON.parse(sessionStorage.getItem('formData')) ?? {}
  formData[name] = value
  sessionStorage.setItem('formData', JSON.stringify(formData))
})

const populateForm = () => {
  const formData = JSON.parse(sessionStorage.getItem('formData')) ?? {}
  for (const field in formData) {
    form.elements[field].value = formData[field]
  }
}

populateForm()

            IndexedDB:
              * A low level API for storing structured data, including large datasets.
              * Not part of storage API.
              * It is like a server side database.
              * We can store gigabytes of information in it.
              * Support indexing and version schema.
              * It is asynchronous.
              * It is tied to particular website or domain.

const largeString = new Array(5 * 1024 * 1024 + 1).join('a')
localStorage.setItem('bigString', largeString)

const open = indexedDB.open('myFirstDB', 1)

open.onupgradeneeded = () => {
  const db = open.result
  db.createObjectStore('MyUserStore', { keyPath: 'id' })
}

open.onsuccess = () => {
  console.log(`success!`)
  const db = open.result
  const transaction = db.transaction('MyUserStore', 'readwrite')
  const store = transaction.objectStore('MyUserStore')

  // store.put({
  //   id: 1,
  //   username: 'Bilbo',
  //   age: 99,
  // })
  const user = store.get(1)
  user.onsuccess = () => {
    console.log(user.result)
  }
}

open.onerror = () => {
  console.log(`error!`)
}
*/
