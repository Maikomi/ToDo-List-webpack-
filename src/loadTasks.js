import removeTask from "./removeTask";
import taskDone from "./taskDone";
console.log(taskDone);
const loadTasks = () => {
  const taskList = document.querySelector("ul");
  if (localStorage.getItem("tasks") == null) return;

  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.classList.add(task.color);
    li.innerHTML = `<article><div class="taskText"><h3>${task.name}</h3><p>${task.description}</p></div><div class ="check"></div><div class = "delete"></div></article>`;
    li.querySelector('.check').addEventListener("click", (event) => taskDone(event));
    li.querySelector('.delete').addEventListener("click", (event) => removeTask(event));
    taskList.insertBefore(li, taskList.children[0]);
  });
};



export default loadTasks;
