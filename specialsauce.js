var map;
var Mavericks;
var Yosemite;
var ElCapitan;
var Sierra;
var HighSierra;
var Mojave;
var Catalina;
var BigSur;
var Monterey;
var Ventura;
var Sonoma;

async function initMap() {
  // The location of map default
  const california = { lat: 37.6216985, lng: -118.0471758 };

  // rest of the operating system inspiration locations
  Mavericks = { lat: 37.4921688, lng: -122.4949453 };
  Yosemite = { lat: 37.7425, lng: -119.5375 };
  ElCapitan = { lat: 37.7408236, lng: -119.6386785 };
  Sierra = { lat: 37.6604532, lng: -119.1384556 };
  HighSierra = { lat: 37.7613106, lng: -119.8776988 };
  Mojave = { lat: 35.0101664, lng: -115.4804229 };
  Catalina = { lat: 33.3889848, lng: -118.4549432 };
  BigSur = { lat: 36.331608, lng: -121.8181792 };
  Monterey = { lat: 36.7892849, lng: -121.9442207 };
  Ventura = { lat: 34.032332, lng: -119.134398 };
  Sonoma = { lat: 38.2906039, lng: -122.4691972 };

  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = google.maps.importLibrary("marker");

  
  map = new Map(document.getElementById("map"), {
    zoom: 6,
    center: california,
    mapId: "2752aeb2b88a2b4",
  });
  
  Mavericks_Marker();
  Yosemite_Marker();
  ElCapitan_Marker();
  Sierra_Marker();
  HighSierra_Marker();
  Mojave_Marker();
  Catalina_Marker();
  BigSur_Marker();
  Monterey_Marker();
  Ventura_Marker();
  Sonoma_Marker();
}

function Mavericks_Marker() {

  // MAVERICKS BEACH
  // The marker, positioned at Mavericks Beach
  const marker1 = new google.maps.Marker({
    map: map,
    position: Mavericks,
    title: "Mavericks Beach",
    icon: {
      url:"https://cdn.glitch.global/6ba238ab-3db9-4ad3-80c2-5e420bc0c5c0/mavericks.png?v=1689133030698",
      scaledSize: new google.maps.Size(45,45)
    }

  });

  const infomarker1 = new google.maps.InfoWindow({
    content: "Mavericks Beach",
  });

  marker1.addListener("click", () => {
    infomarker1.open(map, marker1);
  });
  
}

function Yosemite_Marker(){
  // YOSEMITE
  // The marker, positioned at Yosemite
  const marker2 = new google.maps.Marker({
    map: map,
    position: Yosemite,
    title: "Yosemite National Park",
    icon: {
      url:"https://cdn.glitch.global/6ba238ab-3db9-4ad3-80c2-5e420bc0c5c0/yosemite.png?v=1689133022966",
      scaledSize: new google.maps.Size(45,45)
    }
  });
  
  const infomarker2 = new google.maps.InfoWindow({
    content: "Yosemite National Park",
  });

  marker2.addListener("click", () => {
    infomarker2.open(map, marker2);
  });

}



function ElCapitan_Marker(){
//EL CAPITÁN
  // The marker, positioned at El Capitan
  const marker3 = new google.maps.Marker({
    map: map,
    position: ElCapitan,
    title: "El Capitán",
    icon: {
      url:"https://cdn.glitch.global/6ba238ab-3db9-4ad3-80c2-5e420bc0c5c0/elcapitan.png?v=1689133030196",
      scaledSize: new google.maps.Size(45,45)
    }
  });
  const infomarker3 = new google.maps.InfoWindow({
    content: "El Capitán",
  });

  marker3.addListener("click", () => {
    infomarker3.open(map, marker3);
  });

}



function Sierra_Marker(){
//SIERRA
  // The marker, positioned at El Capitan
  const marker4 = new google.maps.Marker({
    map: map,
    position: Sierra,
    title: "Sierra",
    icon: {
      url:"https://cdn.glitch.global/6ba238ab-3db9-4ad3-80c2-5e420bc0c5c0/sierra.png?v=1689133031766",
      scaledSize: new google.maps.Size(120,120)
    }
  });
  const infomarker4 = new google.maps.InfoWindow({
    content: "Sierra",
  });

  marker4.addListener("click", () => {
    infomarker4.open(map, marker4);
  });

}



