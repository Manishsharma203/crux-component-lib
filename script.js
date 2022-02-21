const buttonsList = {
  alerts: "Alerts",
  avatar: "Avatar",
  badges: "Badges",
  buttons: "Buttons",
  cards: "Cards",
  images: "Images",
  inputs: "Inputs",
  layout: "Layout",
  lists: "Lists",
  modal: "Modal",
  navbar: "Navbar",
  ratings: "Ratings",
  toast: "Toast/Snackbar",
  typography: "Typography",
};

const body = document.getElementsByTagName("body")[0];

function firstButtonReady() {
  const buttons = document.querySelectorAll(".sidebar .button");
  buttons[0].setAttribute("class", "button button-primary full-width");
}
function selectComponent(event) {
  let target = event.target;
  const node = event.target.tagName;
  if (node === "BUTTON") {
    const value = target.firstElementChild.innerHTML;
    unselectButtons(value);
    target.removeAttribute("class");
    target.setAttribute("class", "button button-primary full-width");
  }
  if (node === "A") {
    const value = target.innerHTML;
    unselectButtons(value);
    target.removeAttribute("class");
    target.parentElement.setAttribute(
      "class",
      "button button-primary full-width"
    );
  }
}
function unselectButtons(value) {
  const buttons = document.querySelectorAll(".sidebar .button");
  console.log(buttons.length);
  for (let i = 0; i < buttons.length; i++) {
    console.log("name", buttons[i].firstElementChild.innerHTML);
    if (buttons[i].firstElementChild.innerHTML !== value) {
      buttons[i].removeAttribute("class");
      if (localStorage.getItem("theme") === "dark") {
        buttons[i].setAttribute("class", "button button-primary full-width");
      } else {
        buttons[i].setAttribute(
          "class",
          "button button-primary-light full-width"
        );
      }
    }
  }
}
window.onload = function () {
  setTheme();
  toggleButtonsColor(localStorage.getItem('theme'))
  firstButtonReady();
};

function alertPopup() {
  const alert = document.querySelector(".alert-example");
  alert.style.display = "block";
}
function alertDismiss() {
  const alert = document.querySelector(".alert-example");
  alert.style.display = "none";
}
function modalPopup() {
  const modal = document.querySelector(".modal");
  modal.style.display = "block";
}
function modalDismiss() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}
function toastPopup() {
  const toast = document.querySelector(".toast-example");
  toast.style.display = "block";
}
function toastDismiss() {
  const toast = document.querySelector(".toast-example");
  toast.style.display = "none";
}

function navbarToggle() {
  const menuIcon = document.querySelector("#menu-icon");
  menuIcon.checked = !menuIcon.checked;
}
function themeToggle() {
  const themeToggle=document.getElementById('themeToggle')
  if (body.classList.contains("darkmode")) {
    localStorage.setItem("theme", "light");
    themeToggle.innerHTML='☀️'
    body.setAttribute("class", "lightmode");
    toggleButtonsColor('light')
  } else {
    localStorage.setItem("theme", "dark");
    themeToggle.innerHTML='🌚'
    body.setAttribute("class", "darkmode");
    toggleButtonsColor('dark')
  }
}
function setTheme() {
  const theme = localStorage.getItem("theme");
  const themeToggle=document.getElementById('themeToggle')
  if (theme === "dark") {
    body.setAttribute("class", "darkmode");
    themeToggle.innerHTML='🌚'
  } else {
    body.setAttribute("class", "lightmode");
    themeToggle.innerHTML='☀️'
  }
}
function toggleButtonsColor(theme){
  const sidebarButtons=document.querySelectorAll('.sidebar .button')
  if(theme==='dark'){
    for(let i=0;i<sidebarButtons.length;i++){
      sidebarButtons[i].setAttribute(
        "class",
        "button button-primary full-width")
    }
  }
  else{
    for(let i=0;i<sidebarButtons.length;i++){
      sidebarButtons[i].setAttribute(
        "class",
        "button button-primary-light full-width")
    }
  }
}
