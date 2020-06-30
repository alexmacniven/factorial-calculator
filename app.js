function factorialize(number) {
    let factorial = 1
    for (let i = 1; i <= number; i++) {
      factorial *= i
    }
    return factorial
}

function resultBuilder(number, result) {
    let str = `${number}! = 1 `
    for (let i = 2; i <= number; i++) {
        str += `* ${i} `
    }
    str += `= ${result}`
    return str
}

function calculate(event) {
    let number = document.getElementById("number_input").value
    let display = document.getElementById("result_display")
    console.log("number: " + number)
    let result = factorialize(number)
    console.log("result: " + result)
    display.textContent = resultBuilder(number, result)
    event.preventDefault()
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form")
    form.addEventListener("submit", calculate)
})