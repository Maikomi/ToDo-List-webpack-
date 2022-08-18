const removeTask = (event) => {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  const wholeTask = event.target.parentElement.parentElement;
  const id = wholeTask.getAttribute('id');

  document.getElementById(id).remove();

  const isDifferentThanId = value => {
     return value.myId != id
  }
  
  tasks = tasks.filter(isDifferentThanId);
  localStorage.setItem("tasks", JSON.stringify(tasks));

};

export default removeTask;
