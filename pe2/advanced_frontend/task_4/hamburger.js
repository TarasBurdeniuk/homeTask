class Hamburger {
    constructor(size, stuffing) {
        try {
            if ((size.size !== Hamburger.SIZE_SMALL.size) && (size.size !== Hamburger.SIZE_LARGE.size)) {
                throw new HamburgerException(`Invalid size`);
            }
            if ((stuffing.name !== Hamburger.STUFFING_SALAD.name) && (stuffing.name !== Hamburger.STUFFING_POTATO.name) && (stuffing.name !== Hamburger.STUFFING_CHEESE.name)) {
                throw new HamburgerException(`Invalid stuffing`);
            }
        } catch (e) {
            throw e;
        }
        this._size = size;
        this._stuffing = stuffing;
    }

    addTopping(topping) {
        try {
            if (typeof topping !== "object" || topping === null) {
                throw new HamburgerException('Argument is not object');
            } else if (!topping) {
                throw new HamburgerException(`Empty argument`);
            } else if (Object.is(Hamburger.STUFFING_CHEESE.name, topping.name) || Object.is(Hamburger.STUFFING_POTATO.name, topping.name) || Object.is(Hamburger.STUFFING_SALAD.name, topping.name)) {
                throw new HamburgerException(`Impossible to change stuffing of hamburger`);
            } else if (Object.is(Hamburger.SIZE_SMALL.size, topping.size) || Object.is(Hamburger.SIZE_LARGE.size, topping.size)) {
                throw new HamburgerException(`Impossible to change size of hamburger`);
            }
            for (let key in this) {
                if (Object.is(this[key].name, topping.name)) {
                    throw new HamburgerException(`Impossible to add more ${topping.name}`);
                }
            }
        } catch (e) {
            throw e;
        }
        if (Object.is(topping.name, Hamburger.TOPPING_SPICE.name)) {
            this._topping_spice = topping;
        }
        if (Object.is(topping.name, Hamburger.TOPPING_MAYO.name)) {
            this._topping_mayo = topping;
        }
    }

    removeTopping(topping) {
        try {
            if (typeof topping !== "object" || topping === null) {
                throw new HamburgerException('Argument is not object');
            } else if (!topping) {
                throw new HamburgerException(`Empty argument`);
            } else if (Object.is(Hamburger.STUFFING_CHEESE.name, topping.name) || Object.is(Hamburger.STUFFING_POTATO.name, topping.name) || Object.is(Hamburger.STUFFING_SALAD.name, topping.name)) {
                throw new HamburgerException(`Impossible to remove stuffing of hamburger`);
            } else if (Object.is(Hamburger.SIZE_SMALL.size, topping.size) || Object.is(Hamburger.SIZE_LARGE.size, topping.size)) {
                throw new HamburgerException(`Impossible to remove size of hamburger`);
            }
        } catch (e) {
            throw e;
        }

        for (let key in this) {
            if (this[key].name === topping.name) {
                delete this[key];
            }
        }
    }

    getToppings() {
        try {
            if (arguments.length) {
                throw new HamburgerException(`Try without argument`);
            }
        } catch (e) {
            throw e;
        }
        let toppings = [];
        if (this._topping_spice) {
            toppings.push(this._topping_spice);
        }
        if (this._topping_mayo) {
            toppings.push(this._topping_mayo);
        }
        return toppings;
    }

    getSize() {
        try {
            if (arguments.length) {
                throw new HamburgerException(`Try without argument`);
            }
        } catch (e) {
            throw e;
        }
        return this._size;
    }

    getStuffing() {
        try {
            if (arguments.length) {
                throw new HamburgerException(`Try without argument`);
            }
        } catch (e) {
            throw e;
        }
        return this._stuffing;
    }

    calculatePrice() {
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
        return `Full price is ${price} uah`;
    }

    calculateCalories() {
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
    }

    static get SIZE_SMALL() {
        return {
            size: 'small',
            price: 50,
            cal: 20
        };
    };

    static get SIZE_LARGE() {
        return {
            size: 'large',
            price: 100,
            cal: 40
        }
    };

    static get STUFFING_CHEESE() {
        return {
            name: 'Cheese',
            price: 10,
            cal: 20
        }
    };

    static get STUFFING_SALAD() {
        return {
            name: 'Salad',
            price: 20,
            cal: 5
        }
    };

    static get STUFFING_POTATO() {
        return {
            name: 'Potato',
            price: 15,
            cal: 10
        }
    };

    static get TOPPING_MAYO() {
        return {
            name: 'Mayo',
            price: 20,
            cal: 5
        }
    };

    static get TOPPING_SPICE() {
        return {
            name: 'Spice',
            price: 15,
            cal: 0
        }
    };
}

class HamburgerException {
    constructor(message) {
        this._message = message;
    }
}

Object.freeze(Hamburger);

let burger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);

// burger.addTopping(Hamburger.STUFFING_POTATO);
burger.addTopping(Hamburger.TOPPING_SPICE);
// burger.addTopping(Hamburger.TOPPING_MAYO);
burger.addTopping(Hamburger.TOPPING_MAYO);
// burger.removeTopping(Hamburger.TOPPING_MAYO);
// burger.removeTopping(Hamburger.TOPPING_SPICE);
// burger.removeTopping(Hamburger.STUFFING_POTATO);
Hamburger.newValue = `bug`;
console.log(Hamburger.newValue);
Hamburger.SIZE_SMALL.size = `not small`;
console.log(Hamburger.SIZE_SMALL);
console.log(burger);

// console.log(burger.getToppings());
// console.log(burger.getSize());
// console.log(burger.getStuffing());
// console.log(burger.calculatePrice());
// console.log(burger.calculateCalories());
// console.log(burger);