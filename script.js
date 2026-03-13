const startBtn = document.getElementById("startScan")
const reader = document.getElementById("reader")
const centrikBox = document.getElementById("centrikBox")

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

console.log("QR найден:", qrCodeMessage)

reader.style.display = "none"

centrikBox.style.display = "block"

},

(errorMessage) => {

}

)

}