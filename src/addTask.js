import removeTask from "./removeTask";
import colorChange from "./colorChange"

const addTask = () => {
  const taskList = document.querySelector("ul");
  if (!localStorage.getItem("tasks")) {
    localStorage.setItem("tasks", JSON.stringify([]));
  }
  const newTaskName = document.getElementById("name").value;
  const newTaskDescription = document.getElementById("description").value;
  if (newTaskName == "") {
    alert("Please name you task");
  } else {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

    const checkForDuplication = (tasks) => {
      for (let task of tasks) {
        if (task.name == newTaskName) {
          alert("task already exist");
          document.getElementById("name").value = "";
          document.getElementById("description").value = "";
          return true;
        }
      }
      return false;
    };

    if (checkForDuplication(tasks)) return;

    const newTask = document.createElement("li");
    newTask.innerHTML = `<article><div class="taskText"><h3>${newTaskName}</h3><p>${newTaskDescription}</p></div><div class ="check"></div><div class = "delete"></div></article>`;
    newTask.querySelector('.check').addEventListener("click", (event) => taskDone(event));
    newTask.querySelector('.delete').addEventListener("click", (event) => removeTask(event));
    newTask.classList = colorChange();
    console.log(newTask.classList);

    taskList.insertBefore(newTask, taskList.children[0]);
    const task = {
      name: newTaskName,
      description: newTaskDescription,
    };

    localStorage.setItem(
      "tasks",
      JSON.stringify([...JSON.parse(localStorage.getItem("tasks")), task])
    );
  }
  

  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
};

export default addTask;
