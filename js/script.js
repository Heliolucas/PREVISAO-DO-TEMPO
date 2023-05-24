    const key = '44234be483aa0bfe37805fdcae7de22d'
    const apiCountryURL= 'https://flagsapi.com/BR/flat/64.png'

    const cityInput = document.querySelector('#city-input');
    const searchBtn = document.querySelector('#search')
    
    const cityElement = document.querySelector('#city') 
    const tempElement = document.querySelector('#temperature span') 
    const descElement = document.querySelector('#description') 
    const weatherIconElement = document.querySelector('#weather-icon') 
    const countryElement = document.querySelector('#country span') 
    const windElement = document.querySelector('#wind span') 
    const humidityElement = document.querySelector('#humidity span')



    // FUNÇÕES
    const getWeatherData = async(city) => {
        const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`

        const res = await fetch(apiWeatherURL)
        const data = await res.json()

        console.log(data)
        return data
    }

    const showWatherData = async (city) => {
       const data = await getWeatherData(city)

       cityElement.innerText = data.name
       tempElement.innerText = parseInt(data.main.temp)
       descElement.innerText = data.weather[0].description
       weatherIconElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
       humidityElement.innerText = `${data.main.humidity}%`
       let speed = parseInt(data.wind.speed)
       windElement.innerText = `${speed} km/h`
    }


    // EVENTOS
    searchBtn.addEventListener('click', (e) =>{
        const city = cityInput.value
        
        cityInput.value = ''

        showWatherData(city)
        e.preventDefault()
    })