function numberToHSLColor(number, saturation = 70, lightness = 60) {
    // Map number to hue (0-360)
    const hue = (number * 137.508) % 360; // Golden angle for good distribution
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function setBackgroundByNumber(number) {
    const color = numberToHSLColor(number/50,255,30);
    document.body.style.backgroundColor = color;
}

// Example usage
// setBackgroundByNumber(42); // Generates a unique color for 42


function updateBackgroundFromTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    setBackgroundByNumber(seconds);
    console.log(seconds)
}

setInterval(updateBackgroundFromTime, 1000);

