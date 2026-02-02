import SearchBox from "./SearchBox";
import Infobox from "./InfoBox";
import {useState} from 'react';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "delhi",
        feelslike: 294.74,
        humidity: 49,
        temp: 295.2,
        tempMax: 295.2,
        tempMin: 295.2,
        weather: "haze"
    });

    let updateInfo = (newInf) => {
        setWeatherInfo(newInf);
    }
    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <Infobox info={weatherInfo}/>
        </div>
    )
}