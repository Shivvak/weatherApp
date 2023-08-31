let inputEle = document.getElementById("locationInput");
let tempEle = document.getElementById("tempValue");
let locEle = document.getElementById("location");
let weatherdescEle = document.getElementById("weatherDesc");
let btnEle = document.getElementById("btn");
let icon = document.getElementById("icon");


const apiKey = '6565b397bccc0c4d2603753e817c5afd';

btnEle.onclick = function(){
    if(inputEle.value ==""){
        alert("Please Enter the location")}

        else{
            loc = inputEle.value
            url =`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`
          fetch(url).then(res =>res.json()).then(data =>{
            console.log(data)
            const{name}= data
            const{feels_like}=data.main
            const{description} = data.weather[0]
            tempEle.innerText = Math.floor(feels_like-273);
            locEle.innerText = name;
            weatherdescEle.innerText = description
          })
          .catch(()=>{
            alert("Enter valid Location")
          })
          inputEle.value =""
        }
    }
