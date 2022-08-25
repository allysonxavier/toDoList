const KEY_LOCAL_TASKS = "TasksToDo";

const inputButton = document.getElementById("inputButton");
inputButton.addEventListener("click", saveValue);
const listValue = document.getElementById("listValue");

const inputText = document.createElement("span");
const inputDelete = document.createElement("img");

// const inputButton = document.getElementById("inputButton");

function insertItem(text) {
  const listItem = document.createElement("li");
  listItem.innerHTML = text;
  listValue.appendChild(listItem);
}

function managerInput() {
  const inputValue = document.getElementById("inputValue");
  const value = inputValue.value;
  inputValue.value = "";
  return value;
}

insertItem("teste");

function saveValue() {
  const text = getValueInput();
  clearInput();
  insertItem(text);
  uptadeStorage();

  // const text = managerInput();
  // console.log("saveValue called with", text);

  // insertItem(new Date().toString());

  // listItem.appendChild(inputButton);
  // listItem.appendChild(inputText);
}

// document.querySelector("#listValue").innerHTML =
//   "<li class='tasksToDo' id='tasksToDo'> <span class='list__text'>Lorem ipsum</span> <img class='delete__img' src='./css/img/trash-solid.svg' /></li>";
