import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WatherApp() {

    const[weatherInfo, setWeatherInfo] = useState({
            city: "Bhopal",
            feelsLike: 26.71,
            grndLevel: 1001,
            humidity: 36,
            pressure: 1016,
            seaLevel: undefined,
            temp: 27.06,
            tempMax: 27.06,
            tempMin: 26.87,
            weather: "haze",
    });

    let updateInfo = (newinfo) =>{
        setWeatherInfo(newinfo);
    };

    return (
        <div style={{textAlign:"center"}}>
            <h3>Weather App By Vikash</h3>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}