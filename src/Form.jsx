//import React, {useState} from 'react';
import React, {useRef} from 'react';
import Weather from './Weather.jsx';
/**
 * @component
 * @function Form
 * @returns {JSX.Element} The form section with input and button elements and a child <Weather />.
 * @description Contains form elements and passes props (user input and a reference to the form)
 * to a child <Weather /> component.
 */
function Form() {
    /**
     * @type {React.RefObject<string>}
     * @description The current user request (a city) being passed to <Weather />.
     */
    const cityInputRef = useRef("");
    /**
     * @type {React.RefObject<null>}
     * @description A reference to the form (to add an event listener in <Weather />
     * to check when users click on a button).
     */
    const formRef = useRef(null);
    return(
        <>
            <form className="weather-form" ref={formRef} >
                <input type="text" className="city-input" ref={cityInputRef} placeholder="Enter city" />
                <button type="submit">Get weather</button>
            </form>
            <Weather weatherForm={formRef} cityInput={cityInputRef} />
        </>
    );
}
export default Form;