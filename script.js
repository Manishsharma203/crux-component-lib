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

function firstButtonReady() {
  const buttons = document.getElementsByClassName("button");
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
      buttons[i].setAttribute(
        "class",
        "button button-primary-light full-width"
      );
    }
  }
}
window.onload = function () {
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
