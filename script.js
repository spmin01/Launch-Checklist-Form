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
    const formSubmit = document.getElementById("formSubmit");

    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json().then(function(json) {
            let missionTarget = document.getElementById("missionTarget");
            let targetIndex = Math.floor(Math.random() * json.length);
            // console.log(targetIndex);

            missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json[targetIndex].name}</li>
                    <li>Diameter: ${json[targetIndex].diameter}</li>
                    <li>Star: ${json[targetIndex].star}</li>
                    <li>Distance from Earth: ${json[targetIndex].distance}</li>
                    <li>Number of Moons: ${json[targetIndex].moons}</li>
                </ol>
                <img src="${json[targetIndex].image}"</li>
            `;
        });
    });

    formSubmit.addEventListener("click", function(event) {
        // grab data from the form
        let pilotName = document.querySelector("input[name=pilotName");
        let copilotName = document.querySelector("input[name=copilotName");
        let fuelLevel = document.querySelector("input[name=fuelLevel");
        let cargoWeight = document.querySelector("input[name=cargoWeight");

        let faultyItems = document.getElementById("faultyItems");
        let launchStatus = document.getElementById("launchStatus");

        if (pilotName.value === '' || copilotName.value === '' || fuelLevel.value === '' || cargoWeight.value === '') {
            alert("All fields required!");
            event.preventDefault();

        } else if (!isNaN(Number(pilotName.value)) || !isNaN(Number(copilotName.value))) {
            alert("Pilot and Copilot name must be strings!")
            event.preventDefault();

        } else if (isNaN(Number(fuelLevel.value)) || isNaN(Number(cargoWeight.value))) {
            alert("Fuel level and Cargo weight must be numbers!");
            event.preventDefault();

        } else {
            let pilotStatus = document.getElementById("pilotStatus");
            let copilotStatus = document.getElementById("copilotStatus");
            let fuelStatus = document.getElementById("fuelStatus");
            let cargoStatus = document.getElementById("cargoStatus");
            let launchReady = true;

            pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready!`;
            copilotStatus.innerHTML = `Pilot ${copilotName.value} Ready!`

            if (fuelLevel.value < 10000) {
                fuelStatus.innerHTML = "Fuel level too low for launch!";
                launchReady = false;
            } else {
                fuelStatus.innerHTML = "Fuel level high enough for launch.";
            }

            if (cargoWeight.value > 10000) {
                cargoStatus.innerHTML = "Cargo weight too heavy for launch!";
                launchReady = false;
            } else {
                cargoStatus.innerHTML = "Cargo weight low enough for launch.";
            }

            if (!launchReady) {
                launchStatus.innerHTML = "Shuttle is not ready for launch."
                launchStatus.style.color = "red";

            } else {
                launchStatus.innerHTML = "Shuttle is ready for launch!";
                launchStatus.style.color = "green";
            }

            faultyItems.style.visibility = "visible";
            event.preventDefault();
        }
    });
});