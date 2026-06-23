// Get all needeed DOM elementes
const form = document.getElementById("checkInForm");
const attendeeNameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const attendeeCount = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");
const greeting = document.getElementById("greeting");

// track attendance
let count = 0;
const maxcount = 50;

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const attendeeName = attendeeNameInput.value.trim();
  const team = teamSelect.value;
  const teamName = teamSelect.options[teamSelect.selectedIndex].text;

  // Increment attendance count
  count = Math.min(count + 1, maxcount);

  // Update attendance display
  attendeeCount.textContent = count;

  // Update progress bar
  const percentage = Math.round((count / maxcount) * 100);
  progressBar.style.width = percentage + "%";

  // Update team count
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent, 10) + 1;

  // Show welcome message
  greeting.textContent = `Welcome ${attendeeName}! ${teamName} is checked in.`;
  greeting.className = "success-message";
  greeting.style.display = "block";

  if (count >= maxcount) {
    greeting.textContent = `Goal reached! ${count}/${maxcount} attendees have checked in.`;
  }

  form.reset();
});
