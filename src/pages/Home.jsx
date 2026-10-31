import { Link } from "react-router-dom";

function Home() {
  const dishes = [
    {
      id: 1,
      name: "Special Burger",
      price: "$18",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85",
    },
    {
      id: 2,
      name: "Italian Pizza",
      price: "$22",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=85",
    },
    {
      id: 3,
      name: "Creamy Pasta",
      price: "$16",
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=85",
    },
  ];

  return (
    <main className="home-page">
      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="hero-content">
          <span className="hero-tag">
            WELCOME TO TASTEBITE
          </span>

          <h1>
            Experience The
            <br />
            <span>Art Of Fine Dining.</span>
          </h1>

          <p>
            Discover exceptional flavors, freshly prepared dishes
            and an unforgettable dining experience.
          </p>

          <div className="hero-buttons">
            <Link to="/menu" className="primary-btn">
              Explore Menu <span>↗</span>
            </Link>

            <Link to="/reservation" className="secondary-btn">
              Book a Table
            </Link>
          </div>

          <div className="hero-note">
            <span>✦</span> Fresh Ingredients · Exceptional Taste
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85"
            alt="Elegant restaurant interior"
          />

          <div className="image-badge">
            <span>✦</span>
            <div>
              <strong>Made with Passion</strong>
              <small>Every dish tells a story</small>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="featured-section">
        <div className="featured-heading">
          <span className="section-eyebrow">
            DISCOVER OUR MENU
          </span>

          <h2>
            Our Signature <span>Dishes</span>
          </h2>

          <p>
            Handcrafted with love. Served with excellence.
          </p>
        </div>

        <div className="food-grid">
          {dishes.map((dish) => (
            <article className="food-card" key={dish.id}>
              <div className="food-image">
                <img src={dish.image} alt={dish.name} />
                <span className="food-tag">CHEF'S PICK</span>
              </div>

              <div className="food-info">
                <div>
                  <h3>{dish.name}</h3>
                  <p>Freshly prepared for you</p>
                </div>

                <span className="food-price">
                  {dish.price}
                </span>
              </div>

              <div className="food-card-bottom">
                <span>✦ Premium Quality</span>
                <Link to="/menu" aria-label={`Explore ${dish.name}`}>
                  View Menu ↗
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="menu-action">
          <Link to="/menu" className="primary-btn">
            Explore Full Menu ↗
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;