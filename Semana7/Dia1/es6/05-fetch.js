let url = "http://api.openweathermap.org/data/2.5/forecast?q=Puno,pe&appid=f216cdc5ffb3839b7ebdb07394220bc1"

// Consumiendo una API con fecth
// y el verbo GET
fetch(url).then((response) => {
  return response.json();
}).then((objJson) => {
  console.log(objJson);
});


// --------------- FETCH CON POST ------------- //
fetch("https://reqres.in/api/users", {
  method: 'POST',
  headers: {
    "Content-type": "application/json"
  },
  body: JSON.stringify({ name: 'Jorge', job: "Programmer" })
}).then((response) => {
  return response.json();
}).then(data => {
  console.log(data);
})