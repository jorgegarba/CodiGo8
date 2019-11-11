


let getClimaByCiudad = async (ciudad) => {
  let url = `http://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=f216cdc5ffb3839b7ebdb07394220bc1`
  let response = await fetch(url);
  let miJson = await response.json();
  return miJson;
}

getClimaByCiudad("Puno,pe").then(json => {
  console.log(json);
})
