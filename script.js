const startBtn = document.getElementById("startAR")
const scene = document.getElementById("scene")
const startScreen = document.getElementById("startScreen")

const text = document.getElementById("text")
const percent = document.getElementById("percent")
const circle = document.getElementById("circle")

let step = 0
let collected = 0

startBtn.onclick = () => {

startScreen.style.display = "none"
scene.style.display = "block"

}

const dialogs = [

"Привет! Тут техника безопасности превыше всего. Одевай СИЗ.",

"Холл. Здесь сотрудники получают средства индивидуальной защиты.",

"Дверь на производство. Безопасность всегда на первом месте.",

"Участок №3 — изготовление систем очистки бурового раствора.",

"Это вибросито — важная часть системы очистки.",

"Участок покраски систем очистки.",

"Механосборочный участок.",

"Здесь работает оператор станков ЧПУ.",

"Здесь работает токарь.",

"Здесь работает слесарь.",

"Поздравляю! Ты прошёл весь маршрут."

]

const values = {

1:"Безопасность",
2:"Ответственность за результат",
3:"Уважение",
6:"Единая команда",
7:"Эффективность",
10:"На шаг впереди"

}

const marker = document.querySelector("a-marker")

marker.addEventListener("markerFound", () => {

step++

if(step < dialogs.length){

text.innerText = dialogs[step]

}

if(values[step]){

collected++

updateCircle()

text.innerText += "\n⭐ Ценность: " + values[step]

}

})

function updateCircle(){

let progress = Math.round((collected/6)*100)

percent.innerText = progress + "%"

let deg = progress * 3.6

circle.style.background =
`conic-gradient(#2f80ed ${deg}deg,#e5e5e5 ${deg}deg)`

}