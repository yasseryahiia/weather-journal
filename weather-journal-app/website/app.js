/* Global Variables */
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?"
    let apiKey = "1d660ce376e25c94d06541caf18c5147";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const getWeather = async(basicUrl,zipCode,apiKey)=>{
    const response = await fetch(
        basicUrl + zipCode +"&appid="+apiKey+"units=metric")
    try{
        const data = await response.json();
        return data
    }catch(error){
        console.log("error",error);
    }
}

const postWeather= async (url='',data={})=>{
    const response = await fetch(url,{
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
    const response = await fetch("/all")
    try{

    }catch(error){
        console.log("error",error);
    }
}