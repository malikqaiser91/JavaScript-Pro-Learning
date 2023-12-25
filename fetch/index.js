/* 
            Fetch:
            A fetch is a modern way to make network requests, replacing the older XMLHttpRequest 
            Fetch gives us stream, that we have to read.
const POKE_URL = `https://pokeapi.co/api/v2/pokemon`

const getPokemon = async () => {
  try {
    const response = await fetch(POKE_URL)
    const data = await response.json()
    console.log('Data', data)
  } catch (err) {
    console.log(`Error: ${err}`)
  }
}
getPokemon()

            Error Handling with Fetch:
// Error handling by checking the response status
const POKE_URL = 'https://pokeapi.co/api/v2/pokemon/asasd'

const getPokemon = async () => {
  try {
    const response = await fetch(POKE_URL)
    if (!response.ok) throw new Error(`HTTP error ! Status ${response.status}`)
    const data = await response.json()
    console.log(`Data ${data}`)
  } catch (err) {
    console.log(`Error: ${err}`)
  }
}
getPokemon()

        Sending Headers with Fetch:
        const showHeaders = async () => {
  // second and best approach
  const headers = new Headers({
    'content-type': 'application/json',
  })
  try {
    // One approach is to include the headers in the fetch request
    // const res = await fetch(BASE_URL, {
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    // })
    const res = await fetch(BASE_URL, { headers })
    const data = await res.json()
    console.log(`Data`, data)
  } catch (err) {
    console.log(`Error: ${err.message}`)
  }
}

showHeaders()

const BASE_URL = 'http://localhost:3001/showmeheaders'

const getSecret = async () => {
  const headers = new Headers({
    'content-type': 'application/json',
    Authorization: 'Bearer 42342342341231236534645',
  })
  try {
    const res = await fetch(`${BASE_URL}/secret`)
    const data = await res.json()
    console.log(`Data`, data)
  } catch (err) {
    console.log(`Error: ${err.message}`)
  }
}

            Sending POST Request with Fetch:

const postData = async () => {
  const payload = {
    handle: 'chick_en_co',
    name: 'Chickens and Company',
    description: 'A lovely company run by chickens',
    numEmployees: 999,
    logoUrl: 'www.google.com',
  }
  const headers = new Headers({
    'content-type': 'application/json',
  })
  try {
    const res = await fetch(`http://localhost:3001/companies`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    })
    const data = await res.json()
    console.log(`Data`, data)
  } catch (err) {
    console.log(`Error: ${err?.message}`)
  }
}

const getCompany = async () => {
  try {
    const res = await fetch(`http://localhost:3001/companies/chick_en_co`)
    const company = await res.json()
    console.log(`Company Data ${company}`)
  } catch (err) {
    console.log(`Error: ${err?.message}`)
  }
}

                Uploading file with fetch:
*/
const uploadFile = async (formData) => {
  try {
    const res = await fetch(
      `http://localhost:3001/companies/coltco/upload-logo`
    )
    if (!res.ok) throw new Error(`Http status Error: ${res.status}`)
    const result = await res.json()
    console.log(`Result: ${result}`)
  } catch (err) {
    console.log(`Error ${err.message}`)
  }
}

const fileInput = document.getElementById('fileUpload')

fileInput.addEventListener('change', (e) => {
  const formData = new FormData()
  formData.append('logo', fileInput.files[0])
  uploadFile(formData)
})
