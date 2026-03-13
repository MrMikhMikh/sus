const startBtn = document.getElementById("start")
const video = document.getElementById("camera")

startBtn.onclick = async () => {

try{

const stream = await navigator.mediaDevices.getUserMedia({
video:{facingMode:"environment"}
})

video.srcObject = stream
video.style.display="block"
startBtn.style.display="none"

}catch(e){

alert("Не удалось получить доступ к камере")

}

}

/* точки маршрута */

let step = 0

const dialogues = [

"Добро пожаловать на завод Центротех!",

"Точка 1. Холл. Здесь сотрудники получают средства индивидуальной защиты. Безопасность — главная ценность.",

"Точка 2. Дверь на производство. Каждый сотрудник отвечает за результат своей работы.",

"Точка 3. Участок №3. Здесь изготавливают системы очистки бурового раствора.",

"Точка 4. Перед тобой вибросито — важная часть системы очистки.",

"Точка 5. Участок покраски. Защитное покрытие продлевает срок службы оборудования.",

"Точка 6. Механосборочный участок. Здесь работает настоящая команда специалистов.",

"Точка 7. Оператор станков с ЧПУ управляет высокоточными машинами.",

"Точка 8. Токарь создаёт детали высокой точности.",

"Точка 9. Слесарь монтажно-сборочных работ собирает оборудование.",

"Финал! Ты прошёл все точки и собрал ценности компании."

]

/* ценности */

const valuesSteps = {
1:"Безопасность",
2:"Ответственность за результат",
3:"Уважение",
6:"Единая команда",
7:"Эффективность",
10:"На шаг впереди"
}

let collected = 0

const speech = document.getElementById("speech")
const percent = document.getElementById("percent")
const circle = document.getElementById("circle")

document.getElementById("next").onclick = () => {

step++

if(step < dialogues.length){

speech.innerText = dialogues[step]

}

if(valuesSteps[step]){

collected++

updateProgress()

speech.innerText += "\n\n⭐ Получена ценность: " + valuesSteps[step]

}

if(step === dialogues.length-1){

speech.innerText = "Поздравляю! Ты собрал все ценности компании!"

}

}

function updateProgress(){

const progress = Math.round((collected/6)*100)

percent.innerText = progress+"%"

const deg = progress*3.6

circle.style.background =
`conic-gradient(#2f80ed ${deg}deg,#e5e5e5 ${deg}deg)`

}