const addButton = document.getElementById("addButton");
const darkModeButton = document.getElementById('darkMode');

import loadTasks from "./loadTasks";
import addTask from "./addTask";
import './styles/main.scss'
import './styles/colors.scss'
import './styles/darkMode.scss'
import darkMode from './darkMode'
// import clearAll from "./clearAll"

addButton.addEventListener("click", addTask);
darkModeButton.addEventListener('click', darkMode)
window.addEventListener("load", loadTasks);

// const btn = document.getElementById("die");
// btn.addEventListener("click", clearAll);