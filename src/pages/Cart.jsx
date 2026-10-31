import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const totalPrice = cart.reduce(
    (total, dish) => total + dish.price * dish.quantity,
    0
  );

  return (
    <main className="cart-page">
      <h1>
        Your <span>Cart</span>
      </h1>
      {cart.length === 0 ? (
        <p>Your Cart is Empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((dish) => (
              <div className="cart-item" key={dish.id}>
                <img src={dish.image} alt={dish.name} />

                <div className="cart-item-details">
                  <h3>{dish.name}</h3>

                  <p>Price: ${dish.price}</p>

                  <div className="quantity-controls">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(dish.id)}
                      aria-label={`Decrease ${dish.name} quantity`}
                    >
                      −
                    </button>

                    <span>{dish.quantity}</span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(dish.id)}
                      aria-label={`Increase ${dish.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  <p>
                    Subtotal: ${dish.price * dish.quantity}
                  </p>

                  <button
                    type="button"
                    onClick={() => removeFromCart(dish.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h2>Total: ${totalPrice}</h2>
          <Link to="/checkout" className="checkout-primary-btn">
  Proceed to Checkout →
</Link>
        </>
      )}
    </main>
  );
}

export default Cart;