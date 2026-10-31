import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "Lahore",
    payment: "Cash on Delivery",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const order = {
      orderId: `TB-${Date.now().toString().slice(-6)}`,
      customer: formData,
      items: cart,
      total,
      createdAt: new Date().toLocaleString(),
    };

    // Demo only: order is saved in this browser.
    localStorage.setItem("tastebite-last-order", JSON.stringify(order));

    alert(`Thank you, ${formData.name}! Your demo order has been placed.`);

    navigate("/order-success");
  }

  if (cart.length === 0) {
    return (
      <main className="checkout-page">
        <section className="checkout-empty">
          <span>🛒</span>
          <h1>Your Cart Is Empty</h1>
          <p>Add some delicious dishes before checking out.</p>
          <Link to="/menu" className="checkout-primary-btn">
            Explore Menu
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <section className="checkout-hero">
        <span className="section-eyebrow">ALMOST THERE</span>
        <h1>Complete Your <span>Order.</span></h1>
        <p>Fresh flavors are just a few steps away.</p>
      </section>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="checkout-section-heading">
            <span>01</span>
            <div>
              <h2>Delivery Details</h2>
              <p>Where should we deliver your order?</p>
            </div>
          </div>

          <div className="checkout-fields">
            <div className="checkout-field">
              <label htmlFor="customer-name">Full Name</label>
              <input
                id="customer-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="checkout-field">
              <label htmlFor="customer-phone">Phone Number</label>
              <input
                id="customer-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="03XX XXXXXXX"
                pattern="[0-9+() -]{7,20}"
                required
              />
            </div>

            <div className="checkout-field full-width">
              <label htmlFor="customer-email">Email Address (Optional)</label>
              <input
                id="customer-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>

            <div className="checkout-field full-width">
              <label htmlFor="customer-address">Delivery Address</label>
              <textarea
                id="customer-address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="House number, street, area..."
                rows="3"
                required
              />
            </div>

            <div className="checkout-field">
              <label htmlFor="customer-city">City</label>
              <input
                id="customer-city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="checkout-section-heading payment-heading">
            <span>02</span>
            <div>
              <h2>Payment Method</h2>
              <p>Choose how you would like to pay.</p>
            </div>
          </div>

          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              value="Cash on Delivery"
              checked={formData.payment === "Cash on Delivery"}
              onChange={handleChange}
            />
            <span className="payment-icon">💵</span>
            <span>
              <strong>Cash on Delivery</strong>
              <small>Pay when your order arrives.</small>
            </span>
          </label>

          <button className="checkout-primary-btn checkout-submit" type="submit">
            Place Demo Order <span>↗</span>
          </button>

          <p className="checkout-disclaimer">
            Demo checkout only. No real order or delivery will be created.
          </p>
        </form>

        <aside className="checkout-summary">
          <span className="section-eyebrow">YOUR SELECTION</span>
          <h2>Order Summary</h2>

          <div className="checkout-items">
            {cart.map((item) => (
              <div className="checkout-item" key={item.id}>
                <div className="checkout-item-info">
                  <h3>{item.name}</h3>
                  <p>Qty: {item.quantity}</p>
                  <button
                    type="button"
                    className="checkout-remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>

                <strong>
                  Rs. {(item.price * item.quantity).toLocaleString("en-PK")}
                </strong>
              </div>
            ))}
          </div>

          <div className="checkout-total">
            <span>Total</span>
            <strong>Rs. {total.toLocaleString("en-PK")}</strong>
          </div>

          <Link to="/cart" className="checkout-back-link">
            ← Back to Cart
          </Link>
        </aside>
      </div>
    </main>
  );
}

export default Checkout;