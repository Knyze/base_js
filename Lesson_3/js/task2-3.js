//Задание 2-3
var cart = [
            ["BLAZE LEGGINGS", 75, 4],
            ["ALEXA SWEATER", 45, 2],
            ["AGNES TOP", 30, 1],
            ["SYLVA SWEATER", 55, 2]
        ]

function countBasketPrice(cart) {
    var sum = 0;
    for (var i = 0; i < cart.length; i++) {
        sum += cart[i][1] * cart[i][2];
    }
    return sum;
}

alert(countBasketPrice(cart));