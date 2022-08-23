import removeTask from "./removeTask";
import pickColorForNewTask from "./pickColorForNewTask";
import setTaskAsDone from "./setTaskAsDone";

const addNewTask = () => {
  let id = ''
  const taskList = document.querySelector("ul");
  if (taskList.childNodes.length === 0) {
    id = '0'
  }
  const newTaskName = document.getElementById("name").value;
  const newTaskDescription = document.getElementById("description").value;
  if (newTaskName === "") {
    alert("Please name you task");
  } else {

    let tasks = [];
    const json = JSON.parse(localStorage.getItem("tasks"));
    if(json){
      tasks = Array.from(json);
    }else{
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    
    const checkForDuplication = (tasks) => {
      for (let task of tasks) {
        if (task.name === newTaskName) {
          alert("task already exist");
          document.getElementById("name").value = "";
          document.getElementById("description").value = "";
          return true;
        }
      }
      return false;
    };

    if (checkForDuplication(tasks)) return;

    if(id == ''){
      const lengthOfArr = tasks.length;
      const index = lengthOfArr - 1;
      const lastTask = tasks[index];
      const lastId = Number(lastTask.myId);
      const newId = lastId + 1;
      id = newId.toString();
    }

    const newTask = document.createElement("li");
    newTask.innerHTML = `<article><div class="taskText"><h3>${newTaskName}</h3><p>${newTaskDescription}</p></div><div class ="check"></div><div class = "delete"></div></article>`;
    newTask.querySelector(".check").addEventListener("click", (event) => setTaskAsDone(event));
    newTask.querySelector(".delete").addEventListener("click", (event) => removeTask(event));
    const color = pickColorForNewTask();
    newTask.classList.add(color);
    newTask.setAttribute('id', id);
    taskList.insertBefore(newTask, taskList.children[0]);
    const task = {
      name: newTaskName,
      description: newTaskDescription,
      color: color,
      myId: id,
    };

    localStorage.setItem(
      "tasks",
      JSON.stringify([...JSON.parse(localStorage.getItem("tasks")), task])
    );
  }

  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
};

export default addNewTask;