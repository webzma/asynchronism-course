const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://api.escuelajs.co/api/v1/products'

function fetchData(url, callback) {
  let xhttp = new XMLHttpRequest()

  xhttp.open('GET', url, true)
  xhttp.onreadystatechange = function(event) {
    if(xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText))
      }
    } else {
      const error = new Error('Error' + url)
      return callback(error, null)
    }
  }
  xhttp.send()
}

fetchData(`${API}/products`, (error, data) => {
  if (error) return console.error(error)
  else console.log(data[0])
}) 