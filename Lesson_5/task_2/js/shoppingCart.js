function createChild(mainBlock, nameBlock = 'div') {
    var $block = document.createElement(nameBlock);
    mainBlock.appendChild($block);
    return $block;
}

function createHeaderSC($shoppingCart) {
    var $header = createChild($shoppingCart, 'header');

    var titleShoppingCart = ['Product Details',
                             'unite Price',
                             'Quantity',
                             'shipping',
                             'subtotal',
                             'ACTION', ];

    for (var i = 0; i < titleShoppingCart.length; i++) {
        var $block = createChild($header);
        $block.textContent = titleShoppingCart[i];
    }
}

function createSectionProduct($shoppingCart, product) {
    var $section = createChild($shoppingCart, 'section');

    var $block = createChild(createChild($section), 'h3');
    $block.textContent = product[0].name;

    var $block = createChild($section);
    $block.textContent = product[0].price;

    var $block = createChild(createChild($section), 'input');
    $block.value = product[1];
    $block.type = 'number';
    $block.readOnly = true;

    var $block = createChild($section);
    $block.textContent = 'FREE';

    var subTotal = product[0].price * product[1];
    var $block = createChild(createChild($section), 'output');
    $block.innerHTML = '$<output name="result">' + subTotal + '</output>'

    var $block = createChild($section);
    $block.innerHTML = '<a href="#"><img src="images/cansel.png" alt="cansel"></a>';
}

function createShoppingCart(cart) {

    var $shoppingCart = document.getElementsByClassName('shopping')[0];
    $shoppingCart.classList.add('container');
    
    if (cart.length == 0) {
        var $footer = createChild($shoppingCart, 'footer');
        $footer.textContent = 'Корзина пуста';
        return;
    }

    createHeaderSC($shoppingCart);

    var total = 0;
    var quantity = 0;
    for (var j = 0; j < cart.length; j++) {
        createSectionProduct($shoppingCart, cart[j]);
        quantity += cart[j][1];
        total += cart[j][0].price * cart[j][1];
    }

    var $footer = createChild($shoppingCart, 'footer');
    $footer.textContent = 'В корзине: ' + quantity + ' товаров на сумму $' + total;
}
