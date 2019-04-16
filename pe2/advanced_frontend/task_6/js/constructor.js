function Tank(position, className) {
    this.position = position;
    this.className = className;
    this.currentCoordinates = null;
}

Tank.prototype.generateTank = function (posX, posY) {
    this.currentCoordinates = [
        document.querySelector('[data-x = "' + (+posX) + '"][data-y = "' + (+posY + 1) + '"]'),
        document.querySelector('[data-x = "' + (+posX + 1) + '"][data-y = "' + (+posY) + '"]'),
        document.querySelector('[data-x = "' + (+posX) + '"][data-y = "' + (+posY) + '"]'),
        document.querySelector('[data-x = "' + (+posX - 1) + '"][data-y = "' + (+posY) + '"]'),
        document.querySelector('[data-x = "' + (+posX + 1) + '"][data-y = "' + (+posY - 1) + '"]'),
        document.querySelector('[data-x = "' + (+posX - 1) + '"][data-y = "' + (+posY - 1) + '"]')];
    this.currentCoordinates.forEach((item) => {
        item.classList.add(this.className);
        item.dataset.busy = 'closed';
    });
};

Tank.prototype.createAllies = function (posX, posY) {
    this.currentCoordinates = [
        document.querySelector('[data-x = "' + (+posX) + '"][data-y = "' + (+posY - 1) + '"]'),
        document.querySelector('[data-x = "' + (+posX - 1) + '"][data-y = "' + (+posY) + '"]'),
        document.querySelector('[data-x = "' + (+posX) + '"][data-y = "' + (+posY) + '"]'),
        document.querySelector('[data-x = "' + (+posX + 1) + '"][data-y = "' + (+posY) + '"]'),
        document.querySelector('[data-x = "' + (+posX - 1) + '"][data-y = "' + (+posY + 1) + '"]'),
        document.querySelector('[data-x = "' + (+posX + 1) + '"][data-y = "' + (+posY + 1) + '"]')];
    this.currentCoordinates.forEach((item) => {
        item.classList.add(this.className);
        item.dataset.busy = 'closed';
    });
};

Tank.prototype.moveFront = function (curPos) {
    console.time(`moveFront`);
    let posTank = curPos;

    const cX = posTank[2].dataset.x,
        cY = posTank[2].dataset.y;

    let newPos = null;

    let className = this.className;
    posTank.forEach(function (item) {
        item.classList.toggle(className);
        item.dataset.busy = '';
    });
    let frontPos = [
        document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY - 2) + '"]'),
        document.querySelector('[data-x = "' + (+cX - 1) + '"][data-y = "' + (+cY - 1) + '"]'),
        document.querySelector('[data-x = "' + (+cX + 1) + '"][data-y = "' + (+cY - 1) + '"]'),
    ];
    if ((+cY - 2) === 0 || !frontPos[0].hasAttribute('data-x')) {
        posTank.forEach(function (item) {
            item.classList.toggle(className);
        });
        this.currentCoordinates = posTank;
        return;
    }
    let filter = frontPos.filter((item) => {
        return item.dataset.busy === 'closed';
    });
    if (this.position === 'front') {
        if (filter.length) {
            posTank.forEach(function (item) {
                item.classList.toggle(className);
            });
            this.currentCoordinates = posTank;
            return;
        }
        newPos = this.generateCoordFront(posTank);
    } else {
        newPos = this.generateCoordFrontElse(posTank);
        this.position = 'front';
    }
    newPos.forEach(function (item) {
        item.classList.add(className);
        item.dataset.busy = 'closed';
    });
    this.currentCoordinates = newPos;
    console.timeEnd(`moveFront`);
};

