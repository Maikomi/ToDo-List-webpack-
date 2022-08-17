const taskDone = e => {
  const parent = e.target.parentNode.parentNode;
  parent.classList.toggle("completed");
  };
  
  export default taskDone;

  