import './style.css';
const body = document.getElementsByTagName('body');

const title = document.createElement('h1');
title.innerHTML = 'Weather App';

const searchLabel = document.createElement('label');
searchLabel.setAttribute('for', 'searchInput');
searchLabel.innerHTML = 'Enter city name';

const searchInput = document.createElement('input');
searchInput.type = 'search';
searchInput.id = 'searchInput';
searchInput.name = 'searchInput';

const searchBtn = document.createElement('button');
searchBtn.innerHTML = 'Check weather';
searchBtn.addEventListener('click', () => {
  getData(searchInput.value);
});

const weatherDiv = document.createElement('div');
weatherDiv.classList.add('weatherDiv');

body[0].appendChild(title);
body[0].appendChild(searchLabel);
body[0].appendChild(searchInput);
body[0].appendChild(searchBtn);
body[0].appendChild(weatherDiv);

async function getData(city) {
  try {
    removeChilds(weatherDiv);
    const response = await fetch (`https://api.weatherapi.com/v1/current.json?key=ed1fd6079de345a4a15175933233112&q=${city}`);
    const data = await response.json();

    const temp_label = document.createElement('p');
    temp_label.id = 'temp_label';
    temp_label.innerHTML = 'Temperature (°C): ';

    const temp_value = document.createElement('p');
    temp_value.id = 'temp_value';
    temp_value.innerHTML = data.current.temp_c;

    const condition_label = document.createElement('p');
    condition_label.id = 'condition_label';
    condition_label.innerHTML = 'Condition: ';

    const condition_value = document.createElement('p');
    condition_value.id = 'condition_value';
    condition_value.innerHTML = data.current.condition.text;

    const condition_img = document.createElement('img');
    condition_img.id = 'condition_img';
    condition_img.src = data.current.condition.icon;

    const wind_dir_label = document.createElement('p');
    wind_dir_label.id = 'wind_dir_label';
    wind_dir_label.innerHTML = 'Wind direction';

    const wind_dir_value = document.createElement('p');
    wind_dir_value.id = 'wind_dir_value';
    wind_dir_value.innerHTML = data.current.wind_dir;

    const wind_kph_label = document.createElement('p');
    wind_kph_label.id = 'wind_kph_label';
    wind_kph_label.innerHTML = 'Wind speed';

    const wind_kph_value = document.createElement('p');
    wind_kph_value.id = 'wind_kph_value';
    wind_kph_value.innerHTML = `${data.current.wind_kph} kph`;

    const humidity_label = document.createElement('p');
    humidity_label.id = 'humidity_label';
    humidity_label.innerHTML = 'Humidity';

    const humidity_value = document.createElement('p');
    humidity_value.id = 'humidity_value';
    humidity_value.innerHTML = `${data.current.humidity}%`; 
    
    weatherDiv.appendChild(temp_label);
    weatherDiv.appendChild(temp_value);
    weatherDiv.appendChild(condition_label);
    weatherDiv.appendChild(condition_value);
    weatherDiv.appendChild(condition_img);
    weatherDiv.appendChild(wind_dir_label);
    weatherDiv.appendChild(wind_dir_value);
    weatherDiv.appendChild(wind_kph_label);
    weatherDiv.appendChild(wind_kph_value);
    weatherDiv.appendChild(humidity_label);
    weatherDiv.appendChild(humidity_value);
  } catch(error) {
    console.log(error);
  }
}

function removeChilds(element) {
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }
}