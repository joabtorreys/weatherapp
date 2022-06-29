function run() {
  let api = "e78e3b483e33573d96521a5aa1ccdfd1";

  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    let x = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}`;

    // going for fetch now
    fetch(x).then((response) => {
      console.log(response);
    });
  });
}

run();
