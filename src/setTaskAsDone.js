const setTaskAsDone = (e) => {
  const parent = e.target.parentNode.parentNode;
  parent.classList.toggle("completed");
};

export default setTaskAsDone;
