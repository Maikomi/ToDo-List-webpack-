const addButton = document.getElementById("addButton");

import loadTasks from "./loadTasks";
import addTask from "./addTask";
import './styles/main.scss'
import clearAll from "./clearAll"

addButton.addEventListener("click", addTask);
window.addEventListener("load", loadTasks);

const btn = document.getElementById("die");
btn.addEventListener("click", clearAll);