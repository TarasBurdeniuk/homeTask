let numberFactorial = () => {    let number = Number(prompt('Enter numeric'));    if (!number) {        number = Number(prompt('Enter numeric', '5'));    }    let result = 1;    for (let i = 1; i <= number; i++) {        result *= i;    }    alert(`Факториал числа: ${result}`);};numberFactorial();