//Задание 1
var i = 3; // Счетчик чисел до 100
var primeNumbers = [2];

function isPrimeNumber(number, primeNumbers) {
    for (var j = 0; j < primeNumbers.length; j++) {
        if (number % primeNumbers[j] == 0)
            return false;
        if (Math.sqrt(number) < primeNumbers[j])
            break;
    }
    return true;
}

while (i <= 100) {
    if (isPrimeNumber(i, primeNumbers))
        primeNumbers.push(i);
    i++;
}

alert(primeNumbers.join(" "));
