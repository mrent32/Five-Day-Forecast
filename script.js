let apiResponse = document.getElementById('current-city')
let searchForm = document.getElementById('search-form')

function getGeo(city) {
    let geoCode = 'http://api.openweathermap.org/geo/1.0/direct?q='+city+'&limit=5&appid=2effc000f4251d05ffc2fed2de56922d'
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
        let forecast = document.getElementById('card-one')
        forecast.innerHTML = ''
        console.log(data)
        let date = document.getElementsByClassName('date')
        date.textContent = city
        let dateOne = document.createElement('li').textContent = ' Today ' + data.list[0]


    })
}

searchForm.addEventListener('submit', function(event){
    event.preventDefault()
    let cityName = document.getElementById('city').value
    console.log(cityName)
    getGeo(cityName)
})


// requestUrl = document.getElementById('submit')
//    if (response.status === 200) {
//     apiResponse.textContent = apiResponse
//    }
// On the submit button click, run geocode function to convert lat/long to city name
// from city name, fetch api data
// convert to json?
// return to box id current-city
// display different settings in divs within the box? humidity, temp, wind velocity etc?