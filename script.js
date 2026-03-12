let step = 0

let texts = [

"Добро пожаловать на завод Центротех!",

"Здесь производится современное оборудование.",

"Операторы управляют высокоточными станками.",

"После обработки детали проходят очистку.",

"Затем наносится защитное покрытие.",

"На финальном этапе происходит сборка."

]

function nextStep(){

step++

if(step>5) step=0

let image = document.querySelector("#factoryImage")
let text = document.querySelector("#text")

image.setAttribute("src","#img"+(step+1))
text.setAttribute("value",texts[step])

speech(texts[step])

}

function speech(t){

let msg = new SpeechSynthesisUtterance(t)

msg.lang = "ru-RU"

speechSynthesis.speak(msg)

}