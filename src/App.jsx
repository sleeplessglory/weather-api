import WeatherCard from './WeatherCard.jsx';
import Form from './Form.jsx';
function App() {
    const styles = { /*Inline CSS styling for <h1>*/
        
    }
    return(
        <>
            <Form />
            <h1 id="weather-cap" style={styles}>How Big, How Blue, How Beautiful is the sky now?</h1>
            <WeatherCard />
        </>
    );
}

export default App;