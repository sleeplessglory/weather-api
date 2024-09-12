import React, {useEffect, useRef} from 'react';
function Weather({weatherForm, cityInput}) {
    const cardRef = useRef(null);
    const cityDispRef = useRef(null);
    const tempRef = useRef(null);
    const humidityRef = useRef(null);
    const descRef = useRef(null);
    const emojiRef = useRef(null);
    const errorRef = useRef(null);
    const apiKey = import.meta.env.VITE_API_KEY; //taken from openweathermap.org
    
    useEffect(() => {
        weatherForm.current.addEventListener("submit", async event => { //async arrow function
            event.preventDefault(); //"submit" events refresh the page by default (we need to prevent it)
            const request = cityInput.current.value;
            if(request){ //if "request" has a value
                cardRef.current.style.display = "flex";
                try{ 
                    const weatherData = await getWeatherData(cityInput.current.value);
                    displayWeatherInfo(weatherData);
                }
                catch(error){
                    console.error(error);
                    displayError(error);
                }
            }
            else {
                cardRef.current.style.display = "flex";
                displayError("Please, enter a city!")
            }
        });
    }, []); //runs only on mount

    function displayWeatherInfo(data) {
        cityDispRef.current.style.display = "block";
        tempRef.current.style.display = "block";
        humidityRef.current.style.display = "block";
        descRef.current.style.display = "block";
        emojiRef.current.style.display = "block";
        errorRef.current.style.display = "none";

        //console.log(data); //look for properties within the console to assemble the info and destructure "data" below
        const {name: city, //"data" is an object (let's destructure it). Extract its "name" property with the "city" value (user input)
               main: {temp, humidity}, //"main" is an object (extract "temp" and "humidity" out of it)
               weather: [{description, id}]} = data; //"weather" is an array of an object (extract "id" and "description" out of it)

        cityDispRef.current.textContent = city;
        tempRef.current.textContent = `${(temp - 273.15).toFixed(1)}°C`; //initially the "temp" is in Kelvins
        humidityRef.current.textContent = `Humidity: ${humidity}`;
        descRef.current.textContent = description;
        emojiRef.current.textContent = getEmoji(id);
    }

    function getEmoji(weatherId) { //reference to https://openweathermap.org/weather-conditions for IDs
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
        cityDispRef.current.style.display = "none";
        tempRef.current.style.display = "none";
        humidityRef.current.style.display = "none";
        descRef.current.style.display = "none";
        emojiRef.current.style.display = "none";
        errorRef.current.style.display = "block";
        errorRef.current.textContent = message;
    }

    async function getWeatherData(request) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${request}&appid=${apiKey}`; //the link taken from https://openweathermap.org/current
        const response = await fetch(apiUrl);
        console.log(response); //for a developer
        if(!response.ok) {
            throw new Error("Could not fetch weather data"); //if an Error is detected, the next code lines won't be executed
        }
        return await response.json(); //response.json() is a "data" object
    }

    return(
        <>
            <h1 className="weather-cap">How Big, How Blue, How Beautiful is the sky now?</h1>
            <div className="card"              style={{display: "none"}} ref={cardRef}>
                <h1 className="cityDisplay"    style={{display: "none"}} ref={cityDispRef}></h1>
                <p className="tempDisplay"     style={{display: "none"}} ref={tempRef}></p>
                <p className="humidityDisplay" style={{display: "none"}} ref={humidityRef}></p>
                <p className="descDisplay"     style={{display: "none"}} ref={descRef}></p>
                <p className="emojiDisplay"    style={{display: "none"}} ref={emojiRef}></p>
                <p className="errorDisplay"    style={{display: "none"}} ref={errorRef}></p>
            </div>
        </>
    );
}
export default Weather;