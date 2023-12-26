const container = document.getElementById("container")
const head = document.getElementById("head")
const q = document.getElementById("quest")
const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")
const d = document.getElementById("d")
const submitbtn = document.getElementById("submit")
const reloadbtn = document.createElement("button")
reloadbtn.classList.add("reload")
reloadbtn.innerHTML = `reload`
container.append(reloadbtn)
const radios = document.querySelectorAll(".radios")
let curr_q, score = 0

const Q_a = [
    {
        question: 'what is html in full words',
        a: "hypertext transfer protocol",
        b: "hypertext markup language",
        c: "hello transfer protocol",
        d: "hypertxt transfer protocol",
        answer: "b"
    },
    {
        question: 'what is the best programming language in the world',
        a: "java",
        b: "javascript",
        c: "python",
        d: "c++",
        answer: "b"
    },
    {
        question: 'what is the most used programming langauge in 2021',
        a: "java",
        b: "javascript",
        c: "python",
        d: "c++",
        answer: "b"
    },
    {
        question: 'what is css in full form?',
        a: "cascadding style sheet",
        b: "cascading style sheet",
        c: "common style sheet",
        d: "cascadding styling sheet",
        answer: "b"
    }
]

function init(){
    curr_q = 0
    displayQ()
}
function displayQ(){
    deselect()
    reloadbtn.style.display = 'none'
    let num = curr_q + 1

    q.innerHTML = `${num}.${Q_a[curr_q].question}`
    a.innerHTML = Q_a[curr_q].a
    b.innerHTML = Q_a[curr_q].b
    c.innerHTML = Q_a[curr_q].c
    d.innerHTML = Q_a[curr_q].d
}
function getSelect(){
    radios.forEach((radio) =>{
        if (radio.checked) {
            return (radio.value == Q_a[curr_q].answer)? score++: score
        }
    })
    console.log(score);
}
function deselect(){radios.forEach((radio) =>{radio.checked = false})}
function showResult(){
    main.style.display = 'none'
    submitbtn.style.display = 'none'
    reloadbtn.style.display = 'block'
    if (score < Q_a.length/2) {
        alert("Bad 😱??")
        head.innerHTML = `your marks is ${score}/${Q_a.length} 👺👺 `
    }
    if (score == Q_a.length/2) {
        alert("Good ✔!!")
        head.innerHTML = `your marks is ${score}/${Q_a.length} 👏👏`
    }
    if (score == Q_a.length) {
        alert("Great ✔🎁!!")
        head.innerHTML = `your marks is ${score}/${Q_a.length} 🤴🤴`
    }
    head.style.fontSize = `15px`
    reloadbtn.addEventListener("click", reload)
}
function handleSbutton(){
    getSelect()
    curr_q++
    if (curr_q < Q_a.length) {displayQ()}
    else{showResult()}
}
submitbtn.addEventListener("click", handleSbutton)
function reload(){
    window.location.reload()
}
init()