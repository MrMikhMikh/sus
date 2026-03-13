
const startBtn = document.getElementById("startScan")
const reader = document.getElementById("reader")
const centrikBox = document.getElementById("centrikBox")

const speech = document.getElementById("speech")
const answers = document.getElementById("answers")
const nextQR = document.getElementById("nextQR")

const valuesCircle = document.getElementById("valuesCircle")

const finalScreen = document.getElementById("finalScreen")
const restartBtn = document.getElementById("restart")

const bgMusic = document.getElementById("bgMusic")
const clickSound = document.getElementById("clickSound")
const valueSound = document.getElementById("valueSound")
const finishSound = document.getElementById("finishSound")

let qrScanner
let currentPoint = 0
let valuesFound = 0

function addValue(){
valuesFound++
let opacity = 0.25 + valuesFound * 0.12
valuesCircle.style.opacity = opacity
valueSound.play()
}

startBtn.onclick = () => {

bgMusic.volume = 0.4
bgMusic.play()

document.getElementById("startScreen").style.display = "none"
reader.style.display = "block"
startScanner()

}

function startScanner(){

qrScanner = new Html5Qrcode("reader")

qrScanner.start(
{ facingMode: "environment" },
{ fps:10, qrbox:250 },

() => {

qrScanner.stop()

reader.style.display = "none"
centrikBox.style.display = "flex"

currentPoint++

startDialog()

}

)

}

const dialogs = [

[{text:"Привет! Перед входом на производство нужно получить СИЗ.",answers:[{text:"Что такое СИЗ?",next:1},{text:"Я знаю",next:2}]},
{text:"СИЗ — средства индивидуальной защиты: каска, очки, спецодежда.",answers:[{text:"Понятно",next:3}]},
{text:"Отлично. Тогда ты знаешь что безопасность важнее всего.",answers:[{text:"Да",next:3}]},
{text:"Отлично! Идём дальше.",answers:[]}],

[{text:"Перед тобой дверь на производство.",answers:[{text:"Есть контроль?",next:1},{text:"Можно зайти?",next:2}]},
{text:"Да. Система проверяет наличие СИЗ.",answers:[{text:"Понятно",next:3}]},
{text:"Нет. Без СИЗ вход запрещён.",answers:[{text:"Окей",next:3}]},
{text:"Продолжаем экскурсию.",answers:[]}],

[{text:"Это участок №3. Здесь делают системы очистки бурового раствора.",answers:[{text:"Что это?",next:1},{text:"Для буровых?",next:2}]},
{text:"Они очищают буровой раствор.",answers:[{text:"Интересно",next:3}]},
{text:"Да. Их используют на нефтяных буровых.",answers:[{text:"Понятно",next:3}]},
{text:"Здесь создают важные элементы оборудования.",answers:[]}],

[{text:"Перед тобой вибросито.",answers:[{text:"Как работает?",next:1},{text:"Оно вибрирует?",next:2}]},
{text:"Оно отделяет частицы породы.",answers:[{text:"Теперь ясно",next:3}]},
{text:"Да. Вибрация фильтрует раствор.",answers:[{text:"Понятно",next:3}]},
{text:"Это ключевой элемент системы очистки.",answers:[]}],

[{text:"Здесь происходит покраска оборудования.",answers:[{text:"Зачем красить?",next:1},{text:"Для красоты?",next:2}]},
{text:"Покраска защищает металл от коррозии.",answers:[{text:"Логично",next:3}]},
{text:"Не только красота — ещё защита.",answers:[{text:"Понятно",next:3}]},
{text:"Это увеличивает срок службы оборудования.",answers:[]}],

[{text:"Это механосборочный участок.",answers:[{text:"Здесь собирают оборудование?",next:1},{text:"Здесь делают детали?",next:2}]},
{text:"Да. Здесь собирают крупные узлы.",answers:[{text:"Понятно",next:3}]},
{text:"Часть деталей делают на станках.",answers:[{text:"Ясно",next:3}]},
{text:"Здесь работает большая команда.",answers:[]}],

[{text:"Перед тобой оператор станка ЧПУ.",answers:[{text:"Что значит ЧПУ?",next:1},{text:"Он управляет компьютером?",next:2}]},
{text:"ЧПУ — числовое программное управление.",answers:[{text:"Понятно",next:3}]},
{text:"Да. Станок работает по программе.",answers:[{text:"Интересно",next:3}]},
{text:"Такие станки делают детали очень точно.",answers:[]}],

[{text:"Это токарь.",answers:[{text:"Он делает детали?",next:1},{text:"Что такое токарный станок?",next:2}]},
{text:"Он обрабатывает металл.",answers:[{text:"Понятно",next:3}]},
{text:"Станок вращает деталь и снимает металл.",answers:[{text:"Интересно",next:3}]},
{text:"Работа требует высокой точности.",answers:[]}],

[{text:"Это слесарь монтажно-сборочных работ.",answers:[{text:"Он собирает оборудование?",next:1},{text:"Он использует инструменты?",next:2}]},
{text:"Да. Он соединяет все детали.",answers:[{text:"Понятно",next:3}]},
{text:"Да. Он работает с разными инструментами.",answers:[{text:"Интересно",next:3}]},
{text:"Благодаря этой работе оборудование готово.",answers:[]}],

[{text:"Поздравляю! Ты прошёл все точки.",answers:[{text:"Отлично!",next:1},{text:"Было интересно!",next:1}]},
{text:"Теперь ты знаешь производство Центротех.",answers:[]}]
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

currentDialog[step].answers.forEach(answer=>{

let btn = document.createElement("button")
btn.className="answer"
btn.innerText=answer.text

btn.onclick=()=>{

clickSound.currentTime=0
clickSound.play()

dialogStep=answer.next
showDialog(dialogStep)

}

answers.appendChild(btn)

})

if(currentDialog[step].answers.length===0){

answers.innerHTML=""

if(currentPoint==1||currentPoint==3||currentPoint==6||currentPoint==7||currentPoint==8||currentPoint==9){
addValue()
}

if(currentPoint===10){

setTimeout(()=>{

centrikBox.style.display="none"
finishSound.play()
finalScreen.style.display="flex"

},1500)

return
}

nextQR.style.display="block"

}else{

nextQR.style.display="none"

}

}

nextQR.onclick=()=>{

centrikBox.style.display="none"
reader.style.display="block"
nextQR.style.display="none"
startScanner()

}

restartBtn.onclick=()=>{
location.reload()
}
