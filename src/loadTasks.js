import removeTask from "./removeTask";
import setTaskAsDone from "./setTaskAsDone";
const loadTasks = () => {
  const taskList = document.querySelector("ul");
  if (localStorage.getItem("tasks") == null) return;

  let tasks = JSON.parse(localStorage.getItem("tasks"));

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.classList.add(task.color);
    li.innerHTML = `<article><div class="taskText"><h3>${task.name}</h3><p>${task.description}</p></div><div class ="check"></div><div class = "delete"></div></article>`;
    li.querySelector(".check").addEventListener("click", (event) => setTaskAsDone(event));
    li.querySelector(".delete").addEventListener("click", (event) => removeTask(event));
    li.setAttribute('id', task.myId);
    taskList.insertBefore(li, taskList.children[0]);
  });
};

export default loadTasks;
