import removeTask from "./removeTask";

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
    newTask.innerHTML = `<article><h3>${newTaskName}</h3><p>${newTaskDescription}</p><div class ="check" onclick="taskDone(this)">&#10003</div><div class = "delete" onclick="removeTask(this)">&#10006</div></article>`;
    // newTask.addEventListener("click", (event) => removeTask(event));
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
  // }

  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
};

export default addTask;
