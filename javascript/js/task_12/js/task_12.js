window.addEventListener('load', function () {    let button = document.getElementById('input');    let body = document.getElementById('body');    button.addEventListener('click', function () {        body.removeChild(button);        let input1 = document.createElement('input');        input1.placeholder = 'диаметр круга, px';        input1.id = 'input1';        body.appendChild(input1);        let input3 = document.createElement('input');        input3.type = 'button';        input3.value = 'Нарисовать круг';        input3.id = 'paint';        let div = document.createElement('div');        div.id = 'circleBlock';        body.appendChild(input3);        body.appendChild(div);        let input = document.getElementById('input1');        let button2 = document.getElementById('paint');        button2.addEventListener('click', function () {            let mainDiv = document.getElementById('circleBlock');            for (let i = 0; i < 100; i++) {                let div = document.createElement('div');                div.className = 'circle';                div.style.backgroundColor = addColor();                div.style.height = `${input.value}px`;                div.style.width = `${input.value}px`;                mainDiv.appendChild(div);            }            function addColor() {                let color = ['blue', 'yellow', 'green', 'grey', 'black', 'Aqua', 'DarkOrange', 'DarkSlateBlue', 'DeepPink', 'Magenta', 'MidnightBlue', 'OrangeRed', 'Purple'];                return color[Math.floor(Math.random() * (color.length))];            }            let circle = document.getElementsByClassName('circle');            function removeCircle() {                mainDiv.removeChild(this);            }            for (let i = 0, j = circle.length; i < j; i++) {                circle[i].addEventListener('click', removeCircle);            }        });    });});