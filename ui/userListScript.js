window.onload = init;
let form;
let language=true;
function init(){
    form = document.getElementsByClassName('main');
    fetchUsers()
}
function switchLanguage(){
    if (language==true){
        language=false;
        document.querySelectorAll('.ukrText').forEach(function(el){el.style.display = 'none';});
        document.querySelectorAll('.engText').forEach(function(el){el.style.display = 'flex';});
        document.querySelector('.switchLang').style.justifyContent = 'end';
        document.querySelector('.ua').style.filter = 'grayscale()';
        document.querySelector('.en').style.filter = 'none';
    }
    else if (language==false){
        language=true;
        document.querySelectorAll('.ukrText').forEach(function(el){el.style.display = 'flex';});
        document.querySelectorAll('.engText').forEach(function(el){el.style.display = 'none';});
        document.querySelector('.switchLang').style.justifyContent = 'start';
        document.querySelector('.en').style.filter = 'grayscale()';
        document.querySelector('.ua').style.filter = 'none';
    }
}
let burgerCount=0;
function burgerOpen(){
    if(burgerCount==0){
        document.querySelector('.burger').style="background-image:url('images/krestik.png')";
        document.querySelector('.burgerWindow').style="display:flex";
        burgerCount=1;
    }
    else{
        document.querySelector('.burger').style="background-image:url('images/burger.png')";
        document.querySelector('.burgerWindow').style="display:none";
        burgerCount=0;
    }
}

const root = document.getElementById('root');
let users = [];
let lastNameCount=0,nameCount=0,emailCount=0;
function fetchUsers() {
  fetch('http://api.darksoulstrilogy.fun/forms')
    .then(response => response.json())
    .then(data => {
      users = data;
      displayUsers(users);
    })
    .catch(error => alert('Помилка при отриманні даних:', error));
}
function displayUsers(usersToDisplay) {
  const userTable = document.getElementById('userTable');
  userTable.innerHTML = ''; 
  usersToDisplay.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.lastName}</td>
      <td>${user.firstName}</td>
      <td>${user.email}</td>
    `;
    userTable.appendChild(row);
  });
}
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredUsers = users.filter(user =>
    user.firstName.toLowerCase().includes(searchTerm)
  );
  displayUsers(filteredUsers);
});
function sortByLastName() {
  document.getElementById('nameSort').textContent ="Сорт Ім’я";
  document.getElementById('emailSort').textContent ="Сорт Email";
  if(lastNameCount==0){
    document.getElementById('lastNameSort').textContent ="Сорт Прізв ↑";
    sortedUsers = [...users].sort((a, b) => b.lastName.localeCompare(a.lastName));
    lastNameCount=1;
  }
  else{
    document.getElementById('lastNameSort').textContent ="Сорт Прізв ↓";
    sortedUsers = [...users].sort((a, b) => a.lastName.localeCompare(b.lastName));
    lastNameCount=0;
  }
  displayUsers(sortedUsers);
}
function sortByName() {
  document.getElementById('lastNameSort').textContent ="Сорт Прізв";
  document.getElementById('emailSort').textContent ="Сорт Email";
  if(nameCount==0){
    document.getElementById('nameSort').textContent ="Сорт Ім’я ↑";
    sortedUsers = [...users].sort((a, b) => b.firstName.localeCompare(a.firstName));
    nameCount=1;
  }
  else{
    document.getElementById('nameSort').textContent ="Сорт Ім’я ↓";
    sortedUsers = [...users].sort((a, b) => a.firstName.localeCompare(b.firstName));
    nameCount=0;
  }
  displayUsers(sortedUsers);
}
function sortByEmail() {
  document.getElementById('lastNameSort').textContent ="Сорт Прізв";
  document.getElementById('nameSort').textContent ="Сорт Ім’я"; 
  if(emailCount==0){
    document.getElementById('emailSort').textContent ="Сорт Email ↑";
    sortedUsers = [...users].sort((a, b) => b.email.localeCompare(a.email));
    emailCount=1;
  }
  else{
    document.getElementById('emailSort').textContent ="Сорт Email ↓";
    sortedUsers = [...users].sort((a, b) => a.email.localeCompare(b.email));
    emailCount=0;
  }
  displayUsers(sortedUsers);
}

