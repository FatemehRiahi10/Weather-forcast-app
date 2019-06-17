import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import CurrentWeather from './components/CurrentWeather';
import Weather5Day from './components/Weather5Day';
import './Weather.css';
import './style.css';

class App extends React.Component {
    state = {
        fullData: [],
        Info: [],
        temperature: null,
        city: null,
        country: null,
        lowTemperature: null,
        highTemperature: null,
        description: null,
        icon: null,
        error: null,
        display: "none"
    }

    getWeather = async (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;


        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&APPID=9387dacd27cc5633d82ffff08e4df615`)
            .then(response => response.json())
            .then(data => {
                let i = 0;
                let A = [];
                let lastDate = new Date(data.list[0].dt_txt).toLocaleString('en-En', { weekday: 'long' });
                let minTemp = data.list[0].main.temp_min;
                let maxTemp = data.list[0].main.temp_max;
                for (i = 0; i < data.list.length; i++) {
                    if (new Date(data.list[i].dt_txt).toLocaleString('en-En', { weekday: 'long' }) === lastDate) {
                        lastDate = new Date(data.list[i].dt_txt).toLocaleString('en-En', { weekday: 'long' })
                        // ---Min Temp of the day ---
                        if (data.list[i].main.temp_min < minTemp) {
                            minTemp = data.list[i].main.temp_min
                        }

                        // ---Max Temp of the day ---
                        if (data.list[i].main.temp_max > maxTemp) {
                            maxTemp = data.list[i].main.temp_max
                        }
                    } else {
                        lastDate = new Date(data.list[i].dt_txt).toLocaleString('en-En', { weekday: 'long' })
                        data.list[i - 1].main.temp_min = minTemp

                        data.list[i - 1].main.temp_max = maxTemp
                        A.push(data.list[i - 1])
                    }
                }
                console.log("A", A);

                this.setState({
                    Info: A
                })

                this.setState({
                    date: this.state.Info[0].dt_txt,
                    temperature: this.state.Info[0].main.temp,
                    city: city,
                    country: country,
                    lowTemperature: this.state.Info[0].main.temp_min,
                    highTemperature: this.state.Info[0].main.temp_max,
                    description: this.state.Info[0].weather[0].description,
                    icon: this.state.Info[0].weather[0].icon,
                    error: ""
                })
            })

            .catch(err => {
                this.setState({
                    fullData: [],
                    Info: [],
                    temperature: null,
                    city: null,
                    country: null,
                    lowTemperature: null,
                    highTemperature: null,
                    description: null,
                    icon: null,
                    display: "block",
                    error: "city not found"
                })
            }                
            )

    }

    handleClick = (e) => {
        console.log("e", e);
    }


    render() {
        return (
            <div>
                <div className="container">
                    <Titles />
                    <Form
                        loadWeather={this.getWeather}
                        display={this.state.display}
                        error={this.state.error} />
                    <br />
                    <div className="Today">
                        <CurrentWeather
                            key='today'
                            {...this.state}
                        />
                    </div>
                    <br />
                    <div className="fiveDay">
                        {this.state.Info.map(each => {
                            return (
                                <div key={each.index} className={(each === this.state.Info[0]) ? "currentDay" : "otherDays"}>
                                    <Weather5Day                                        
                                        date={each.dt_txt}
                                        city={each.city}
                                        country={each.country}
                                        lowTemperature={each.main.temp_min}
                                        highTemperature={each.main.temp_max}
                                        description={each.weather[0].description}
                                        icon={each.weather[0].icon}
                                        error={each.error}
                                        onClick={this.handleClick}
                                    />
                                </div>
                            )
                        })}
                    </div>

                    <div> Chart </div>

                </div>
            </div >
        );
    }
}

export default App;
