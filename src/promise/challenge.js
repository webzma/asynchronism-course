import fetch from 'node-fecth'
const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlAPI) {
  return fetch(urlAPI)
}

fetchData(`${API}/products`)
  .then(response => response.json())
  .then(data => console.log(data))