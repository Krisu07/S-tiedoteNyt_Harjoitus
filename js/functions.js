const temp_span = document.querySelector('#temp')
const speed_span = document.querySelector('#speed')
const direction_span = document.querySelector('#direction')
const description_span = document.querySelector('#description')
const icon_img = document.querySelector('img')

const url = 'https://openweathermap.org/data/2.5/weather?'
const icon_url = 'https://openweathermap.org/img/wn/'
const api_key = '60f21beb76efdea5dd8538660103b085'

const getLocation = () => {
     if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(postion => {
               document.querySelector('#lat').innerHTML = postion.coords.latitude.toFixed(3) + ', '
               document.querySelector('#lng').innerHTML = postion.coords.longitude.toFixed(3) 
               getWeather(postion.coords.latitude,postion.coords.longitude)      
          }), (error => {
               alert(error)
          })
     } else {
          alert("Your browser does not support geolocation!")
     }
}

const getWeather = (lat, lng) => {
     const address = url + 
     'lat=' + lat +
     '&lon=' + lng +
     '&units=metric' +
     '&appid=' + api_key
     console.log(address)
     https://openweathermap.org/data/2.5/weather?lat=65.0367595&lon=25.4867384&units=metric&appid=141ace19fa7ed66d2bfe81a02d2b7915
     axios.get(address)
           .then(response => {
               const json = response.data
               temp_span.innerHTML = json.main.temp + '&#8451;'
               speed_span.innerHTML = json.wind.speed + 'm/s'
               direction_span.innerHTML = json.wind.deg + '&#176;'
               description_span.innerHTML = json.weather[0].description
               const image = icon_url + json.weather[0].icon + '@2x.png'
               icon_img.src = image
          }).catch(error => {
               alert(error)
          })
}

getLocation()