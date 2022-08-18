const addButton = document.getElementById("addButton");
const darkModeButton = document.getElementById("darkMode");

import loadTasks from "./loadTasks";
import addNewTask from "./addNewTask";
import "./styles/main.scss";
import "./styles/colors.scss";
import "./styles/darkMode.scss";
import changeLightDarkMode from "./changeLightDarkMode";

addButton.addEventListener("click", addNewTask);
darkModeButton.addEventListener("click", changeLightDarkMode);
window.addEventListener("load", loadTasks);

