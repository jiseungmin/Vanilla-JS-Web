const backgorund = ["iMG0.JPG", "iMG1.JPG", "iMG2.JPG"]

setimage = backgorund[Math.floor(Math.random()*backgorund.length)]
const picture = document.createElement("img")
picture.className="img"
picture.src = `img/${setimage}`
console.log(picture)

document.body.appendChild(picture)