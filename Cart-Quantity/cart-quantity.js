let cartQuantity = 0;
        displayCartQuantity();

        function updateQuantity(change) {
            if (cartQuantity + change > 10) {
                alert('Cart is full');
                return;
            }
            if (cartQuantity + change < 0) {
                alert("Not enough items in the cart");
                return;
            }
            cartQuantity += change;
            displayCartQuantity();
        }

        function displayCartQuantity() {
            document.querySelector('.js-quantity')
                .innerHTML = `Cart quantity: ${cartQuantity}`;
        }