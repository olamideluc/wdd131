const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
const lastModifiedPara = document.getElementById("lastModified");
if (lastModifiedPara) {
  lastModifiedPara.textContent = "Last Modified: " + document.lastModified;
}