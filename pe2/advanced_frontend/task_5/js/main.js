const body = document.getElementsByTagName('body')[0];

const script = document.getElementsByTagName('script')[0];
parentElem = script.parentNode;
const tableElem = document.createElement('table');
parentElem.insertBefore(tableElem, script);

const table = document.getElementsByTagName('table')[0];

for (let i = 0; i < 30; i++) {
    const trElem = document.createElement('tr');
    table.appendChild(trElem);
    for (let j = 0; j < 30; j++) {
        const tdElem = document.createElement('td');
        const row = document.getElementsByTagName('tr')[i];
        row.appendChild(tdElem);
    }
}

function addBack(event) {
    if (event.target === body) {
        table.classList.toggle('blackBack');
    } else {
        event.target.classList.toggle('blackBack');
    }
}

body.addEventListener('click', addBack);