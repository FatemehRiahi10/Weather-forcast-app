import React from 'react';

const Weather5Day = (props) => {
    return (
        <div className="weather-info">
            {
                props.date && <p className="weather__key">
                    <span className="weather__value">
                        {new Date(props.date).toLocaleString('en-En', { weekday: 'long', month: 'long', day: 'numeric' })} </span>
                </p>
            }
            {/* {
                props.date && <p className="weather__key">
                    <span className="weather__value">
                        {new Date(props.date).toLocaleString('fa-En', { weekday: 'long', month: 'long', day: 'numeric' })} </span>
                </p>
            } */}
            {
                props.description && props.icon &&
                <p className="weather__key">
                    <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="" />
                    <span className="weather__value"> {props.description} </span>
                </p>
            }
            {
                props.temperature && <p className="weather__key">Temp:
                <span className="weather__value"> {props.temperature} &deg;C </span>
                </p>
            }
            {
                props.highTemperature && props.lowTemperature && <p className="weather__key">
                    <span className="weather__value highTemp"> {props.highTemperature} &deg;C </span>/
                    <span className="weather__value lowTemp"> {props.lowTemperature} &deg;C </span>
                </p>
            }
            {/* {
                props.lowTemperature && <p className="weather__key lowTemp">
                    <span className="weather__value"> {props.lowTemperature} &deg;C </span>
                </p>
            } */}
        </div>

    )
}
export default Weather5Day;