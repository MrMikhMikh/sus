let step = 0
let collected = 0

const text = document.getElementById("text")
const percent = document.getElementById("percent")
const circle = document.getElementById("circle")

const dialogs = [

"Привет! Я Центрик. Добро пожаловать на завод.",

"Точка 1. Холл. Здесь сотрудники получают средства индивидуальной защиты.",

"Точка 2. Дверь на производство. Безопасность здесь всегда на первом месте.",

"Точка 3. Участок №3 — изготовление систем очистки бурового раствора.",

"Точка 4. Это вибросито — важная часть системы очистки.",

"Точка 5. Участок покраски систем очистки.",

"Точка 6. Механосборочный участок.",

"Точка 7. Здесь работает оператор станков с ЧПУ.",

"Точка 8. Здесь трудится токарь.",

"Точка 9. Здесь работает слесарь монтажно-сборочных работ.",

"Финальная точка! Ты познакомился со всеми этапами производства."

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

text.innerText += "\n\n⭐ Получена ценность: " + values[step]

}

})

function updateCircle(){

let progress = Math.round((collected/6)*100)

percent.innerText = progress + "%"

let deg = progress * 3.6

circle.style.background =
`conic-gradient(#2f80ed ${deg}deg,#e5e5e5 ${deg}deg)`

}