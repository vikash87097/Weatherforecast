import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {

    let INIT_URL = "https://images.unsplash.com/photo-1722858344552-7acf888a7046?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D ";
    let HOT_URL = "https://plus.unsplash.com/premium_photo-1673264933056-8f2f9c87742f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN1biUyMGltYWdlfGVufDB8fDB8fHww";
    let COLD_URL = "https://images.unsplash.com/photo-1477468572316-36979010099d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMGltZ2V8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1700813608413-6dbb3b483537?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            <div className="card">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia sx={{ height: 140 }} image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL} title="green iguana" /><CardContent>
                        <Typography gutterBottom variant="h5" component="div">{info.city} {info.humidity > 80 ? ( <ThunderstormIcon /> ) : info.temp > 15 ? (<WbSunnyIcon />) : <AcUnitIcon />}</Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>humidity = {info.humidity}</p>
                            <p>Temprature = {info.temp}&deg;C</p>
                            <p> Max_Temp = {info.tempMax}&deg;C</p>
                            <p>Mini_Temp = {info.tempMin}&deg;C</p>
                            <p>The weather can be describe as {info.weather} and feels Like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}