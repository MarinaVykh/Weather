//запрос на получение данных о погоде
function loadWeather() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://localhost:8050/forecast/59.9342802,30.3350986', true);
  xhr.send();

  if (xhr.status != 200) {
    alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
  } else {
    var weather = xhr.responseText;
    var parsedWeather = JSON.parse(weather);
    //alert(parsedWeather);

    //получение типа погоды и температуры из пришедшего json файла
    var precipType = parsedWeather.precipType;
    var temperatureFahrenheit = parsedWeather.temperature;
    var temperatureCesium = (5/9) * (temperatureFahrenheit - 32);

    alert(precipType, temperatureCesium);
  }
}

loadWeather();
