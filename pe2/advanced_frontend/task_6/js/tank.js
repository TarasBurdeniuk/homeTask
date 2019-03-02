let currentPositionAllies = null;
// let currentPositionEnemies = null;
let position = 'front';

let cordFirstEnemy = generateTank(3, 3, 'tank-blue'),
    cordSecondEnemy = generateTank(36, 3, 'tank-blue'),
    cordThirdEnemy = generateTank(69, 3, 'tank-blue'),
    cordFourthEnemy = generateTank(97, 3, 'tank-blue');

console.log(cordFirstEnemy);

let positionFirstEnemy = 'down',
    positionSecondEnemy = 'down',
    positionThirdEnemy = 'down',
    positionFourthEnemy = 'down';

function generateTank(posX, posY, className) {
    let coordinates = [
        document.querySelector('[data-x = "' + (+posX) + '"][data-y = "' + (+posY + 1) + '"]'),
        document.querySelector('[data-x = "' + (+posX + 1) + '"][data-y = "' + (+posY) + '"]'),
        document.querySelector('[data-x = "' + (+posX) + '"][data-y = "' + (+posY) + '"]'),
        document.querySelector('[data-x = "' + (+posX - 1) + '"][data-y = "' + (+posY) + '"]'),
        document.querySelector('[data-x = "' + (+posX + 1) + '"][data-y = "' + (+posY - 1) + '"]'),
        document.querySelector('[data-x = "' + (+posX - 1) + '"][data-y = "' + (+posY - 1) + '"]')];
    coordinates.forEach((item) => {
        item.classList.add(className);
        item.dataset.busy = 'closed';
    });
    return coordinates;
}

function createAllies() {
    let posAllies = [
        document.querySelector('[data-x = "' + 50 + '"][data-y = "' + 43 + '"]'),
        document.querySelector('[data-x = "' + 49 + '"][data-y = "' + 44 + '"]'),
        document.querySelector('[data-x = "' + 50 + '"][data-y = "' + 44 + '"]'),
        document.querySelector('[data-x = "' + 51 + '"][data-y = "' + 44 + '"]'),
        document.querySelector('[data-x = "' + 49 + '"][data-y = "' + 45 + '"]'),
        document.querySelector('[data-x = "' + 51 + '"][data-y = "' + 45 + '"]')];
    posAllies.forEach((item) => {
        item.classList.add('tank-orange');
        item.dataset.busy = 'closed';
    });
    currentPositionAllies = posAllies;
}



function generateCoordFront(curPos) {
    let posTank = curPos;

    const cX = posTank[2].dataset.x,
        cY = posTank[2].dataset.y;
    return [
        document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY - 2) + '"]'),
        document.querySelector('[data-x = "' + (+cX - 1) + '"][data-y = "' + (+cY - 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY - 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX + 1) + '"][data-y = "' + (+cY - 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX - 1) + '"][data-y = "' + (+cY) + '"]'),
        document.querySelector('[data-x = "' + (+cX + 1) + '"][data-y = "' + (+cY) + '"]')];
}

function generateCoordFrontElse(curPos) {
    let posTank = curPos;

    const cX = posTank[2].dataset.x,
        cY = posTank[2].dataset.y;
    return [
        document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY - 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX - 1) + '"][data-y = "' + (+cY) + '"]'),
        document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY) + '"]'),
        document.querySelector('[data-x = "' + (+cX + 1) + '"][data-y = "' + (+cY) + '"]'),
        document.querySelector('[data-x = "' + (+cX - 1) + '"][data-y = "' + (+cY + 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX + 1) + '"][data-y = "' + (+cY + 1) + '"]')];
}

function generateCoordLeft(curPos) {
    let posTank = curPos;

    const cX = posTank[2].dataset.x,
        cY = posTank[2].dataset.y;
    return [
        document.querySelector('[data-x = "' + (+cX - 2) + '"][data-y = "' + (+cY) + '"]'),
        document.querySelector('[data-x = "' + (+cX - 1) + '"][data-y = "' + (+cY + 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX - 1) + '"][data-y = "' + (+cY) + '"]'),
        document.querySelector('[data-x = "' + (+cX - 1) + '"][data-y = "' + (+cY - 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY + 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY - 1) + '"]')];
}

