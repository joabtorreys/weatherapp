function run() {
  let api = "e78e3b483e33573d96521a5aa1ccdfd1";
  const winput = document.getElementById("one");

  const tinput = document.getElementById("two");

  const binput = document.getElementById("three");
  // next
  // next
  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    let x = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}`;

    // going for fetch now
    fetch(x)
      .then((res) => res.json())
      .then((data) => {
        winput.innerHTML = data.name;
        tinput.innerHTML = data.weather[0].description;
        binput.innerHTML = data.main.humidity + "%";
      });
  });
}

run();
