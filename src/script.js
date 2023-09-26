const openSidebar = document.getElementById("open_sidebar");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");

openSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("isOpen");
  closeSidebar.classList.toggle("isClose");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("isOpen");
  closeSidebar.classList.toggle("isClose");
});

// function isOpen() {
//     var display = document.getElementById("sidebar").style.display;
//     if (display === "hidden") {
//       document.getElementById("sidebar").style.display = "hidden";
//     } else {
//       document.getElementById("sidebar").style.display = "flex";
//     }
//   }