function generateCoordLeftElse(curPos) {
    let posTank = curPos;

    const cX = posTank[2].dataset.x,
        cY = posTank[2].dataset.y;
    return [
        document.querySelector('[data-x = "' + (+cX - 1) + '"][data-y = "' + (+cY) + '"]'),
        document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY + 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY) + '"]'),
        document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY - 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX + 1) + '"][data-y = "' + (+cY + 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX + 1) + '"][data-y = "' + (+cY - 1) + '"]')];
}

function generateCoordRight(curPos) {
    let posTank = curPos;

    const cX = posTank[2].dataset.x,
        cY = posTank[2].dataset.y;
    return [
        document.querySelector('[data-x = "' + (+cX + 2) + '"][data-y = "' + (+cY) + '"]'),
        document.querySelector('[data-x = "' + (+cX + 1) + '"][data-y = "' + (+cY - 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX + 1) + '"][data-y = "' + (+cY) + '"]'),
        document.querySelector('[data-x = "' + (+cX + 1) + '"][data-y = "' + (+cY + 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY - 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY + 1) + '"]')];
}

function generateCoordRightElse(curPos) {
    let posTank = curPos;

    const cX = posTank[2].dataset.x,
        cY = posTank[2].dataset.y;
    return [
        document.querySelector('[data-x = "' + (+cX + 1) + '"][data-y = "' + (+cY) + '"]'),
        document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY - 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY) + '"]'),
        document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY + 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX - 1) + '"][data-y = "' + (+cY - 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX - 1) + '"][data-y = "' + (+cY + 1) + '"]')];
}

function generateCoordDown(curPos) {
    let posTank = curPos;

    const cX = posTank[2].dataset.x,
        cY = posTank[2].dataset.y;
    return [
        document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY + 2) + '"]'),
        document.querySelector('[data-x = "' + (+cX + 1) + '"][data-y = "' + (+cY + 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY + 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX - 1) + '"][data-y = "' + (+cY + 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX + 1) + '"][data-y = "' + (+cY) + '"]'),
        document.querySelector('[data-x = "' + (+cX - 1) + '"][data-y = "' + (+cY) + '"]')];
}

function generateCoordDownElse(curPos) {
    let posTank = curPos;

    const cX = posTank[2].dataset.x,
        cY = posTank[2].dataset.y;
    return [
        document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY + 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX + 1) + '"][data-y = "' + (+cY) + '"]'),
        document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY) + '"]'),
        document.querySelector('[data-x = "' + (+cX - 1) + '"][data-y = "' + (+cY) + '"]'),
        document.querySelector('[data-x = "' + (+cX + 1) + '"][data-y = "' + (+cY - 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX - 1) + '"][data-y = "' + (+cY - 1) + '"]')];
}

function enemyMove() {
    let move = setInterval(function () {
        currentPositionAllies = moveFront(currentPositionAllies, 'tank-orange');
        console.log(currentPositionAllies);
    }, 100);
    setTimeout(function () {
        clearInterval(move);
    }, 5000);
}

function moveFront(curPos, className) {
    let posTank = curPos;

    const cX = posTank[2].dataset.x,
        cY = posTank[2].dataset.y;

    let newPos = null;
    posTank.forEach(function (item) {
        item.classList.toggle(className);
        item.dataset.busy = '';
    });
    let frontPos = [
        document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY - 2) + '"]'),
        document.querySelector('[data-x = "' + (+cX - 1) + '"][data-y = "' + (+cY - 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX + 1) + '"][data-y = "' + (+cY - 1) + '"]'),
    ];
    let filter = frontPos.filter((item) => {
        return item.dataset.busy === 'closed';
    });
    if (position === 'front') {
        if ((+cY - 2) === 0 || filter.length) {
            currentPositionAllies.forEach((item) => {
                item.classList.toggle(className);
            });
            return posTank;
        }
        newPos = generateCoordFront(posTank);
    } else {
        newPos = generateCoordFrontElse(posTank);
        position = 'front';
    }
    newPos.forEach((item) => {
        item.classList.add(className);
        item.dataset.busy = 'closed';
    });
    return newPos;
}

