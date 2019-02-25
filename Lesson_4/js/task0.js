//Почему все таки использовать Math.round для случайных чисел неправильно

function getRandomNumber() {
  return Math.round(Math.random() * 10);
}

function getCorrectRandomNumber () {
    return Math.trunc(Math.random() * 11);
}

//Подготавливаем массив чисел
var masNumber=[];
for (var i = 0; i<=10; i++) {
    masNumber.push(0);
}

alert(masNumber);

for (var i=0; i<1000; i++) {
    masNumber[getRandomNumber()]++;
}

alert('Массив чисел, заполненных с помощью Math.random \n'+masNumber);

//Подготавливаем массив чисел
var masNumber=[];
for (var i = 0; i<=10; i++) {
    masNumber.push(0);
}

alert(masNumber);

for (var i=0; i<1000; i++) {
    masNumber[getCorrectRandomNumber()]++;
}

alert('Массив чисел, заполненных с помощью Math.trunc \n'+masNumber);
