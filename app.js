const dayElement = document.querySelector("[data-testid='currentDayOfTheWeek']");
const timeElement = document.querySelector('[data-testid="currentUTCTime"]');

function updateTimeAndDate() {
  const today = new Date();
  
  // Format the current day of the week (e.g., "Monday")
  const options = { weekday: 'long' };
  const todayDate = today.toLocaleDateString('en-US', options);
  
  // Get the current UTC time in milliseconds
  const utcTime = today.getTime();
  
  // Update the text content of the selected elements
  dayElement.textContent = todayDate;
  timeElement.textContent = utcTime;
}

// Call updateTimeAndDate function initially to set the initial values
updateTimeAndDate();

// Use setInterval to repeatedly call updateTimeAndDate every 1000 milliseconds (1 second)
setInterval(updateTimeAndDate, 1000);