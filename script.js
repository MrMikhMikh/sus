let step = 0;

window.onload = function(){
setTimeout(()=>{
document.getElementById("loader").style.display="none";
},2000);
}

function nextStep(){

step++;

const stages = [
"Добро пожаловать на завод Центротех!",
"Точка 1: Холл — надеваем СИЗ",
"Точка 2: Производство систем очистки",
"Точка 3: Участок СОБР",
"Точка 4: Покраска оборудования",
"Точка 5: Оператор станков ЧПУ",
"Финал: Все ценности Росатома собраны!"
];

if(step < stages.length){
alert(stages[step]);
}else{
alert("Экскурсия завершена!");
}

}