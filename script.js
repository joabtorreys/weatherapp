function run() {
  let api = "e78e3b483e33573d96521a5aa1ccdfd1";
  const winput = document.getElementById("one");
  winput.innerHTML = "fffhufufh";
  const tinput = document.getElementById("two");
  winput.innerHTML = "fffhufufh";
  const binput = document.getElementById("three");
  // next

  tinput.innerHTML = "38%";
  binput.innerHTML = "heavy";
  // next
  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    let x = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}`;

    // going for fetch now
    fetch(x)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.weather[0]);
        winput.innerHTML = data.name;
      });
  });
}

run();
