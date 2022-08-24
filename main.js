const KEY_LOCAL_TASKS = "TasksToDo";

const valueInput = document.getElementById("inputValue").value;
const addValue = document.getElementById("add");
const list = document.getElementsById("listValue");
addValue.addEventListener("click", function saveValue(elementLi) {
  addValue.createElement("li");
  document.querySelector("list").appendChild(addValue);
  list.innerHTML = '<li><img src="./css/img/trash-solid.svg" /> </li>';
});
