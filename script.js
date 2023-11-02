
// api variables
const apiKey = "e59fc793a428f80ace4415ca7c2b14a2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";

// search variable
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

// image varaible
const weatherIcon = document.querySelector(".weather-icon");


// function to link to api site 
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

   // console.log(data);

   if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
   }
   else{
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°f";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =  Math.round(data.wind.speed) + "m/h";

    if(data.weather[0].main == "clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else   if(data.weather[0].main == "clear"){
        weatherIcon.src = "images/clear.png";
    }
    else   if(data.weather[0].main == "rain"){
        weatherIcon.src = "images/rain.png";
    }
    else   if(data.weather[0].main == "drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else   if(data.weather[0].main == "mist"){
        weatherIcon.src = "images/mist.png";
    }
     else if(data.weather[0].main == "snow"){
        weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";


   }

}

searchBtn.addEventListener ("click", ()=>{
    checkWeather(searchBox.value);
})