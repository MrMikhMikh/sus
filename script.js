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

alert("Нет доступа к камере")

}

}

/* точки экскурсии */

let step = 0

const points = [

"Добро пожаловать на завод Центротех!",

"Точка 1. Холл — здесь сотрудники получают средства индивидуальной защиты.",

"Точка 2. Дверь на производство. Каждый сотрудник отвечает за результат своей работы.",

"Точка 3. Участок №3 — изготовление систем очистки бурового раствора.",

"Точка 4. Перед тобой вибросито — элемент системы очистки.",

"Точка 5. Участок покраски систем очистки.",

"Точка 6. Участок №4 — механосборочный.",

"Точка 7. Встреча с оператором станков с ЧПУ.",

"Точка 8. Встреча с токарем.",

"Точка 9. Встреча со слесарем монтажно-сборочных работ.",

"Точка 10. Финальная сцена — сбор ценностей компании."

]

/* ценности */

const values = {

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

if(step < points.length){

speech.innerText = points[step]

}

if(values[step]){

collected++

updateProgress()

speech.innerText += "\n\n⭐ Получена ценность: " + values[step]

}

if(step >= 10){

speech.innerText = "Поздравляю! Ты прошёл все точки и собрал ценности компании!"

}

}

/* обновление круга */

function updateProgress(){

const progress = Math.round((collected/6)*100)

percent.innerText = progress + "%"

const deg = progress * 3.6

circle.style.background =
`conic-gradient(#2f80ed ${deg}deg,#e5e5e5 ${deg}deg)`

}