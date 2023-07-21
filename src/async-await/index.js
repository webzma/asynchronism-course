const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
    ?
    setTimeout(() => resolve("Aquí esta popito"), 2000)
    :
    reject("Upps")
  })
}

const anotherFuntion = async () => {
  const something = await fnAsync()
  console.log(something);
  console.log('Hello');
}

console.log('Before')
anotherFuntion()
console.log('After');