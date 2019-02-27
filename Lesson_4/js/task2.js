//Задание 2
var cart = [
            [{name: "BLAZE LEGGINGS", price: 75}, 4],
            [{name: "ALEXA SWEATER", price: 45}, 3],
            [{name: "AGNES TOP", price: 30}, 1],
            [{name: "SYLVA SWEATER", price: 55}, 2]
        ]

function countBasketPrice(cart) {
    var sum = 0;
    for (var i = 0; i < cart.length; i++) {
        sum += cart[i][0].price * cart[i][1];
    }
    return sum;
}

alert(countBasketPrice(cart));
