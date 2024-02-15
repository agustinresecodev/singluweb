// Initialize and add the map
function initMap() {
  // Get locations of places
  const chiclana = { lat: 36.419, lng: -6.149 };

  // The map, centered at chiclana
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: chiclana,
  });

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          //centering the map on the user's location
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });





  mainData(map); // Llama a mainData() pasando el mapa como argumento
}

mainData = async (map) => {    
  try {
      const dataFetching = await fetch('http://localhost:3000/places');
      const data = await dataFetching.json();
      
      data.forEach(element => {
          position_marker = {lat: element.lat, lng: element.lng};
          let marker = new google.maps.Marker({
              position: position_marker,
              map: map,
              title: element.name             
          });  
          
          // Create info window for each marker
          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div>
                <h2>${element.name}</h2>
                <p>Direccion: ${element.address}</p>
                <p>Telefono: ${element.phone}</p>
                <p>Descripción: ${element.description}</p>
              </div>
            `
          });

          // Add click event listener to marker
          marker.addListener("click", () => {
            infoWindow.open(map, marker); // Open info window when marker is clicked
          });

      });
  }
  catch (err) {
      console.log(err);
  }
}






















// // Initialize and add the map
// function initMap() {

//   // Get locations of places
//   const uluru = { lat: -25.344, lng: 131.036 };
//   const chiclana = { lat: 36.419, lng: -6.149 };
  

//   // The map, centered at chiclana
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 16,
//     center: chiclana,
//   });

//   // The marker, de prueba
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
  
//   // The marker, positioned at La bella sin gluten
//   //const marker2 = new google.maps.Marker({
//   //  position: bellaSinGluten,
//   //  map: map,
//   //});

  

  


  // const contentString =
  //   '<div id="content">' +
  //   '<div id="siteNotice">' +
  //   "</div>" +
  //   '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
  //   '<div id="bodyContent">' +
  //   "<p><b>U</b>, also referred to as <b>Ayers Rock</b>, is a large " +
  //   "sandstone rock formation in the southern part of the " +
  //   "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
  //   "south west of the nearest large town, Alice Springs; 450&#160;km " +
  //   "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
  //   "features of the Uluru - Kata Tjuta National Park. Uluru is " +
  //   "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
  //   "Aboriginal people of the area. It has many springs, waterholes, " +
  //   "rock caves and ancient paintings. Uluru is listed as a World " +
  //   "Heritage Site.</p>" +
  //   '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
  //   "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
  //   "(last visited June 22, 2009).</p>" +
  //   "</div>" +
  //   "</div>";
  

   

    // const infowindow2 = new google.maps.InfoWindow({
    //   content: contentString2,
    //   ariaLabel: "La Bella sin gluten",
    // });


  // const infowindow = new google.maps.InfoWindow({
  //   content: contentString,
  //   ariaLabel: "Uluru",
  // });

  // marker.addListener("click", () => {
  //   infowindow.open({
  //     anchor: marker,
  //     map,
  //   });
  // });

  // marker2.addListener("click", () => {
  //   infowindow2.open({
  //     anchor: marker2,
  //     map,
  //   });
  // });




//}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}


// mainData = async () => {    
//   try {
//       const dataFetching = await fetch('http://localhost:3000/places');
//       const data = await dataFetching.json();
//       const mapElement = document.getElementById("map");
//       const map = new google.maps.Map(mapElement, {
//         zoom: 16,
//         center: chiclana,
//       });
      
//       data.forEach(element => {
//           position_marker = {lat: element.lat, lng: element.lng};
//           let marker = new google.maps.Marker({
//               position: position_marker,
//               map: map,
//               title: element.name             
//           });  
//           console.log(marker);     
//       });
//   }
//   catch (err) {
//       console.log(err);
//   }
// }
// mainData();

window.initMap = initMap;