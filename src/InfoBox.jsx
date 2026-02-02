import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css';

export default function Infobox({info}) {
    const img_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz1HQ9T-EFWqH1m6AkYDtfEYvTmyUQo_pp7Q&s";
    const hot_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWHoHoCTCfG70LwKMF-ZzbN9ob8bGRFxIOw&s';
    const cold_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaV-ze1a2l3Z05L8uzfTFkR1ZEUq1YWqnQQg&s';
    const rain_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPWRx5AO9-JJH3VqnePeCX2VaiHoZDLRnCqw&s';

    return (
        <div className="InfoBox">
            
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? rain_url : info.temp > 15 ? hot_url : cold_url}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {
                            info.humidity > 80 ? <ThunderstormIcon/> : 
                            info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>
                        }
                    </Typography>
                    <Typography variant="p" sx={{ color: 'text.secondary' }} >
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}&deg;C</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>The weather can be described as {info.weather} and feels like {info.feelslike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}