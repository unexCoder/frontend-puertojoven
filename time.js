console.log('Hello timer');

function displayCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    console.log(timeString);
}

// Update every second
setInterval(displayCurrentTime, 1000);