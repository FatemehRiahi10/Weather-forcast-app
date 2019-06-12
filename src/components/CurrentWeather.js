import React from 'react';

const CurrentWeather = (props) => {

    return (
        <div>
            <div className="Location">
                {
                    props.city && <p className=""><span className="weather__value"> {props.city}</span>
                    </p>
                }
            </div>
            <div className="Error">
            {
                    props.error && <p className="weather__error">{props.error}</p>
                }
            </div>
            <div className="weather-info">
                {
                    props.date && <p className="weather__key">{!props.error && "Now"}
            {/* <span className="weather__value"> </span> */}
                    </p>
                }
                {
                    props.description && props.icon && <p className="weather__key">
                        <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="" />
                        <span className="weather__value"> {props.description} </span>
                    </p>
                }
                {
                    props.temperature && <p className="weather__key">
                <span className="weather__value"> {props.temperature} &deg;C </span>
                    </p>
                }
                {/* {
                    props.highTemperature && <p className="weather__key highTemp">
                        <span className="weather__value"> {props.highTemperature} &deg;C </span>
                    </p>
                }
                {
                    props.lowTemperature && <p className="weather__key lowTemp">
                        <span className="weather__value"> {props.lowTemperature} &deg;C </span>
                    </p>
                } */}
                
            </div>
        </div>
    )
}
export default CurrentWeather;

