const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "6185f8f11fmsh69c5d9acdfbd387p1972fdjsn1e82b2a14812",
		"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
	},
};
const cities = ["Shanghai","New Delhi","Mumbai", "New York","London", "Pune","Chennai"]; // Add more cities as needed

const createTableRow = (city) => {
	const row = document.createElement("tr");
	row.id = `${city}_row`;
  
	const cells = [
		"city",
	  "cloud_pct",
	  "feels_like",
	  "humidity",
	  "max_temp",
	  "min_temp",
	  "sunrise",
	  "sunset",
	  "temp",
	  "wind_speed",
	];
  
	cells.forEach((parameter) => {
	  const cell = document.createElement("td");
	  cell.id = `${parameter}_${city}`;
	  row.appendChild(cell);
	});
  
	return row;
  };
  
  const updateTable = (city ) => {
	if (!document.getElementById(`${city}_row`)) {
		const tableBody = document.getElementById("weatherTableBody");
		const row = createTableRow(city);
		tableBody.appendChild(row);
	
		fetch(
		  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
		  options
		)
		  .then((response) => response.json())
		  .then((response) => {
			console.log(response);
			if (row) {
			  const cells = row.cells;
			  cells[0].textContent = city;
			  cells[1].textContent = response.cloud_pct;
			  cells[2].textContent = response.feels_like;
			  cells[3].textContent = response.humidity;
			  cells[4].textContent = response.max_temp;
			  cells[5].textContent = response.min_temp;
			  cells[6].textContent = response.sunrise;
			  cells[7].textContent = response.sunset;
			  cells[8].textContent = response.temp;
			  cells[9].textContent = response.wind_speed;
			}
		  })
		  .catch((err) => console.error(err));
	  }
	
  };
const getWeather = (city) => {
	city_name.innerHTML = city;
	fetch(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
		options
	)
		.then((response) => response.json())
		.then((response) => {
			cloud_pct.innerHTML = response.cloud_pct;
			temp.innerHTML = response.temp;
			temp2.innerHTML = response.temp;
			feels_like.innerHTML = response.feels_like;
			humidity.innerHTML = response.humidity;
			humidity2.innerHTML = response.humidity;
			min_temp.innerHTML = response.min_temp;
			max_temp.innerHTML = response.max_temp;
			wind_speed.innerHTML = response.wind_speed;
			wind_speed2.innerHTML = response.wind_speed;
			sunrise.innerHTML = response.sunrise;
			sunset.innerHTML = response.sunset;
			console.log(response);
			
		})
		.catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
});
getWeather("Bangalore");

cities.forEach((city) => {
	updateTable(city);
  });