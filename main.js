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

const managerInput = () => {
  const inputElement = document.getElementById("inputValue");
  const value = inputElement.value;
  inputElement.value = "";
  return value;
};
// const promptAlert = (name) => {
//   return { name: `Hello ${name}`, value: Boolean(name) };
// };

// console.log("teste 1", typeof promptAlert(true).name);
// console.log("teste 2", typeof promptAlert("Mozão").value);

// insertItem("teste");
const getInputValue = () => {
  const inputValue = document.getElementById("inputValue");
  const value = inputValue.value;
  inputValue.value = "";
  return value;
};

function saveValue() {
  const text = getInputValue();
  // clearInput();
  insertItem(text);
  // uptadeStorage();
  // managerInput();
  // const text = managerInput();
  console.log("saveValue called with"); //,text

  // insertItem(new Date().toString());

  // listItem.appendChild(inputButton);
  // listItem.appendChild(inputText);
}

// document.querySelector("#listValue").innerHTML =
//   "<li class='tasksToDo' id='tasksToDo'> <span class='list__text'>Lorem ipsum</span> <img class='delete__img' src='./css/img/trash-solid.svg' /></li>";
