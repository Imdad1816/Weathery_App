const options = {
	method: 'GET',
	headers: {
		'X-Api-Key': 'FT478X4tBG5N2gbthAjsYvTfveTjel5xc2H3ED0C',
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://api.api-ninjas.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
		
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		temp.innerHTML = response.temp
		wind_speed.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ city + "')"
		// Create a new JavaScript Date object based on the timestamp
		// multiplied by 1000 so that the argument is in milliseconds, not seconds.
		var date = new Date((response.sunrise) * 1000);
		// Hours part from the timestamp
		var hours = date.getHours();
		// Minutes part from the timestamp
		var minutes = "0" + date.getMinutes();
		// Seconds part from the timestamp
		var seconds = "0" + date.getSeconds();

		// Will display time in 10:30:23 format
		var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
		time.innerHTML = formattedTime;
		console.log(formattedTime);
		
	})
	.catch(err => console.error(err))
}


submit.addEventListener("click", () => {
	event.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")