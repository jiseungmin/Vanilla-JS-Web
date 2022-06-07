const clock = document.querySelector("h2#clock")

function sayhello(){
  const date = new Date
  const hours = String(date.getHours()).padStart(2,"0")
  const minutes = String(date.getMinutes()).padStart(2,"0")
  const Seconds = String(date.getSeconds()).padStart(2,"0")
  clock.innerText=(`${hours}:${minutes}:${Seconds}`)
}

sayhello()
setInterval(sayhello,1000)