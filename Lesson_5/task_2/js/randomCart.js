function getRandomNumber(max) {
    return Math.trunc(Math.random() * (max + 1));
}

function createRandomCart() {
    var productNames = ["BLAZE LEGGINGS",
                       "ALEXA SWEATER",
                       "AGNES TOP",
                       "SYLVA SWEATER", ];

    var cart = [];

    var numberProducts = getRandomNumber(4);

    for (var i = 0; i < numberProducts; i++) {
        var product = {};
        product.name = productNames[i];
        product.price = (getRandomNumber(16) + 4) * 5;
        
        var element = [product, getRandomNumber(4)+1];
        cart.push(element);
    }
    
    return cart;
}
