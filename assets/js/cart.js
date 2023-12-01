function $(a){
    return document.querySelector(a);
}

var uiCartCounter = $("#ui-cart-counter");
var uiShopCart = $("#ui-shop-cart-container");

var uiCardCount = 0;
uiCartCounter.innerHTML = uiCardCount;

function addProductToCart(imgSrc, name, price, version, quantity) {
    uiCardCount++;
    uiShopCart.innerHTML +=
        `
        <a id="cart-has-item-${uiCardCount}">
            <img src="${imgSrc}" class="float-left" width="65"/>
            <small class="text-black">
                <b>(${quantity})</b>
                ${name}
            </small>
            <b>${price}</b>
            <i class='bx bx-trash float-right' onclick="deleteProductFromCart(${uiCardCount})"></i>
        </a>
        `;
    uiCartCounter.innerHTML = uiCardCount;
}

function deleteProductFromCart(cartItemId) {
    var cartItem = $(`#cart-has-item-${cartItemId}`);
    if (cartItem) {
        cartItem.remove();
        uiCardCount--;
        uiCartCounter.innerHTML = uiCardCount;
    }
}
