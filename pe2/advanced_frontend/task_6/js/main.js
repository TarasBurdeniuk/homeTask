const table = document.getElementsByTagName('table')[0];

for (let i = 1; i <= 50; i++) {
    const tr = document.createElement('tr');
    table.appendChild(tr);
    for (let j = 1; j <= 100; j++) {
        const td = document.createElement('td');
        td.setAttribute('data-x', `${j}`);
        td.setAttribute('data-y', `${i}`);
        td.setAttribute('data-busy', ``);
        const row = document.getElementsByTagName('tr')[i - 1];
        row.appendChild(td);
    }
}