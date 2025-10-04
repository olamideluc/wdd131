
const temperature = 45; 
const windSpeed = 5;    


function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1);
}


const windChillElement = document.querySelector("#weather p:last-child");
if (temperature <= 50 && windSpeed > 3) {
  const windChill = calculateWindChill(temperature, windSpeed);
  windChillElement.innerHTML = `<strong>Wind Chill:</strong> ${windChill} °F`;
} else {
  windChillElement.innerHTML = `<strong>Wind Chill:</strong> N/A`;
}


const footer = document.querySelector("footer p");
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
footer.innerHTML = `© ${currentYear} Luc Bamigbola — Porto-Novo, Benin — Last modified: ${lastModified}`;
