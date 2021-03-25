const list = document.querySelector('.beatlons');
const search = document.querySelector('.search input');
const hit = document.querySelectorAll('.hit');
let beatlonElmentList = document.querySelectorAll('.beatlon__elment-list');
const sortPlaces = document.querySelector('#sort-place');
const sortNames = document.querySelector('#sort-name');
const sortHit = document.querySelector('#sort-hit');
const sortShots = document.querySelector('#sort-shots');

//All users Beatlon
const users = 
[
  {"name": "Vasya","hit": 8,"shots": 10,"place": 2,},
  {"name": "Petya","hit": 9,"shots": 9,"place": 3,},
  {"name": "Dimon","hit": 6,"shots": 7,"place": 4,},
  {"name": "Kolya","hit": 3,"shots": 2,"place": 5,},
  {"name": "Artem","hit": 7,"shots": 8,"place": 1,}
];
 


// Style new todo list element
const generateTemplate = (place, name, hit, shots) => {
  const element = `
    <li class="beatlon__elment-list">
        <span class="place">${place}</span>
        <span class="name">${name}</span>
        <span class="hit">${hit}</span>
        <span class="shots">${shots}</span>
    </li>
    `;
  list.innerHTML += element;
};

//Sort 1,2,3...
function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

//Sort 10,9,8...
function byFieldBack(field) {
  return (a, b) => a[field] > b[field] ? -1 : 1;
}

//First sort place
users.sort(byField('place'));
users.forEach(user => generateTemplate(user.place, user.name, user.hit, user.shots)); 

//sort place
sortPlaces.onclick = () => {
  list.innerHTML = "";
  users.sort(byField('place'));
  users.forEach(user => generateTemplate(user.place, user.name, user.hit, user.shots)); 
}

//sort name
sortNames.onclick = () => {
  list.innerHTML = "";
  users.sort(byField('name'));
  users.forEach(user => generateTemplate(user.place, user.name, user.hit, user.shots)); 
}

//sort hit
sortHit.onclick = () => {
  list.innerHTML = "";
  users.sort(byFieldBack('hit'));
users.forEach(user => generateTemplate(user.place, user.name, user.hit, user.shots)); 
}

//sort shots
sortShots.onclick = () => {
  list.innerHTML = "";
  users.sort(byFieldBack('shots'));
  users.forEach(user => generateTemplate(user.place, user.name, user.hit, user.shots)); 
}


//Filter element list
const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filter"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filter"));
};

//Keyup event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});


