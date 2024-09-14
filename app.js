const body = document.body
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")

let colorStyle = () => {
 let color = "#" ;
let colorId = "0123456789ABCDEF"
    
for (let index = 0; index < 6; index++) {
        color +=  colorId[Math.floor(Math.random()*16)]   
       }
       
       return color ;
}
let interColor = () => setInterval(
    () => {
        body.style.backgroundColor = colorStyle()
        }, 1000
    
)

let startAcc = start.addEventListener("click" , interColor())

