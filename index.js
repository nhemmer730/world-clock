function updateTime() {
    let bostonElement = document.querySelector("#boston");
    if (bostonElement) {
        let bostonDateElement = bostonElement.querySelector(".date");
        let bostonTimeElement = bostonElement.querySelector(".time");
        let bostonTime = moment().tz("America/New_York");
        
        bostonDateElement.innerHTML = moment().format("MMMM Do YYYY");
        bostonTimeElement.innerHTML = bostonTime.format("h:mm:ss [<small>] A[</small>]");
    }

    let dublinElement = document.querySelector("#dublin");
    if (dublinElement) {
        let dublinDateElement = dublinElement.querySelector(".date");
        let dublinTimeElement = dublinElement.querySelector(".time");
        let dublinTime = moment().tz("Europe/Dublin");
        dublinDateElement.innerHTML = moment().format("MMMM Do YYYY");
        dublinTimeElement.innerHTML = dublinTime.format("h:mm:ss [<small>] A[</small>]");
    }
}

function updateCity(event) { 
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let cititesElement = document.querySelector("#cities");
   cititesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement= document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
