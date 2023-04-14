const loginstart = document.querySelector("#goil")
const loginText = document.querySelector("#goil input")
const hide = document.querySelector("#greet")
const HIDE = "hidden"
const Userkey = "username"


function handleloggin(event){
  event.preventDefault()
  const Username = loginText.value
  loginstart.classList.add(HIDE)
  localStorage.setItem(Userkey,Username)
  paintingree(Username)
}

function paintingree(username){
  hide.innerText= `Hello ${username}`
  hide.classList.remove(HIDE)
}

const savedUserNAme = localStorage.getItem(Userkey)

if(savedUserNAme === null){
  loginstart.classList.remove(HIDE)
  loginstart.addEventListener("submit", handleloggin)
}else{
  paintingree(savedUserNAme)
}


