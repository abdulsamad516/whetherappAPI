function think() {

    let cityName = document.getElementById("cityName").value
    var result = document.getElementById("result");

     
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=16f3ad77080257ac9e865843a7bbaa88&units=metric`)
        .then(function (response) {

            let weatherData = response.data
            console.log("weatherData: ", weatherData);

            var temp = Number(weatherData?.main?.temp);
            var minTemp = Number(weatherData?.main?.temp_min);
            var maxTemp = Number(weatherData?.main?.temp_max);
            // var maxTemp = 25;
            // var perp = 25; // 0 - 100


            if ((temp < -10) || (minTemp < -10)) {

                result.innerText = "dont go out its too cold";

            } else if (temp > 35 || maxTemp > 35) {

                result.innerText = "Dont go outside its too hot";

            } else if (
                (temp >= -10 && temp <= 5) ||
                (minTemp >= -10 && minTemp <= 5)
            ) {

                result.innerText = "carry coat and be care full";

            } else if (
                (temp > 5 && temp <= 20)
                || (minTemp > 5 && minTemp <= 20)
            ) {

                result.innerText = "carry jacket with you";

            }

            else if (temp > 20 && temp <= 35) {

                result.innerText = "Dont carry jacket";

            }

            result.innerText += ` - current temprature is ${temp}'C and its going to be ${minTemp}'C at minimum`

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}
