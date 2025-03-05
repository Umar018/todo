const taskInput = document.querySelector("#task-input");
const btnCreate = document.querySelector(".btn-create");
const activeTasks = document.querySelector(".tasks-to-do");
const doneTasks = document.querySelector(".done-task");

btnCreate.addEventListener("click", function () {
  const newDiv = document.createElement("div");
  newDiv.classList.add("task1");

  const p = document.createElement("p");
  p.textContent = taskInput.value;
  newDiv.appendChild(p);

  const iconsDiv = document.createElement("div");
  iconsDiv.classList.add("icons");
  const checkIcon = document.createElement("img");
  checkIcon.src = "Check.png";
  checkIcon.classList.add("checks");

  const trashIcon = document.createElement("img");
  trashIcon.src = "TrashSimple.png";
  trashIcon.classList.add("checks");

  iconsDiv.appendChild(checkIcon);
  iconsDiv.appendChild(trashIcon);
  newDiv.appendChild(iconsDiv);
  activeTasks.appendChild(newDiv);

  checkIcon.addEventListener("click", function () {
    const doneDiv = newDiv.cloneNode(true);
    doneDiv.querySelector("img[src='Check.png']").remove();
    doneTasks.appendChild(doneDiv);
    newDiv.remove();
  });

  trashIcon.addEventListener("click", function () {
    newDiv.remove();
  });

  taskInput.value = "";
});
