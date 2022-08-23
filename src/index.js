import loadTasks from "./loadTasks";
import addNewTask from "./addNewTask";
import "./styles/main.scss";
import "./styles/colors.scss";
import "./styles/darkMode.scss";
import changeLightDarkMode from "./changeLightDarkMode";

const addButton = document.getElementById("addButton");
const darkModeButton = document.getElementById("darkMode");

addButton.addEventListener("click", addNewTask);
darkModeButton.addEventListener("click", changeLightDarkMode);
window.addEventListener("load", loadTasks);

