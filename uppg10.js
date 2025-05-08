function uppg10() {
    const numbers = [5, 12, 7, 10, 20, 9, 11];

    // Skapa tre arrayer
    const bigEven = [];
    const smallOdd = [];
    const other = [];

    // Loop igenom numbers och placera talen i respektive array
    numbers.forEach(num => {
        if (num > 10 && num % 2 === 0) {
            bigEven.push(num);
        } else if (num < 10 && num % 2 !== 0) {
            smallOdd.push(num);
        } else {
            other.push(num);
        }
    });

    // Returnera objektet med de tre arrayerna
    return { bigEven, smallOdd, other };
}
console.log(uppg10());
module.exports = { uppg10 };