function HighSierra_Marker(){
//HIGH SIERRA
  // The marker, positioned at El Capitan
  const marker5 = new google.maps.Marker({
    map: map,
    position: HighSierra,
    title: "High Sierra",
    icon: {
      url:"https://cdn.glitch.global/6ba238ab-3db9-4ad3-80c2-5e420bc0c5c0/highsierra.png?v=1689133030538",
      scaledSize: new google.maps.Size(45,45)
    }
  });
  const infomarker5 = new google.maps.InfoWindow({
    content: "High Sierra",
  });

  marker5.addListener("click", () => {
    infomarker5.open(map, marker5);
  });

}


function Mojave_Marker(){
//MOJAVE
  // The marker, positioned at El Capitan
  const marker6 = new google.maps.Marker({
    map: map,
    position: Mojave,
    title: "Mojave Desert",
    icon: {
      url:"https://cdn.glitch.global/6ba238ab-3db9-4ad3-80c2-5e420bc0c5c0/mojave.png?v=1689133030961",
      scaledSize: new google.maps.Size(45,45)
    }
  });
  const infomarker6 = new google.maps.InfoWindow({
    content: "Mojave Desert",
  });

  marker6.addListener("click", () => {
    infomarker6.open(map, marker6);
  });

}

function Catalina_Marker(){
//CATALINA
  // The marker, positioned at El Capitan
  const marker7 = new google.maps.Marker({
    map: map,
    position: Catalina,
    title: "Catalina",
     icon: {
      url:"https://cdn.glitch.global/6ba238ab-3db9-4ad3-80c2-5e420bc0c5c0/catalina.png?v=1689133030022",
      scaledSize: new google.maps.Size(45,45)
    }
  });
  const infomarker7 = new google.maps.InfoWindow({
    content: "Santa Catalina Island",
  });

  marker7.addListener("click", () => {
    infomarker7.open(map, marker7);
  });

}

function BigSur_Marker(){
//BIG SUR
  // The marker, positioned at El Capitan
  const marker8 = new google.maps.Marker({
    map: map,
    position: BigSur,
    title: "Big Sur",
     icon: {
      url:"https://cdn.glitch.global/6ba238ab-3db9-4ad3-80c2-5e420bc0c5c0/bigsur.png?v=1689133029713",
      scaledSize: new google.maps.Size(45,45)
    }
  });
  const infomarker8 = new google.maps.InfoWindow({
    content: "Big Sur",
  });

  marker8.addListener("click", () => {
    infomarker8.open(map, marker8);
  });

}

function Monterey_Marker(){
//SIERRA
  // The marker, positioned at El Capitan
  const marker9 = new google.maps.Marker({
    map: map,
    position: Monterey,
    title: "Monterey Bay",
    icon: {
      url:"https://cdn.glitch.global/6ba238ab-3db9-4ad3-80c2-5e420bc0c5c0/monterey.png?v=1689133031179",
      scaledSize: new google.maps.Size(45,45)
    }
  });
  const infomarker9 = new google.maps.InfoWindow({
    content: "Monterey Bay",
  });

  marker9.addListener("click", () => {
    infomarker9.open(map, marker9);
  });

}

function Ventura_Marker(){
//VENTURA
  // The marker, positioned at El Capitan
  const marker10 = new google.maps.Marker({
    map: map,
    position: Ventura,
    title: "Ventura County",
    icon: {
      url:"https://cdn.glitch.global/6ba238ab-3db9-4ad3-80c2-5e420bc0c5c0/ventura.png?v=1689133032195",
      scaledSize: new google.maps.Size(45,45)
    }
  });
  const infomarker10 = new google.maps.InfoWindow({
    content:"Ventura County",
  });

  marker10.addListener("click", () => {
    infomarker10.open(map, marker10);
  });

}


function Sonoma_Marker(){
//SONOMA
  // The marker, positioned at El Capitan
  const marker11 = new google.maps.Marker({
    map: map,
    position: Sonoma,
    title: "Sonoma County",
    icon: {
      url:"https://cdn.glitch.global/6ba238ab-3db9-4ad3-80c2-5e420bc0c5c0/sonoma.png?v=1689133031953",
      scaledSize: new google.maps.Size(45,45)
    }
  });
  const infomarker11 = new google.maps.InfoWindow({
    content:"Sonoma Wine County",
  });

  marker11.addListener("click", () => {
    infomarker11.open(map, marker11);
  });

}
initMap();

