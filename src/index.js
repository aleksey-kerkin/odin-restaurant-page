import contactPage from "./contact.js";
import homePage from "./home.js";
import menuPage from "./menu.js";
import "./styles.css";

// Initial page load
homePage();

// Tab switching
const buttons = document.querySelectorAll("header button");
buttons[0].addEventListener("click", homePage);
buttons[1].addEventListener("click", menuPage);
buttons[2].addEventListener("click", contactPage);
