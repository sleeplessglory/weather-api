import React, {useEffect} from 'react';
import Form from './Form.jsx';
import Weather from './Weather.jsx';
/**
 * @author sleeplessglory <sleeplessglory@outlook.com>
 * @version 1.0.0 is available to run from GitHub Pages: {@link https://sleeplessglory.github.io/weather-api}
 * and to clone from the GitHub repository via: {@link https://github.com/sleeplessglory/weather-api}
 * @copyright sleeplessglory 2024
 * 
 * @component
 * @function App
 * @returns {JSX.Element} All the components and headers of an application.
 * @description Contains all the components, headers, etc. for this project. Check out the {@tutorial RunAndTest} tutorial for developers.
 */
function App() {
    /**
     * @description This React useEffect() hook prevents from coincidental page reloads by warning
     * users in a pop-up window (runs only on mount). So, users don't lose their current results.
     */
    useEffect(() => { //preventing users from data loss when reloading or leaving the page
        window.onbeforeunload = () => true;
        return () => {
          window.onbeforeunload = null;
        };
    }, []); //runs only on mount
    return(
        <>
            <Form>
                <Weather />
            </Form>
        </>);
}
export default App;