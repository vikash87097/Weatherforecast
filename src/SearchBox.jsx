import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({ updateInfo }){

    let[city, setCiy] = useState("");
    let[error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "cf9b609840d22d9edcfc0f303b71178f";

    let getWeatherInfo = async ()=>{
        try{ 
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        // console.log(jsonResponse);
        let result={
            city: city,
         feelsLike: jsonResponse.main.feels_like,
         grndLevel: jsonResponse.main.grnd_level,
         humidity: jsonResponse.main.humidity,
         pressure: jsonResponse.main.pressure ,
         seaLevel: jsonResponse.main.grnd_sea_level,
         temp: jsonResponse.main.temp,
         tempMax : jsonResponse.main.temp_max,
         tempMin  : jsonResponse.main.temp_min 
        };
        console.log(result);
        return result;
    }catch(err){
        throw err;
    }
    };

    let handleChange = (event) => {
        setCiy(event.target.value);
    };

    let handleSubmit = async (event) =>{
        try{ 
        event.preventDefault();
        console.log(city);
        setCiy("");
        let newinfo = await getWeatherInfo();
        updateInfo(newinfo);
    }catch(err){
        setError(true);
    }

    };

    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City-name" variant="outlined" value={city} onChange={handleChange}/> 
            <br /><br />  
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color:"red"}}>No sach place exists!</p>}
            </form>
        </div>
    );
}