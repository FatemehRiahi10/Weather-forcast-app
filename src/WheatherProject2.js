import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
// import CurrentWeather from './components/CurrentWeather';
import Weather from './components/Wea';
// import './App.css';
import './Weather.css';
import './style.css';

class App extends React.Component {
    state = {
        Info: [],
        temperature: null,
        city: null,
        country: null,
        lowTemperature: null,
        highTemperature: null,
        description: null,
        icon: null,
        error: null
    }

    getWeather = async (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&APPID=9387dacd27cc5633d82ffff08e4df615`);
        const response = await api_call.json();

        console.log('response', response);

        this.setState({
            temperature: response.list[0].main.temp,
            city: city,
            country: country,
            date: response.list[0].dt_txt,
            lowTemperature: response.list[0].main.temp_min,
            highTemperature: response.list[0].main.temp_max,
            description: response.list[0].weather[0].description,
            icon: response.list[0].weather[0].icon,
            error: ""
        })

        const A = [0, 8, 16, 24, 32];
        const B = A.map(eachItem => [...response.list][eachItem]);

        this.setState({
            Info: [...B]
        })
        this.mappingHandler(response)
    }
    mappingHandler = (data) => {


        const DisplayWeather = this.state.Info.map(eachItem => 
    }
    render() {
            // console.log(eachItem);
            
            <div>
                <div className="container">
                    <Titles />
                    <Form loadWeather={this.getWeather} />
                    <br />
                    {eachItem.date === new Date()  &&
                    <div className="currentDay">
                        <Weather
                            Info={this.state.Info[0]}
                            date={this.state.Info.date}
                            temperature={this.state.Info.temperature}
                            city={this.state.Info.city}
                            country={this.state.Info.country}
                            lowTemperature={this.state.Info.lowTemperature}
                            highTemperature={this.state.Info.highTemperature}
                            description={this.state.Info.description}
                            icon={this.state.Info.icon}
                            error={this.state.Info.error}
                        />
                    </div>
                    }
                    <br />
                    
                    <div className="fiveDay">
                        <Weather
                            Info={eachItem.Info}
                            date={eachItem.date}
                            temperature={eachItem.temperature}
                            city={eachItem.city}
                            country={eachItem.country}
                            lowTemperature={eachItem.lowTemperature}
                            highTemperature={eachItem.highTemperature}
                            description={eachItem.description}
                            icon={eachItem.icon}
                            error={eachItem.error}
                        />
                    </div>
                    
                </div>
            </div>
        );

        return (
            <div>
                {DisplayWeather}
            </div>
        )
        
    }
}

export default App;
