const todos = ["Write the letter", "Eat some lunch", "Run around the city"];

// Show Todos

console.log("Show all Todos");
const showTodos = data => {
  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    console.log(`[${index + 1}] ${item}`);
  }
};

showTodos(todos);

console.log("");

// Search Todo Text

console.log("Search Todo: ");
const searchTodos = (data, textToSearch) => {
  let newTodos = [];

  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    const lowerCasedItem = item.toLowerCase();
    const lowerCasedText = textToSearch.toLowerCase();

    if (lowerCasedItem.includes(lowerCasedText)) {
      newTodos.push(item);
    }
  }

  return newTodos;
};

const foundTodos = searchTodos(todos, "run");
showTodos(foundTodos);

console.log("");

// ====================================================
// Array of object

const myTodos = [
  {
    id: 1,
    text: "Write the letter",
    tags: ["important", "writing"],
    favorite: true
  },
  {
    id: 2,
    text: "Eat some lunch",
    tags: ["food"],
    completed: true
  },
  {
    id: 3,
    text: "Run around the city",
    favorite: true,
    completed: true
  }
];

// Show all Todos

console.log("Show All todos from Todos Array of object");
const showAllTodos = data => {
  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    let itemString = ``;

    itemString += item.completed ? `☑` : `☐`;
    itemString += ` ${item.text} `;
    itemString += item.favorite ? `★` : ``;

    console.log(itemString);
  }
};

showAllTodos(myTodos);

console.log("");

// Search Todos
console.log("Search Todos: ");

const searchTodosText = (data, searchText) => {
  let newTodos = [];

  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    const lowerCasedItemText = item.text.toLowerCase();
    const lowerCasedSearchText = searchText.toLowerCase();

    if (lowerCasedItemText.includes(lowerCasedSearchText)) {
      newTodos.push(item);
    }
  }

  return newTodos;
};

const foundTodosInArray = searchTodosText(myTodos, "the");

showAllTodos(foundTodosInArray);
