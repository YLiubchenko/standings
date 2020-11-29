const NUMBER_ITEMS = 5;
const NAMES_TEAMS_KEY = 'teams';
// TODO add this to file <div class="mainBlockList"></div>
createTeamsBlock({parentNameNode: 'mainBlockList'});

function createTeamsBlock({parentNameNode}) {
    const parentNode = document.querySelector(`.${parentNameNode}`);
    const title = document.createElement('h2');
    title.innerText = 'Places to enter team names';
    parentNode.appendChild(title);
    const template = initTeamsTemplate(NUMBER_ITEMS);

    parentNode.appendChild(template);
}

function initTeamsTemplate() {
    const template = document.createElement('div');
    const items = createListItems(NUMBER_ITEMS);
    const disable = !!getTeamsLocalStorage() ? '' : 'disabled';

    template.className = 'blockListTeams';
    template.innerHTML = `<div class="rows">${items}</div>
                          <button class="plus btn">+</button>

                          <div class="btns">
                              <button class="saveInLocal">Save</button>
                              <button ${disable} class="localStorage">LocalStorage</button>
                              <button class="submit">Submit</button>
                          </div>`;

    template.addEventListener('click', handlerClickListTeams);

    return template;
}

function createListItems(n, arrayValues = '') {
    let rows = '';

    for (let i = 0; i < n; i++) {
        const value = arrayValues && arrayValues[i];

        rows += createItemTemplate(value);
    }

    return rows;
}

function createItemTemplate(val = '') {
    return `<div class="row">
               <span class="counter"></span>
               <input class="teamName" type="text" value=${val}>
               <button class="btn">-</button>
            </div>`;
}


function handlerClickListTeams(e) {

    const {innerText, parentNode} = e.target;

    const disable = document.querySelector('.localStorage');

    if (innerText === '+') {
        parentNode.firstChild.innerHTML += createItemTemplate();
    }

    if (innerText === '-') {
        console.log(e);
        if(parentNode.parentNode.childNodes.length > 2) {
            parentNode.parentNode.removeChild(parentNode);
        }
    }

    if (innerText === 'LocalStorage') {
        const teamNames = getTeamsLocalStorage();

        parentNode.parentNode.firstChild.innerHTML = createListItems(teamNames.length, teamNames)
        clearNamesTeamsLocalStorage()
        disable.disabled = true;
    }

    if (innerText === 'Save') {
        disable.disabled = false;

        saveNamesTeamsInLocalStorage();
        parentNode.parentNode.firstChild.innerHTML = createListItems(NUMBER_ITEMS)
    }

    if (innerText === 'Submit') {
        disable.disabled = true;

        clearNamesTeamsLocalStorage();
        parentNode.parentNode.parentNode.innerHTML = '';
    }
}

function getTeamsLocalStorage() {
    return JSON.parse(localStorage.getItem(NAMES_TEAMS_KEY));
}

function clearNamesTeamsLocalStorage() {
    localStorage.removeItem(NAMES_TEAMS_KEY);
}

function saveNamesTeamsInLocalStorage() {
    const teamName = document.querySelectorAll('.teamName');
    const teams = [];

    teamName.forEach(function (elem, i, array) {
        teams.push(elem.value);
    })
    localStorage.setItem(NAMES_TEAMS_KEY, JSON.stringify(teams));
}


