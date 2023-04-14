
const MYAPIKEy="b5c910847a98bb587f1160ee49f5a749"

function onGeoOk(position){
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${MYAPIKEy}&units=metric`
    fetch(url).then((respone)=> respone.json()).then((data)=>{
      const weather = document.querySelector("#weather span:first-child")
      const city = document.querySelector("#weather span:last-child")
      city.innerText= data.name
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`
    })
}

function onGeoError(){  
  alert("can't find you")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)