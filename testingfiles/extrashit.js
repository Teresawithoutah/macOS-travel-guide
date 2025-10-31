  
     <script>
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
let map;
let marker;
let infoWindow;

async function initMap() {
  // Request needed libraries.
  //@ts-ignore
  const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
    google.maps.importLibrary("marker"),
    google.maps.importLibrary("places"),
  ]);

  // Initialize the map.
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 38.8365812, lng: -112.0867446},
    zoom: 3,
    mapId: "4504f8b37365c3d0",
    mapTypeControl: false,
  });


  

  const card = document.getElementById("search-function");

  //@ts-ignore
  card.appendChild(near_place);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);
  // Create the marker and infowindow
  marker = new google.maps.marker.AdvancedMarkerElement({
    map,
  });
  infoWindow = new google.maps.InfoWindow({});
  // Add the gmp-placeselect listener, and display the results on the map.
  //@ts-ignore
  near_place.addEventListener("gmp-placeselect", async ({ place }) => {
    await place.fetchFields({
      fields: ["displayName", "formattedAddress", "location"],
    });
    // If the place has a geometry, then present it on a map.
    if (place.viewport) {
      map.fitBounds(place.viewport);
    } else {
      map.setCenter(place.location);
      map.setZoom(17);
    }

    let content =
      '<div id="infowindow-content">' +
      '<span id="place-displayname" class="title">' +
      place.displayName +
      "</span><br />" +
      '<span id="place-address">' +
      place.formattedAddress +
      "</span>" +
      "</div>";

    updateInfoWindow(content, place.location);
    marker.position = place.location;
  });
}

// Helper function to create an info window.
function updateInfoWindow(content, center) {
  infoWindow.setContent(content);
  infoWindow.setPosition(center);
  infoWindow.open({
    map,
    anchor: marker,
    shouldFocus: false,
  });
}

initMap();


    </script>



  
     <!-- DISPLAYS MAP
      <div class="map-container">
        <div id="map"></div>
      </div> 
       

-->
    <!-- prettier-ignore 
    <script>(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
        ({key: "AIzaSyDssl7Bzp1r1rPi1F9OblfYuUnjSCmueE4", v: "beta"});</script>
   <script>
              var searchInput = document.getElementById('search-bar');
                  document.addEventListener('DOMContentLoaded', function () {
                    var autocomplete = new google.maps.places.Autocomplete(searchInput, { 
                      types: ['geocode'],
                      componentRestrictions: { country: 'us' }
                    }); 
                    autocomplete.addListener('place_changed', function () { 
                      var near_place = autocomplete.getPlace(); 
                    });
                  });
           </script>
    -->