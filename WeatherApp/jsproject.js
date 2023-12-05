let cityName=document.getElementById('cityname');
let cityValue=document.getElementById('cityvalue');
let countryName=document.getElementById('countryname');
let temperature=document.getElementById('temp');
let sun=document.getElementById('sun')

let search=async()=>{

    if(cityValue.value.length==0)
    {
        alert("please enter a city name to search")
    }
    else{
    try{
        //api call
        let url="http://api.openweathermap.org/data/2.5/weather?q="+cityValue.value+"&units=metric&appid=1cb6532aea3c298a830a71380eace21e"
        let response = await fetch(url)
        let data = await response.json()
        cityName.textContent = data.name
        countryName.textContent = data.sys.country
        temperature.textContent = data.main.temp
        if(data.main.temp<15)
        {
           sun.src="samuel-3884706_960_720.png"
        }
        else if(data.main.temp<25)
        {
            sun.src="cartoon-smiling-sun-giving-thumb-up_29190-746 (1).webp"
        }
        else{
            sun.src="download (4).jpg"
        }
    }
    catch{
        alert("please enter a valid city name...!!!")
    }
}
}
