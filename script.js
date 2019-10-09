// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function() {
   const form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName");
      let copilotName = document.querySelector("input[name=copilotName");
      let fuelLevel = document.querySelector("input[name=fuelLevel");
      let cargoWeight = document.querySelector("input[name=cargoWeight");
      if(pilotName.value === '' || copilotName.value === '' || fuelLevel.value === '' || cargoWeight.value === '') {
         alert("All fields required!");
         event.preventDefault();
      }

      if(isNaN(Number(fuelLevel.value)) || isNaN(Number(cargoWeight.value))) {
         alert("Fuel level and Cargo weight must be numbers!");
         event.preventDefault();
      }
   });
});