function Form(){
    return(
        <form className="weatherForm">
                <input type="text" className="cityInput" placeholder="Enter city" />
                <button type="submit" onClick={submit} >Get weather</button>
        </form>
    );
}
export default Form;