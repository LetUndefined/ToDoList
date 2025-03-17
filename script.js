const input = document.querySelector("#input-field");
const label = document.querySelector("#input-label");
const list = document.querySelector("#list");
const addToDo = document.querySelector("#addTodo");

let storedList = JSON.parse(localStorage.getItem("data")) || [];

addToDo.addEventListener("click", (event) => {
  if (!input.value.trim()) {
    event.preventDefault();

    return alert("Field cannot be empty");
  }

  const taskText = input.value;
  const newItem = document.createElement("li");
  newItem.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  newItem.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    console.log(storedList);
    newItem.remove();
    storedList = storedList.filter((item) => item !== taskText);
    saveToLocal();
  });

  list.append(newItem);
  storedList.push(taskText);
  event.preventDefault();
  saveToLocal();
  input.value = "";
});

function loadList() {
  let loadedArray = JSON.parse(localStorage.getItem("data")) || [];

  loadedArray.forEach((item) => {
    const newItem = document.createElement("li");
    newItem.textContent = item;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    newItem.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      newItem.remove();
      storedList = storedList.filter((task) => task !== item);

      saveToLocal();
    });

    list.append(newItem);
    console.log(storedList);
  });
}

function saveToLocal() {
  let stringArray = JSON.stringify(storedList);
  localStorage.setItem("data", stringArray);
}
loadList();
