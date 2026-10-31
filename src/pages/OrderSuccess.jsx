import { Link } from "react-router-dom";

function OrderSuccess() {
  let order = null;

  try {
    order = JSON.parse(localStorage.getItem("tastebite-last-order"));
  } catch {
    order = null;
  }

  return (
    <main className="checkout-page">
      <section className="order-success-card">
        <div className="success-icon">✓</div>

        <span className="section-eyebrow">TASTEBITE</span>
        <h1>{order ? "Thank You!" : "Order Confirmation"}</h1>

        {order ? (
          <>
            <p>
              Your demo order has been recorded in this browser.
              No real restaurant order has been sent.
            </p>

            <div className="success-order-number">
              Demo Order ID: <strong>{order.orderId}</strong>
            </div>

            <div className="success-order-total">
              Total: <strong>Rs. {order.total.toLocaleString("en-PK")}</strong>
            </div>
          </>
        ) : (
          <p>No recent demo order was found in this browser.</p>
        )}

        <Link to="/menu" className="checkout-primary-btn">
          Explore More Dishes
        </Link>
      </section>
    </main>
  );
}

export default OrderSuccess;