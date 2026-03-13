const startBtn = document.getElementById("startScan")
const reader = document.getElementById("reader")
const centrikBox = document.getElementById("centrikBox")

const speech = document.getElementById("speech")
const answers = document.getElementById("answers")
const nextQR = document.getElementById("nextQR")

/* круг ценностей */

const values = [

document.getElementById("v1"),
document.getElementById("v2"),
document.getElementById("v3"),
document.getElementById("v4"),
document.getElementById("v5"),
document.getElementById("v6")

]

let valueIndex = 0

function addValue(){

if(valueIndex < values.length){

values[valueIndex].style.opacity = 1

valueIndex++

}

}

/* QR сканер */

let qrScanner

startBtn.onclick = () => {

document.getElementById("startScreen").style.display = "none"

reader.style.display = "block"

startScanner()

}

function startScanner(){

qrScanner = new Html5Qrcode("reader")

qrScanner.start(

{ facingMode: "environment" },

{ fps: 10, qrbox: 250 },

(qrCodeMessage) => {

qrScanner.stop()

reader.style.display = "none"

centrikBox.style.display = "flex"

showDialog(0)

}

)

}

/* диалоги */

let dialogStep = 0

const dialog = [

{

text:"Привет! Добро пожаловать на производство Центротех. Где твои средства индивидуальной защиты?",

answers:[
{ text:"Сейчас надену СИЗ", next:1 },
{ text:"А зачем они?", next:2 }
]

},

{

text:"Отлично! Безопасность — одна из главных ценностей нашей компании.",

answers:[
{ text:"Понятно", next:3 },
{ text:"Интересно", next:3 }
]

},

{

text:"На производстве безопасность превыше всего. Без СИЗ на территорию нельзя.",

answers:[
{ text:"Хорошо, надеваю", next:3 }
]

},

{

text:"Каждый сотрудник отвечает за свою безопасность и безопасность коллег.",

answers:[
{ text:"Готов идти дальше", next:4 }
]

},

{

text:"Отлично! Идём к следующей точке.",

answers:[ ]

}

]

function showDialog(step){

speech.innerText = dialog[step].text

answers.innerHTML = ""

dialog[step].answers.forEach(answer => {

let btn = document.createElement("button")

btn.className = "answer"

btn.innerText = answer.text

btn.onclick = () => {

dialogStep = answer.next

showDialog(dialogStep)

}

answers.appendChild(btn)

})

if(dialog[step].answers.length === 0){

answers.innerHTML = ""

addValue()

nextQR.style.display = "block"

}else{

nextQR.style.display = "none"

}

}

/* следующий QR */

nextQR.onclick = () => {

centrikBox.style.display = "none"

reader.style.display = "block"

nextQR.style.display = "none"

dialogStep = 0

startScanner()

}