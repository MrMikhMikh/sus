const startBtn = document.getElementById("startScan")
const reader = document.getElementById("reader")
const centrikBox = document.getElementById("centrikBox")

const speech = document.getElementById("speech")
const answers = document.getElementById("answers")
const nextQR = document.getElementById("nextQR")

const valuesCircle = document.getElementById("valuesCircle")

let qrScanner

let currentPoint = 0

let valuesFound = 0

function addValue(){

valuesFound++

let opacity = 0.25 + valuesFound * 0.12

valuesCircle.style.opacity = opacity

}

/* запуск камеры */

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

() => {

qrScanner.stop()

reader.style.display = "none"

centrikBox.style.display = "flex"

currentPoint++

startDialog()

}

)

}

/* диалоги */

const dialogs = [

[
{
text:"Привет! Добро пожаловать в холл Центротеха. Здесь мы получаем средства индивидуальной защиты.",
answers:[
{ text:"А зачем они?", next:1 },
{ text:"Хорошо, надеваю СИЗ", next:2 }
]
},
{
text:"Безопасность — главная ценность на производстве.",
answers:[
{ text:"Понятно", next:2 }
]
},
{
text:"Отлично! Теперь можно идти дальше.",
answers:[]
}
],

[
{
text:"Перед тобой дверь на производство.",
answers:[
{ text:"Как проходит контроль?", next:1 }
]
},
{
text:"Система проверяет наличие СИЗ перед входом.",
answers:[]
}
],

[
{
text:"Это участок №3. Здесь изготавливают системы очистки бурового раствора.",
answers:[
{ text:"Интересно", next:1 }
]
},
{
text:"Эти системы используются на буровых установках.",
answers:[]
}
],

[
{
text:"Перед тобой вибросито — часть системы СОБР.",
answers:[
{ text:"Что оно делает?", next:1 }
]
},
{
text:"Оно очищает буровой раствор от твёрдых частиц.",
answers:[]
}
],

[
{
text:"Здесь происходит покраска оборудования.",
answers:[
{ text:"Почему это важно?", next:1 }
]
},
{
text:"Покраска защищает оборудование от коррозии.",
answers:[]
}
],

[
{
text:"Это механосборочный участок.",
answers:[
{ text:"Что здесь делают?", next:1 }
]
},
{
text:"Здесь собирают основные узлы оборудования.",
answers:[]
}
],

[
{
text:"Перед тобой оператор станка с ЧПУ.",
answers:[
{ text:"Что такое ЧПУ?", next:1 }
]
},
{
text:"Это станки с программным управлением для точной обработки деталей.",
answers:[]
}
],

[
{
text:"Это токарь.",
answers:[
{ text:"Что он делает?", next:1 }
]
},
{
text:"Токарь изготавливает детали цилиндрической формы.",
answers:[]
}
],

[
{
text:"Это слесарь монтажно-сборочных работ.",
answers:[
{ text:"Чем он занимается?", next:1 }
]
},
{
text:"Он собирает готовые конструкции оборудования.",
answers:[]
}
],

[
{
text:"Поздравляю! Ты прошёл все точки экскурсии.",
answers:[
{ text:"Отлично!", next:1 }
]
},
{
text:"Ты познакомился с производством и ценностями компании.",
answers:[]
}
]

]

let dialogStep = 0
let currentDialog = []

function startDialog(){

currentDialog = dialogs[currentPoint-1]

dialogStep = 0

showDialog(dialogStep)

}

function showDialog(step){

speech.innerText = currentDialog[step].text

answers.innerHTML = ""

currentDialog[step].answers.forEach(answer => {

let btn = document.createElement("button")

btn.className = "answer"

btn.innerText = answer.text

btn.onclick = () => {

dialogStep = answer.next

showDialog(dialogStep)

}

answers.appendChild(btn)

})

if(currentDialog[step].answers.length === 0){

answers.innerHTML = ""

if(currentPoint==1||currentPoint==3||currentPoint==6||currentPoint==7||currentPoint==8||currentPoint==9){

addValue()

}

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

startScanner()

}