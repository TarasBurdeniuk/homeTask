function Hamburger(size, stuffing) {
    try {
        if ((size !== Hamburger.SIZE_SMALL) && (size !== Hamburger.SIZE_LARGE)) {
            throw new HamburgerException(`Invalid size`);
        }
        if ((stuffing !== Hamburger.STUFFING_SALAD) && (stuffing !== Hamburger.STUFFING_POTATO) && (stuffing !== Hamburger.STUFFING_CHEESE)) {
            throw new HamburgerException(`Invalid stuffing`);
        }
    } catch (e) {
        console.log(`${e._name}: ${e._message}`);
        throw e;
    }
    this._size = size;
    this._stuffing = stuffing;
}

function HamburgerException(message) {
    this._message = message;
}

Hamburger.SIZE_SMALL = {
    size: 'small',
    price: 50,
    cal: 20
};

Hamburger.SIZE_LARGE = {
    size: 'large',
    price: 100,
    cal: 40
};

Hamburger.STUFFING_CHEESE = {
    name: 'Cheese',
    price: 10,
    cal: 20
};

Hamburger.STUFFING_SALAD = {
    name: 'Salad',
    price: 20,
    cal: 5
};

Hamburger.STUFFING_POTATO = {
    name: 'Potato',
    price: 15,
    cal: 10
};

Hamburger.TOPPING_MAYO = {
    name: 'Mayo',
    price: 20,
    cal: 5
};

Hamburger.TOPPING_SPICE = {
    name: 'Spice',
    price: 15,
    cal: 0
};

Hamburger.prototype.addTopping = function (topping) {
    try {
        if (!topping) {
            throw new HamburgerException(`Empty argument`);
        }
        if (Object.is(Hamburger.STUFFING_CHEESE, topping) || Object.is(Hamburger.STUFFING_POTATO, topping) || Object.is(Hamburger.STUFFING_SALAD, topping)) {
            throw new HamburgerException(`Do not change stuffing of hamburger`);
        }
        for (let key in this) {
            if (Object.is(this[key], topping)) {
                throw new HamburgerException(`Do not impossible to add more ${topping.name}`);
            }
        }
        if (Object.is(Hamburger.SIZE_SMALL, topping) || Object.is(Hamburger.SIZE_LARGE, topping)) {
            throw new HamburgerException(`Do not change size of hamburger`);
        }
    } catch (e) {
        throw e;
    }
    if (Object.is(topping, Hamburger.TOPPING_SPICE)) {
        this.TOPPING_SPICE = topping;
    }
    if (Object.is(topping, Hamburger.TOPPING_MAYO)) {
        this.TOPPING_MAYO = topping;
    }
};

Hamburger.prototype.removeTopping = function (topping) {
    try {
        if (!topping) {
            throw new HamburgerException(`Empty argument`);
        }
        if (Object.is(Hamburger.STUFFING_CHEESE, topping) || Object.is(Hamburger.STUFFING_POTATO, topping) || Object.is(Hamburger.STUFFING_SALAD, topping)) {
            throw new HamburgerException(`Do not remove stuffing of hamburger`);
        }
        if (Object.is(Hamburger.SIZE_SMALL, topping) || Object.is(Hamburger.SIZE_LARGE, topping)) {
            throw new HamburgerException(`Do not remove size of hamburger`);
        }
    } catch (e) {
        throw e;
    }

    for (let key in this) {
        if (this[key] === topping) {
            delete this[key];
        }
    }
};

Hamburger.prototype.getToppings = function () {
    try {
        if (arguments.length) {
            throw new HamburgerException(`Try without argument`);
        }
    } catch (e) {
        throw e;
    }
    let toppings = [];
    if (this.TOPPING_SPICE) {
        toppings.push(this.TOPPING_SPICE);
    }
    if (this.TOPPING_MAYO) {
        toppings.push(this.TOPPING_MAYO);
    }
    return toppings;
};

Hamburger.prototype.getSize = function () {
    try {
        if (arguments.length) {
            throw new HamburgerException(`Try without argument`);
        }
    } catch (e) {
        throw e;
    }
    return this._size;
};

Hamburger.prototype.getStuffing = function () {
    try {
        if (arguments.length) {
            throw new HamburgerException(`Try without argument`);
        }
    } catch (e) {
        throw e;
    }
    return this._stuffing;
};

Hamburger.prototype.calculatePrice = function () {
    try {
        if (arguments.length) {
            throw new HamburgerException(`Try without argument`);
        }
    } catch (e) {
        throw e;
    }
    let price = 0;

    for (let key in this) {
        if (this[key].price) {
            price += this[key].price;
        }
    }
    return `Full price is ${price} tugriy`;
};

Hamburger.prototype.calculateCalories = function () {
    try {
        if (arguments.length) {
            throw new HamburgerException(`Try without argument`);
        }
    } catch (e) {
        throw e;
    }
    let calories = 0;

    for (let key in this) {
        if (this[key].cal) {
            calories += this[key].cal;
        }
    }
    return `Full calories of your order is ${calories}`;
};


let burger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD);

// burger.addTopping(Hamburger.STUFFING_POTATO);
burger.addTopping(Hamburger.TOPPING_SPICE);
// burger.addTopping(Hamburger.TOPPING_MAYO);
burger.addTopping(Hamburger.TOPPING_MAYO);
burger.removeTopping(Hamburger.TOPPING_MAYO);
burger.removeTopping(Hamburger.TOPPING_SPICE);
// burger.removeTopping(Hamburger.STUFFING_POTATO);
console.log(burger.getToppings());
console.log(burger);

console.log(burger.getSize());
console.log(burger.getStuffing());
console.log(burger.calculatePrice());
console.log(burger.calculateCalories());
// console.log(burger);

