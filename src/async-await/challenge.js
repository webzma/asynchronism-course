import fetch from "node-fetch"
const API = 'https://api.escuelajs.co/api/v1'

async function fecthData(urlAPI) {
  const response = await fetch(urlAPI)
  const data = await response.json()
  return data
} 

const anotherFuntion = async (urlAPI) => {
  try {
    const products = await fecthData(`${urlAPI}/products`)
    const product = await fecthData(`${urlAPI}/products/${products[0].id}`)
    const category = await fecthData(`${urlAPI}/categories/${product.category.id}`)
  
    console.log(products);
    console.log(product.title);
    console.log(category);
  } catch (err) {
    console.error(err);
  }
}

anotherFuntion(API)