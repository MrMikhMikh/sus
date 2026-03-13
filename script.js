const valuesCircle = document.getElementById("valuesCircle")
let valuesFound = 0
const startBtn = document.getElementById("startScan")
const reader = document.getElementById("reader")
const centrikBox = document.getElementById("centrikBox")

const speech = document.getElementById("speech")
const answers = document.getElementById("answers")
const nextQR = document.getElementById("nextQR")

let dialogStep = 0
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

/* остановить сканер */

qrScanner.stop()

reader.style.display = "none"

centrikBox.style.display = "flex"

showDialog(0)

}

)

}

/* диалог */

const dialog = [

{
text:"Здравствуйте! Добро пожаловать в холл Центротеха. Где ваши средства индивидуальной защиты?",
answers:[
{ text:"Сейчас надену СИЗ", next:1 },
{ text:"А зачем они?", next:2 }
]
},

{
text:"Отлично! На производстве безопасность — это культура.",
answers:[
{ text:"Понятно", next:3 },
{ text:"Интересно", next:3 }
]
},

{
text:"Без СИЗ на производство нельзя. Даже директор не сможет пройти.",
answers:[
{ text:"Хорошо, надеваю", next:3 }
]
},

{
text:"Наши инженеры разработали систему контроля доступа без СИЗ.",
answers:[
{ text:"Готов идти дальше", next:4 }
]
},

{
text:"Отлично! Жду вас у дверей на производство.",
answers:[]
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

function addValue(){

valuesFound++

let opacity = 0.25 + valuesFound * 0.12

valuesCircle.style.opacity = opacity

}