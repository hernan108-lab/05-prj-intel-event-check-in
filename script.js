// Get all needeed DOM elementes
const form = document.getElementById("checkInForm");
const attendeeNameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

//track attendance
let count = 0;
const maxcount = 50;

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  // Get form values
  const attendeeName = attendeeNameInput.value.trim();
  const team = teamSelect.value;
  const teamName =  teamSelectectedOptions[0].text; 

  console.log(name, team, teamName);

  // Increment attendance count
  count++;
  console.log("total check-ins: " + count); 

  //Update progress bar
  const percentage = Math.round((count / maxcount) * 100) + "%";
  console.log(`Progress: ${percentage}`);

  //Update team count
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  //Show welcome message
  const message = `Welcome! ${attendeeName} from ${teamName}!`;
  console.log(message);

  form.reset();
});