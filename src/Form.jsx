//import React, {useState} from 'react';
import React, {useRef} from 'react';
import Weather from './Weather.jsx';
function Form() {
    const cityInputRef = useRef("");
    const formRef = useRef(null);
    return(
        <>
            <form className="weather-form" ref={formRef}>
                <input type="text" className="city-input" ref={cityInputRef} placeholder="Enter city" />
                <button type="submit">Get weather</button>
            </form>
            <Weather weatherForm={formRef} cityInput={cityInputRef} />
        </>
    );
}
export default Form;