Tank.prototype.moveLeft = function (curPos) {
    console.time(`moveLeft`);
    let posTank = curPos;
    let className = this.className;

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
    if ((+cX - 2) === 0 || !frontPos[0].hasAttribute('data-x')) {
        posTank.forEach((item) => {
            item.classList.toggle(className);
        });
        this.currentCoordinates = posTank;
        return;
    }
    let filter = frontPos.filter((item) => {
        return item.dataset.busy === 'closed';
    });
    if (this.position === 'left') {
        if (filter.length) {
            posTank.forEach((item) => {
                item.classList.toggle(className);
            });
            this.currentCoordinates = posTank;
            return;
        }
        newPos = this.generateCoordLeft(posTank);
    } else {
        newPos = this.generateCoordLeftElse(posTank);
        this.position = 'left';
    }
    newPos.forEach((item) => {
        item.classList.add(className);
        item.dataset.busy = 'closed';
    });
    this.currentCoordinates = newPos;
    console.timeEnd(`moveLeft`);
};

Tank.prototype.moveRight = function (curPos) {
    console.time(`moveRight`);
    let posTank = curPos;
    let className = this.className;

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
    const tr = Array.from(document.getElementsByTagName('tr'));
    const td = Array.from(document.getElementsByTagName('td'));
    if ((+cX + 2) === (td.length / tr.length + 1) || !frontPos[0].hasAttribute('data-x')) {
        posTank.forEach((item) => {
            item.classList.toggle(className);
        });
        this.currentCoordinates = posTank;
        return;
    }
    let filter = frontPos.filter((item) => {
        return item.dataset.busy === 'closed';
    });
    if (this.position === 'right') {
        if (filter.length) {
            posTank.forEach((item) => {
                item.classList.toggle(className);
            });
            this.currentCoordinates = posTank;
            return;
        }
        newPos = this.generateCoordRight(posTank);
    } else {
        newPos = this.generateCoordRightElse(posTank);
        this.position = 'right';
    }
    newPos.forEach((item) => {
        item.classList.add(className);
        item.dataset.busy = 'closed';
    });
    this.currentCoordinates = newPos;
    console.timeEnd(`moveRight`);
};

Tank.prototype.moveDown = function (curPos) {
    console.time(`moveDown`);
    let posTank = curPos;
    let className = this.className;

    const cX = posTank[2].dataset.x,
        cY = posTank[2].dataset.y;

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
    const tr = Array.from(document.getElementsByTagName('tr'));
    if ((+cY + 2) === (tr.length + 1) || !frontPos[0].hasAttribute('data-busy')) {
        posTank.forEach((item) => {
            item.classList.toggle(className);
        });
        this.currentCoordinates = posTank;
        return;
    }
    let filter = frontPos.filter((item) => {
        return (item.dataset.busy === 'closed');
    });
    if (this.position === 'down') {
        if (filter.length) {
            posTank.forEach((item) => {
                item.classList.toggle(className);
            });
            this.currentCoordinates = posTank;
            return;
        }
        newPos = this.generateCoordDown(posTank);
    } else {
        newPos = this.generateCoordDownElse(posTank);
        this.position = 'down';
    }
    newPos.forEach((item) => {
        item.classList.add(className);
        item.dataset.busy = 'closed';
    });
    this.currentCoordinates = newPos;
    console.timeEnd(`moveDown`);
};

Tank.prototype.generateCoordFront = function (curPos) {
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
};

Tank.prototype.generateCoordFrontElse = function (curPos) {
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
};

Tank.prototype.generateCoordLeft = function (curPos) {
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
};

Tank.prototype.generateCoordLeftElse = function (curPos) {
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
};

Tank.prototype.generateCoordRight = function (curPos) {
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
};

Tank.prototype.generateCoordRightElse = function (curPos) {
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
};

Tank.prototype.generateCoordDown = function (curPos) {
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
};

Tank.prototype.generateCoordDownElse = function (curPos) {
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
};

Tank.prototype.changePosition = function () {
    const position = ['front', 'left', 'right', 'down'];
    this.position = position[Math.floor(Math.random() * 4)];
    this.enemyMove();
};

