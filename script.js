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

window.addEventListener("load", function () {
   const formSubmit = document.getElementById("formSubmit");
   formSubmit.addEventListener("click", function (event) {
      // grab data from the form
      let pilotName = document.querySelector("input[name=pilotName");
      let copilotName = document.querySelector("input[name=copilotName");
      let fuelLevel = document.querySelector("input[name=fuelLevel");
      let cargoWeight = document.querySelector("input[name=cargoWeight");
      let faultyItems = document.getElementById("faultyItems");

      if (pilotName.value === '' || copilotName.value === '' || fuelLevel.value === '' || cargoWeight.value === '') {
         alert("All fields required!");
         event.preventDefault();
      } else if (isNaN(Number(fuelLevel.value)) || isNaN(Number(cargoWeight.value))) {
         alert("Fuel level and Cargo weight must be numbers!");
         event.preventDefault();
      } else {
         let fuelStatus = 'high enough';
         let cargoStatus = 'low enough';

         if(fuelLevel.value < 10000) {
            fuelStatus = 'too low';
         }

         if(cargoWeight.value > 10000) {
            cargoStatus = 'too heavy';
         }

         faultyItems.innerHTML = `
            <ol>
               <li id="pilotStatus">Pilot ${pilotName.value} Ready</li>
               <li id="copilotStatus">Co-pilot ${copilotName.value} Ready</li>
               <li id="fuelStatus">Fuel ${fuelStatus} for launch</li>
               <li id="cargoStatus">Cargo weight ${cargoStatus} for launch</li>
            </ol>
         `;
         faultyItems.style.visibility = "visible";
         event.preventDefault();

      }

   });
});