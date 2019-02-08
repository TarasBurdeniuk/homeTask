class Hamburger {
    constructor(size, stuffing) {
        try {
            if ((size !== Hamburger.SIZE_SMALL) && (size !== Hamburger.SIZE_LARGE)) {
                throw new HamburgerException(`Invalid size`);
            }
            if ((stuffing !== Hamburger.STUFFING_SALAD) && (stuffing !== Hamburger.STUFFING_POTATO) && (stuffing !== Hamburger.STUFFING_CHEESE)) {
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
            } else if (Object.is(Hamburger.STUFFING_CHEESE, topping) || Object.is(Hamburger.STUFFING_POTATO, topping) || Object.is(Hamburger.STUFFING_SALAD, topping)) {
                throw new HamburgerException(`Do not change stuffing of hamburger`);
            } else if (Object.is(Hamburger.SIZE_SMALL, topping) || Object.is(Hamburger.SIZE_LARGE, topping)) {
                throw new HamburgerException(`Do not change size of hamburger`);
            }
            for (let key in this) {
                if (Object.is(this[key], topping)) {
                    throw new HamburgerException(`Do not impossible to add more ${topping.name}`);
                }
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
    }

    removeTopping(topping) {
        try {
            if (typeof topping !== "object" || topping === null) {
                throw new HamburgerException('Argument is not object');
            } else if (!topping) {
                throw new HamburgerException(`Empty argument`);
            } else if (Object.is(Hamburger.STUFFING_CHEESE, topping) || Object.is(Hamburger.STUFFING_POTATO, topping) || Object.is(Hamburger.STUFFING_SALAD, topping)) {
                throw new HamburgerException(`Do not remove stuffing of hamburger`);
            } else if (Object.is(Hamburger.SIZE_SMALL, topping) || Object.is(Hamburger.SIZE_LARGE, topping)) {
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
        if (this.TOPPING_SPICE) {
            toppings.push(this.TOPPING_SPICE);
        }
        if (this.TOPPING_MAYO) {
            toppings.push(this.TOPPING_MAYO);
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
        return `Full price is ${price} tugriy`;
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
}

class HamburgerException {
    constructor(message) {
        this._message = message;
    }
}

HamburgerException.SIZE_SMALL = {
    size: 'small',
    price: 50,
    cal: 20
};

Hamburger.SIZE_SMALL = {
    size: 'small',
    price: 50,
    cal: 20
};

Object.defineProperties(Hamburger.SIZE_SMALL, {
    price: {
        value: 50,
        writable: false,
    },
    size: {
        value: 'small',
        writable: false,
    },
    cal: {
        value: 20,
        writable: false,
    }
});

Hamburger.SIZE_LARGE = {
    size: 'large',
    price: 100,
    cal: 40
};

Object.defineProperties(Hamburger.SIZE_LARGE, {
    price: {
        value: 100,
        writable: false,
    },
    size: {
        value: 'large',
        writable: false,
    },
    cal: {
        value: 40,
        writable: false,
    }
});

Hamburger.STUFFING_CHEESE = {
    name: 'Cheese',
    price: 10,
    cal: 20
};

Object.defineProperties(Hamburger.STUFFING_CHEESE, {
    price: {
        value: 10,
        writable: false,
    },
    name: {
        value: 'Cheese',
        writable: false,
    },
    cal: {
        value: 20,
        writable: false,
    }
});

Hamburger.STUFFING_SALAD = {
    name: 'Salad',
    price: 20,
    cal: 5
};

Object.defineProperties(Hamburger.STUFFING_SALAD, {
    price: {
        value: 20,
        writable: false,
    },
    name: {
        value: 'Salad',
        writable: false,
    },
    cal: {
        value: 5,
        writable: false,
    }
});

Hamburger.STUFFING_POTATO = {
    name: 'Potato',
    price: 15,
    cal: 10
};

Object.defineProperties(Hamburger.STUFFING_POTATO, {
    price: {
        value: 15,
        writable: false,
    },
    name: {
        value: 'Potato',
        writable: false,
    },
    cal: {
        value: 10,
        writable: false,
    }
});

Hamburger.TOPPING_MAYO = {
    name: 'Mayo',
    price: 20,
    cal: 5
};

Object.defineProperties(Hamburger.TOPPING_MAYO, {
    price: {
        value: 20,
        writable: false,
    },
    name: {
        value: 'Mayo',
        writable: false,
    },
    cal: {
        value: 5,
        writable: false,
    }
});

Hamburger.TOPPING_SPICE = {
    name: 'Spice',
    price: 15,
    cal: 0
};

Object.defineProperties(Hamburger.TOPPING_SPICE, {
    price: {
        value: 15,
        writable: false,
    },
    name: {
        value: 'Spice',
        writable: false,
    },
    cal: {
        value: 0,
        writable: false,
    }
});

let burger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);

// burger.addTopping(Hamburger.STUFFING_POTATO);
burger.addTopping(Hamburger.TOPPING_SPICE);
// burger.addTopping(Hamburger.TOPPING_MAYO);
burger.addTopping(Hamburger.TOPPING_MAYO);
burger.removeTopping(Hamburger.TOPPING_MAYO);
// burger.removeTopping(Hamburger.TOPPING_SPICE);
// burger.removeTopping(Hamburger.STUFFING_POTATO);
console.log(burger.getToppings());
console.log(burger);

console.log(burger.getSize());
console.log(burger.getStuffing());
console.log(burger.calculatePrice());
console.log(burger.calculateCalories());
console.log(burger);