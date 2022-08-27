const KEY_LOCAL_TASKS = "TasksToDo";

const inputButton = document.getElementById("inputButton");
inputButton.addEventListener("click", saveValue);
const listValue = document.getElementById("listValue");
const inputEvent = document.getElementById("inputEvent");
const inputText = document.createElement("span");
const inputDelete = document.createElement("img");

inputValue.addEventListener("keyup", function enterButton(e) {
  var key = e.which || e.keyCode;
  if (key == 13) {
    saveValue();
  }
});

const getStorageValue = () => {
  const savedLocal = localStorage.getItem("listValue1");
  let parsedArray = JSON.parse(savedLocal);
  if (savedLocal === null) {
    parsedArray = [];
  }
  return parsedArray;
};
const getStorageValueClone = () => {
  const savedLocal = localStorage.getItem("listValue1");

  return JSON.parse(savedLocal) || [];
};
function insertItem(text) {
  const listItem = document.createElement("li");
  listValue.appendChild(listItem);
  const element = document.createElement("span");
  listItem.appendChild(element);
  element.innerHTML = text;
  const buttonTag = document.createElement("button");
  listItem.appendChild(buttonTag);
  const listBox = document.createElement("img");
  buttonTag.appendChild(listBox);
  listBox.setAttribute("class", "delete__img");
  listBox.setAttribute("src", "./css/img/trash-solid.svg");
}

const valorMemo = (text) => {
  const storageValue = getStorageValue();
  storageValue.push(text);
  localStorage.setItem("listValue1", JSON.stringify(storageValue));
};
const reatributeValue = () => {
  const storageValue = getStorageValue();
  if (storageValue.length) {
    storageValue.forEach((element) => {
      insertItem(element);
    });
  }
};
const managerInput = () => {
  const inputElement = document.getElementById("inputValue");
  const value = inputElement.value;
  inputElement.value = "";
  return value;
};

const getInputValue = () => {
  const inputValue = document.getElementById("inputValue");
  const value = inputValue.value;
  inputValue.value = "";
  return value;
};
reatributeValue();
function saveValue() {
  const text = getInputValue();
  insertItem(text);

  valorMemo(text);
}
