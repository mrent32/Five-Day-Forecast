let apiResponse = document.getElementById('current-city')
let searchForm = document.getElementById('search-form')
let elpaso = document.getElementById('elpaso')
let atlanta = document.getElementById('atlanta')
let denver = document.getElementById('denver')
let dallas = document.getElementById('dallas')
let newyork = document.getElementById('newyork')
let charlotte= document.getElementById('charlotte')
let seattle = document.getElementById('seattle')


function getGeo(city) {
    let geoCode = 'https://api.openweathermap.org/geo/1.0/direct?q='+city+'&limit=5&appid=2effc000f4251d05ffc2fed2de56922d'
    fetch(geoCode)
    .then(function (response) {
        return response.json()
       
    })
    .then(function(data){
        console.log(data)
        let name = data[0].name;
        let lat = data[0].lat;
        let lon = data[0].lon;
        console.group(name, lat, lon)
        getApi(name, lat, lon)
        getFive(name, lat, lon)
    })
    
}

function getApi(city, lat, lon) {
    let requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=2effc000f4251d05ffc2fed2de56922d`
    
fetch(requestUrl)
.then(function (response) {
    console.log(response)
    return response.json()
})

.then(function(data) {
    let weatherBox = document.getElementById('weather-box')
    weatherBox.innerHTML = ''
    console.log(data)
    let icon = document.createElement('img')
    icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    let title = document.getElementById('title')
    title.textContent = city
    title.append(icon)
    let tempEl = document.createElement('h3').textContent = 'Temperature: '+ data.main.temp
    let wind = document.createElement('h3').textContent = ' Wind: ' + data.wind.speed
    let hum = document.createElement('h3').textContent = ' Humidity ' + data.main.humidity
    
    weatherBox.append(tempEl)
    weatherBox.append(wind)
    weatherBox.append(hum)
})
}
function getFive(city, lat, lon) {
    let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=2effc000f4251d05ffc2fed2de56922d`
    fetch(requestUrl) 
    .then(function (response) {
        console.log(response)
        return response.json()
    })
    .then(function(data) {
        let forecastOne = document.getElementById('card-one')
        let forecastTwo = document.getElementById('card-two')
        let forecast3 = document.getElementById('card-three')
        let forecast4 = document.getElementById('card-four')
        let forecast5 = document.getElementById('card-five')
        console.log('forecast data', data)
        forecastOne.innerHTML = ''
        forecastTwo.innerHTML = ''
        forecast3.innerHTML = ''
        forecast4.innerHTML = ''
        forecast5.innerHTML = ''
        console.log(data)
        let date = document.getElementsByClassName('date')
        date.textContent = city
        let today = document.createElement('h3').textContent = 'Today'
        let oneFeel = document.createElement('li').textContent = 'Temperature' + data.list[0].main.temp
        let wind = document.createElement('li').textContent = 'Wind' + data.list[0].wind.speed
        forecastOne.append(today)
        forecastOne.append(oneFeel)
        forecastOne.append(wind)
        let tomorrow = document.createElement('h3').textContent = 'Tomorrow'
        let temp2 = document.createElement('li').textContent = 'Temperature' + data.list[7].main.temp
        let wind2 = document.createElement('li').textContent = 'Wind' + data.list[7].wind.speed
        forecastTwo.append(tomorrow)
        forecastTwo.append(temp2)
        forecastTwo.append(wind2)
        let three = document.createElement('h3').textContent = data.list[15].dt_txt
        let temp3 = document.createElement('li').textContent = 'Temperature' + data.list[15].main.temp
        let wind3 = document.createElement('li').textContent = 'Wind' + data.list[15].wind.speed
        forecast3.append(three)
        forecast3.append(temp3)
        forecast3.append(wind3)
        let four = document.createElement('h3').textContent = data.list[23].dt_txt
        let temp4 = document.createElement('li').textContent = 'Temperature' + data.list[23].main.temp
        let wind4 = document.createElement('li').textContent = 'Wind' + data.list[23].wind.speed
        forecast4.append(four)
        forecast4.append(temp4)
        forecast4.append(wind4)
        let five = document.createElement('h3').textContent = data.list[23].dt_txt
        let temp5 = document.createElement('li').textContent = 'Temperature' + data.list[31].main.temp
        let wind5 = document.createElement('li').textContent = 'Wind' + data.list[31].wind.speed
        forecast5.append(five)
        forecast5.append(temp5)
        forecast5.append(wind5)



 
    })
}

searchForm.addEventListener('submit', function(event){
    event.preventDefault()
    let cityName = document.getElementById('city').value
    console.log(cityName)
    getGeo(cityName)
})
elpaso.addEventListener('click', function(event) {
    let cityName = document.getElementById('elpaso').value
    let geoCode = 'https://api.openweathermap.org/geo/1.0/direct?q='+elpaso+'&limit=5&appid=2effc000f4251d05ffc2fed2de56922d'
    console.log(cityName)
    getGeo(geoCode)
})

