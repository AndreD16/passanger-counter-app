let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

//second counter

let saveEl2 = document.getElementById("save-el-2")
let countEl2 = document.getElementById("count-el-2")
let count2 = 0

function increment2() {
    count2 += 1
    countEl2.textContent = count2
}

function save2() {
    let countStr2 = count2 + " - "
    saveEl2.textContent += countStr2
    countEl2.textContent = 0
    count2 = 0
}



