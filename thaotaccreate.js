// create ticket
const imgclick = document.getElementById("hinhfile");
const fileclick = document.getElementById("file");
imgclick.addEventListener("click", function (e) {
  e.preventDefault();
  fileclick.click();
});
