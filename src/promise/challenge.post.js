import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response
}

const data = {
  'title': 'New webzma product',
  'price': 10,
  'description': 'A product of webzma so nice :)',  
  'categoryId': 1,
  'images': [
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
  ]
}

postData(`${API}/products`, data)
 .then(response => response.json())
 .then(data => console.log(data))