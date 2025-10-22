export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
    cart = [{
        productId: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
        quantity: 2
    }]
}
//Stayed at 13:56:33 External Libraries
export function addToCart(productId, button) {
  let matchingItem = undefined;

  cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          //this product is already in card so add more quantity
          matchingItem = cartItem;
        }
      });

      const selectValue = Number(button.parentElement.querySelector("select").value);

      if (matchingItem) {
        matchingItem.quantity += selectValue;
      } else {
        cart.push({
        productId,
        quantity: selectValue
      });
      }
      saveToStorage();
};



export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((product) => {
        if (product.productId !== productId) {
            newCart.push(product);
        }
    });

    cart = newCart;
    saveToStorage();
};


function saveToStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}