let requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=57dbbe91a86d532e813d87c6b296582e'
let apiResponse = document.getElementById('current-city')

function getApi(requestUrl) {
fetch(requestUrl).then(function (response) {
   requestUrl = document.getElementById('submit')
   if (response.status === 200) {
    apiResponse.textContent = apiResponse
   }
})

}
getApi(requestUrl)