function moveLeft(curPos, className) {
    let posTank = curPos;

    const cX = posTank[2].dataset.x,
        cY = posTank[2].dataset.y;

    let newPos = null;
    posTank.forEach(function (item) {
        item.classList.toggle(className);
        item.dataset.busy = '';
    });
    let frontPos = [
        document.querySelector('[data-x = "' + (+cX - 2) + '"][data-y = "' + (+cY) + '"]'),
        document.querySelector('[data-x = "' + (+cX - 1) + '"][data-y = "' + (+cY + 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX - 1) + '"][data-y = "' + (+cY - 1) + '"]'),
    ];
    let filter = frontPos.filter((item) => {
        return item.dataset.busy === 'closed';
    });
    if (position === 'left') {
        if ((+cX - 2) === 0 || filter.length) {
            currentPositionAllies.forEach((item) => {
                item.classList.toggle(className);
            });
            return posTank;
        }
        newPos = generateCoordLeft(posTank);
    } else {
        newPos = generateCoordLeftElse(posTank);
        position = 'left';
    }
    newPos.forEach((item) => {
        item.classList.add(className);
        item.dataset.busy = 'closed';
    });
    return newPos;
}

function moveRight(curPos, className) {
    console.time(`func moveRight`);
    let posTank = curPos;

    const cX = posTank[2].dataset.x,
        cY = posTank[2].dataset.y;

    let newPos = null;
    posTank.forEach(function (item) {
        item.classList.toggle(className);
        item.dataset.busy = '';
    });
    let frontPos = [
        document.querySelector('[data-x = "' + (+cX + 2) + '"][data-y = "' + (+cY) + '"]'),
        document.querySelector('[data-x = "' + (+cX + 1) + '"][data-y = "' + (+cY - 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX + 1) + '"][data-y = "' + (+cY + 1) + '"]'),
    ];
    let filter = frontPos.filter((item) => {
        return item.dataset.busy === 'closed';
    });
    if (position === 'right') {
        if ((+cX + 2) === 101 || filter.length) {
            currentPositionAllies.forEach((item) => {
                item.classList.toggle(className);
            });
            return posTank;
        }
        newPos = generateCoordRight(posTank);
    } else {
        newPos = generateCoordRightElse(posTank);
        position = 'right';
    }
    newPos.forEach((item) => {
        item.classList.add(className);
        item.dataset.busy = 'closed';
    });
    console.timeEnd(`func moveRight`);
    return newPos;
}

function moveDown(curPos, className) {
    let posTank = curPos;

    const cX = posTank[2].dataset.x,
        cY = posTank[2].dataset.y;
    console.log(+posTank[2].dataset.y + 2);
    console.log(position);

    let newPos = null;
    posTank.forEach(function (item) {
        item.classList.toggle(className);
        item.dataset.busy = '';
    });
    let frontPos = [
        document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY + 2) + '"]'),
        document.querySelector('[data-x = "' + (+cX + 1) + '"][data-y = "' + (+cY + 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX - 1) + '"][data-y = "' + (+cY + 1) + '"]'),
    ];
    let filter = frontPos.filter((item) => {
        return item.dataset.busy === 'closed';
    });
    if (position === 'down') {
        if ((+cY + 2) === 51 || filter.length) {
            currentPositionAllies.forEach((item) => {
                item.classList.toggle(className);
            });
            return posTank;
        }
        newPos = generateCoordDown(posTank);
    } else {
        newPos = generateCoordDownElse(posTank);
        position = 'down';
    }
    newPos.forEach((item) => {
        item.classList.add(className);
        item.dataset.busy = 'closed';
    });
    return newPos;
}

function move(e) {
    console.time(`function move`);
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown' && e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') {
        return;
    }
    if (e.which === 38) {
        currentPositionAllies = moveFront(currentPositionAllies, 'tank-orange');
    } else if (e.which === 37) {
        currentPositionAllies = moveLeft(currentPositionAllies, 'tank-orange');
    } else if (e.which === 39) {
        currentPositionAllies = moveRight(currentPositionAllies, 'tank-orange');
    } else if (e.which === 40) {
        currentPositionAllies = moveDown(currentPositionAllies, 'tank-orange');
    }
    console.timeEnd(`function move`);
}

function start() {
    createAllies();
    enemyMove();
}

start();

document.addEventListener('keydown', move);