function getAPIdata() {
	var url = 'https://api.openweathermap.org/data/2.5/weather';
	var apiKey ='07f9fd572a5c355c45e856b4676764c7';
	var city = 'amsterdam';

	var request = url + '?' + 'appid=' + apiKey + '&' + 'q=' + city;
	
	fetch(request)

	.then(function(response) {
		return response.json();
	})

	.then(function(response) {
		console.log(response);
		var weatherBox = document.getElementById('weather');
		var windSpeed = document.getElementById('wind');
		var clouds = document.getElementById('clouds');

		var degC = Math.floor(response.main.temp - 273.15);
		weatherBox.innerHTML = degC + '&#176;C <br>';

		windSpeed.innerHTML = response.wind.speed;
		clouds.innerHTML = response.weather[0].description;

	});

}

	getAPIdata();
