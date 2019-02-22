//Задание 1
var i = 3; // Счетчик чисел до 100
var primeNumbers = [2];

while (i <= 100) {
    var j = 0; // Счетчик чисел по простым числам
    var isPrimeNumber = true;

    while (j < primeNumbers.length) {
        if (i % primeNumbers[j++] == 0) {
            isPrimeNumber = false;
            break;
        }
    }

    if (isPrimeNumber) {
        primeNumbers.push(i);
    }

    i++;
}

alert(primeNumbers.join(" "));