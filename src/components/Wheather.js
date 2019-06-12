import React from 'react';
const Weather = (props) => {
    return (
        <div className="weather-info">
            {
                props.country && props.city && <p className="weather__key">Location:
            <span className="weather__value"> {props.city}, {props.country}</span>
                </p>
            }
            {/* {
                props.date && <p className="weather__key">Day:
            <span className="weather__value"> {props.date}</span>
                </p>
            } */}
            {
                props.temperature && <p className="weather__key">Temperature:
                <span className="weather__value"> {props.temperature} </span>
                </p>
            }
            {
                props.lowTemperature && <p className="weather__key">Low Temperature:
                <span className="weather__value"> {props.lowTemperature} </span>
                </p>
            }
            {
                props.highTemperature && <p className="weather__key">High Temperature:
                <span className="weather__value"> {props.highTemperature} </span>
                </p>
            }
            {
                props.description && <p className="weather__key"><i className={props.icon}>npm install weather-icons-react --save</i>Conditions:
              <span className="weather__value"> {props.description} </span>
                </p>
            }
            {/* {
                props.description=="overcast clouds" && <p className="weather__key"><img src="Clouds.jpg"
              <span className="weather__value"> {props.description} </span>
                </p>
            } */}
            {
                props.error && <p className="weather__error">{props.error}</p>
            }
            {
                <i className="f013"></i>
            }
        </div>
    )
}
export default Weather;

