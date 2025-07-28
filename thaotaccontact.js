const temp = document.getElementById("update");
const temp2 = document.getElementById("khoiupdate");
temp.addEventListener("click", function (e) {
  e.preventDefault();
  temp2.classList.remove("khoitanghinh");
});
const temp4 = document.getElementById("save");
temp4.addEventListener("click", function (e) {
  e.preventDefault();
  temp2.classList.add("khoitanghinh");
});
