var mapaGoogle;
let initMap = () => {
  mapaGoogle = new google.maps.Map(document.getElementById('mapa'), {
    center: { lat: -16.512, lng: -71.123 },
    zoom: 8,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "stylers": [
          {
            "color": "#a4f9a2"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#a4f9a2"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#fc252b"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#fc252b"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#fc252b"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#b7eaf9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
  });

  mapaGoogle.addListener("click", function (evento) {
    console.log(evento.latLng.lat());
    console.log(evento.latLng.lng());
    // TAREA 1, detectar cada lugar donde se hace click en el mapa
    // e ir uniendo todos los puntos con polylines
  })
}
initMap();

// COLOCAR UN POLYLINE
let tecsupPlaza = new google.maps.Polyline(
  {
    path: [
      { lat: -16.4291908, lng: -71.5197197, },
      { lat: -16.3985985, lng: -71.5384413 }
    ],
    strokeColor: '#ff0000',
    strokeWeight: 2
  }
);
tecsupPlaza.setMap(mapaGoogle);



// FUNCION PARA BUSCAR UNA CIUDAD CON OPENWEATHERMAP
let buscarCiudadPorNombre = async (nombre) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${nombre}&appid=f216cdc5ffb3839b7ebdb07394220bc1`;
  let reponse = await fetch(url);
  let objJson = await reponse.json();
  return objJson;
}


let btnAgregarMarcador = document.getElementById("btnAgregarMarcador");
btnAgregarMarcador.onclick = () => {
  // colocar marcador en un mapa de GoogleMaps
  let marcador = new google.maps.Marker({ position: { lat: -16.512, lng: -71.123 }, map: mapaGoogle })
}

let formBusqueda = document.getElementById("formBusqueda");
formBusqueda.onsubmit = (event) => {
  event.preventDefault();
  $("#carga").removeAttr("hidden");
  $("#txtError").attr("hidden", "hidden");

  buscarCiudadPorNombre($("#inputBusqueda").val()).then(rpta => {
    $("#carga").attr("hidden", "hidden");
    if (rpta.cod === 200) {
      // el lugar existe y crear el marcador
      let lugar = new google.maps.Marker(
        {
          position: {
            lat: rpta.coord.lat,
            lng: rpta.coord.lon
          },
          map: mapaGoogle,
          icon: './flag.png'
        }
      )
      // centrar el mapa
      mapaGoogle.setCenter({
        lat: rpta.coord.lat,
        lng: rpta.coord.lon
      });
      mapaGoogle.setZoom(15)
    } else {
      // el lugar no existe y mostrar mensaje de error
      $("#txtError").removeAttr("hidden");
    }
  })
}



let obtenerUbicacion = () => {
  // INTENTANDO acceder a la ubicación del dispositivo
  navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
    console.log(`Latidud del disp. => ${latitude}`);
    console.log(`Longitud del disp. => ${longitude}`);


  }, () => {
    console.log("El usuario no aceptó que accedieramos a la ubicación");

  }, {
    enableHighAccuracy: true
  })
}

obtenerUbicacion();