import React from 'react';
const Form = (props) => {
    return (
        <form className="Search" onSubmit={props.loadWeather}>
            <input type="text" name="city" placeholder="City..." />            
            <input type="text" name="country" placeholder="Country..." />
            <button>Get Weather</button><br />
            {/* <div style={{display:props.display, color: 'red'}}>{props.error}</div> */}
        </form>
        
    )
}
export default Form;