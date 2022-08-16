import removeTask from "./removeTask";

const loadTasks = () => {
  const taskList = document.querySelector("ul");
  if (localStorage.getItem("tasks") == null) return;

  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `<article><h3>${task.name}</h3><p>${task.description}</p><div class ="check" onclick="taskDone(this)"></div><div class = "delete" onclick="removeTask(this)"></div></article>`;
    // li.addEventListener("click", (event) => removeTask(event));
    taskList.insertBefore(li, taskList.children[0]);
  });
};

export default loadTasks;