Tank.prototype.shot = function (curPos) {
    let posTank = curPos;
    let cX = posTank[2].dataset.x,
        cY = posTank[2].dataset.y;


    if (this.position === 'front') {
        // bullet.classList.remove('bullet');
        // let lastBullet = null;

        const letGo = setInterval(function () {
            let bullet = document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY - 2) + '"]');
// let q = bullet;
            bullet.classList.toggle('bullet');
            bullet.dataset.busy = 'bullet';
            bullet = document.querySelector('[data-x = "' + (+cX) + '"][data-y = "' + (+cY-- - 3) + '"]');
            bullet.classList.toggle('bullet');
            bullet.dataset.busy = '';
        }, 200);
    }
}
;

Tank.prototype.averTime = function () {
    return Math.floor(Math.random() * 4000);
};

Tank.prototype.enemyMove = function () {
    console.time('enemyMove');
    const th = this;

    if (this.position === 'front') {
        setInterval(function () {
            th.shot(th.currentCoordinates);
        }, 200);
        let move = setInterval(function () {
            th.moveFront(th.currentCoordinates);
        }, 500);
        setTimeout(function () {
            th.changePosition();
            clearInterval(move);
        }, this.averTime());
    } else if (this.position === 'left') {
        let move = setInterval(function () {
            th.moveLeft(th.currentCoordinates);
        }, 500);
        setTimeout(function () {
            th.changePosition();
            clearInterval(move);
        }, this.averTime());
    } else if (this.position === 'right') {
        let move = setInterval(function () {
            th.moveRight(th.currentCoordinates);
        }, 500);
        setTimeout(function () {
            th.changePosition();
            clearInterval(move);
        }, this.averTime());
    } else if (this.position === 'down') {
        let move = setInterval(function () {
            th.moveDown(th.currentCoordinates);
        }, 500);
        setTimeout(function () {
            th.changePosition();
            clearInterval(move);
        }, this.averTime());
    }
    console.timeEnd('enemyMove');
};

Tank.prototype.start = function () {
    this.enemyMove();
};

let patton = new Tank('front', 'tank-orange');

patton.createAllies(16, 20);

let panzervagen = new Tank('down', 'tank-blue');

panzervagen.generateTank(10, 3);

let mouse = new Tank('down', 'tank-blue');
mouse.generateTank(10, 20);

let tiger = new Tank('down', 'tank-blue');
tiger.generateTank(5, 12);

// tiger.start();
// panzervagen.start();
// mouse.start();

document.addEventListener('keydown', function (e) {
    if (e.which === 38) {
        patton.moveFront(patton.currentCoordinates);
    } else if (e.which === 37) {
        patton.moveLeft(patton.currentCoordinates);
    } else if (e.which === 39) {
        patton.moveRight(patton.currentCoordinates);
    } else if (e.which === 40) {
        patton.moveDown(patton.currentCoordinates);
    } else if (e.which === 32) {
        patton.shot(patton.currentCoordinates);
    }
});


// function in class:
// 1.function generateTank(posX, posY, className)  ++
// 2.function createAllies()  ++
// 3.function generateCoordFront(curPos) ++
// 4.function generateCoordFrontElse(curPos) ++
// 5.function generateCoordLeft(curPos) ++
// 6.function generateCoordLeftElse(curPos) ++
// 7.function generateCoordRight(curPos) ++
// 8.function generateCoordRightElse(curPos) ++
// 9.function generateCoordDown(curPos) ++
// 10.function generateCoordDownElse(curPos) ++
// 11.function moveFront(curPos, className) ++
// 12.function moveLeft(curPos, className) ++
// 13.function moveRight(curPos, className) ++
// 14.function moveDown(curPos, className) ++
// 15.function start() ++
// 16.function enemyMove() ++

// function eventListener:
// 1.function onkeydown(e) ++