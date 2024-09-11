function WeatherCard(){
    const weatherForm = document.querySelector(".weatherForm");
    const cityInput = document.querySelector(".cityInput");
    const card = document.querySelector(".card");
    const apiKey = process.env.WEATHER_API_KEY; //copy it from "forbidden.txt" file and paste here. Taken from openweathermap.org (needs to be activated over there)
    //paste your own API key off openweathermap.org
    console.log(apiKey);
    async function submit (event) { //async arrow function
        event.preventDefault(); //"submit" events refresh the page by default (we need to prevent it)
        
        const city = cityInput.value;
        if(city){ //if "city" has a value
            try{ 
                const weatherData = await getWeatherData(city);
                displayWeatherInfo(weatherData);
            }
            catch(error){
                console.error(error);
                displayError(error);
            }
        }
        else {
            displayError("Please, enter a city!")
        }
    };

    function displayWeatherInfo(data) {
        //console.log(data); //look for properties within the console to assemble the info and destructure "data" below
        const {name: city, //"data" is an object (let's destructure it). First, get its "name" property with the "city" value (user input)
               main: {temp, humidity}, //"main" is an object (get "temp" and "humidity" out of it)
               weather: [{description, id}]} = data; //"weather" is an array of object (get "id" and "description" out of it)
        
        card.textContent = "";
        card.style.display = "flex";

        const cityDisplay = document.createElement("h1");
        const tempDisplay = document.createElement("p");
        const humidityDisplay = document.createElement("p");
        const descDisplay = document.createElement("p");
        const weatherEmoji = document.createElement("p");
        
        cityDisplay.textContent = city;
        cityDisplay.classList.add("cityDisplay"); //to apply CSS properties
        card.append(cityDisplay);
        
        tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`; //initially the "temp" is in Kelvins
        tempDisplay.classList.add("tempDisplay");
        card.append(tempDisplay);
        
        humidityDisplay.textContent = `Humidity: ${humidity}`;
        humidityDisplay.classList.add("humidityDisplay");
        card.append(humidityDisplay);
    
        descDisplay.textContent = description;
        descDisplay.classList.add("descDisplay");
        card.append(descDisplay);
        
        weatherEmoji.textContent = getWeatherEmoji(id);
        weatherEmoji.classList.add("weatherEmoji");
        card.append(weatherEmoji);
    }
    function getWeatherEmoji(weatherId) { //reference to https://openweathermap.org/weather-conditions for IDs
        switch(true) { //does the value of "true" match one of the elements?
            case (weatherId >= 200 && weatherId < 300):
                return "⛈"; //added "Segoe UI Emoji" font to the "Editor Font Family" in the VS Code settings in order to properly paste emojis
            case (weatherId >= 300 && weatherId < 400): //use "Shift+Tab" to tab backwards
                return "🌧";
            case (weatherId >= 500 && weatherId < 600):
                return "🌧";
            case (weatherId >= 600 && weatherId < 700):
                return "❄";
            case (weatherId >= 700 && weatherId < 800):
                return "🌫";
            case (weatherId === 800):
                return "☀";
            case (weatherId >= 801 && weatherId < 810):
                return "☁";
            default:
                return "❔";
        }
    }
    function displayError(message) {
        const errorDisplay = document.createElement("p");
        errorDisplay.textContent = message;
        errorDisplay.classList.add("errorDisplay"); //adding the class we preCSSed earlier

        card.textContent = "";
        card.style.display = "flex"; //now it's shown
        card.appendChild(errorDisplay); //or just card.append(errorDisplay);
    }

    async function getWeatherData(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`; //the link taken from https://openweathermap.org/current
        const response = await fetch(apiUrl);
        console.log(response);
        if(!response.ok) {
            throw new Error("Could not fetch weather data"); //if an Error is detected, the next code lines won't be executed
        }
        return await response.json();
    }
    return(
        <>
            <div className="card" style={{display: "none"}}>
                {/* This is a pattern to preCSS the result
                <h1 className="cityDisplay">Miami</h1>
                <p className="tempDisplay">25°C</p>
                <p className="humidityDisplay">Humidity: 75%</p>
                <p className="descDisplay">Clear skies</p>
                <p className="weatherEmoji">🧭</p>
                <p className="errorDisplay">Please enter a city</p> */}
            </div>
        </>
    );
}
export default WeatherCard;