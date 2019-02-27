//Задание 1
function getRandomNumber(max) {
    return Math.trunc(Math.random() * (max + 1));
}

function createNumberObject(number) {
    var numberObject = {
    }
    
    if (number > 999) {
        console.log('Число превышает 999: ' + number);
        return numberObject;
    }
    
    numberObject.one = number % 10;
    numberObject.ten = Math.trunc(number / 10) % 10;
    numberObject.hundred = Math.trunc(number / 100) % 10;
    
    return numberObject;
}

var randomNumber = getRandomNumber(1200);
var outputMes = ''+randomNumber;
var objNumber = createNumberObject(randomNumber);

for (var prop in objNumber) {
    outputMes+= '\n' + prop + ': ' + objNumber[prop];
}

alert(outputMes);
