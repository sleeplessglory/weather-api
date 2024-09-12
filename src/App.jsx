import React, {useEffect} from 'react';
import Form from './Form.jsx';
import Weather from './Weather.jsx';
function App() {
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