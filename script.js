const startBtn = document.getElementById("startScan")
const reader = document.getElementById("reader")
const centrikBox = document.getElementById("centrikBox")

const speech = document.getElementById("speech")
const answers = document.getElementById("answers")

const nextQR = document.getElementById("nextQR")

let dialogStep = 0

startBtn.onclick = () => {

document.getElementById("startScreen").style.display = "none"

reader.style.display = "block"

startScanner()

}

function startScanner(){

const qr = new Html5Qrcode("reader")

qr.start(

{ facingMode: "environment" },

{ fps: 10, qrbox: 250 },

(qrCodeMessage) => {

reader.style.display = "none"

centrikBox.style.display = "block"

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

nextQR.style.display = "block"

}

}

/* следующий QR */

nextQR.onclick = () => {

centrikBox.style.display = "none"

reader.style.display = "block"

nextQR.style.display = "none"

startScanner()

}