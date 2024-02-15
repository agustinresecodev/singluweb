// mainData = async () => {    
//   try {
//       const dataFetching = await fetch('http://localhost:3000/places');
      
//       const data = await dataFetching.json();
//      const map = document.getElementById("map");
      
//       data.forEach(element => {
          
//           let marker = new google.maps.Marker({
//               position: {lat: element.lat, lng: element.lng},
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