function sum(num1, num2) {
  return num1 + num2
}

function calc(num1, num2, callback) {
  return callback(num1, num2)
}

function greeting(name) {
  return `Hello, ${name}`
}

setTimeout(() => {
  console.log(greeting("Lucas"))
}, 5000)