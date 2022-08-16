const removeTask = (event) => {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

  tasks.forEach((task) => {
    if (task.name == event.target.parentNode.children[0].children[0].innerHTML) {
      tasks.splice(tasks.indexOf(task), 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.target.parentElement.parentElement.remove();
  event.target.parentElement.remove();
};

export default removeTask;
