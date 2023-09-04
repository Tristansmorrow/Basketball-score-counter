document.getElementById("numel1").textContent
document.getElementById("numel2").textContent
let num1 = 0
let num2 = 0

function add1h() {
    num1 += 1
    numel1.textContent = num1
}

function add2h() {
    num1 += 2
    numel1.textContent = num1
}

function add3h() {
    num1 += 3
    numel1.textContent = num1
}

function add1g() {
    num2 += 1
    numel2.textContent = num2
}

function add2g() {
    num2 += 2
    numel2.textContent = num2
}

function add3g() {
    num2 += 3
    numel2.textContent = num2
}

function reset() {
    numel1.textContent = num1
    numel2.textContent = num2
}