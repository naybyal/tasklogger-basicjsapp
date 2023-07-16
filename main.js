// document.getElementById("count-element").innerText = 5;
let count = 0

console.log(count)

function increment() {
    if (count<30)
        count++
    document.getElementById("count-element").textContent=count
}

function decrement() {
    if (count>0)
        count--
    document.getElementById("count-element").textContent=count
}

let saveEl = document.getElementById("save-el")
let prev = ""
function save() {
    prev += count+" - "
    console.log(count)
    document.getElementById("save-el").textContent = prev
    count=0
    document.getElementById("count-element").textContent = count
}

let welcomeEl = document.getElementById("welcome-el")
let userName = "Rosetta"
let greeting = "Hi, "

welcomeEl.textContent = greeting+userName+"!"
welcomeEl.textContent += "👋"


