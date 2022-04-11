/* Global Variables */
    let apiUrl = " https://api.openweathermap.org/data/2.5/weather?zip="
    const apiKey = "1d660ce376e25c94d06541caf18c5147";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// get weather request
const getWeather = async(basicUrl,zipCode,apiKey)=>{
    const fetchWeather = await fetch(
        basicUrl + zipCode +"&appid="+apiKey+"units=metric")
    try{
        const data = await fetchWeather.json();
        return data
    }catch(error){
        console.log("error",error.message);
    }
}
// post weather request
const postWeather= async (data={})=>{
    const response = await fetch("/sendData",{
        method :"POST",
        credentials:"same-origin",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    try{
        const comingData = await response.json();
        console.log(comingData);
        return comingData;
    }catch(error){
        console.log("error",error);
    }
}
const updateUI = async()=>{
    const response = await fetch("/getData")
    try{
    const zipCode = document.getElementById("zip").innerHTML;

    }catch(error){
        console.log("error",error);
    }
}