import { useState } from "react";
import { useCart } from "../context/CartContext";

const foods = [
  {
    id: 1,
    name: "Classic Beef Burger",
    category: "Burgers",
    price: 1200,
    description: "Juicy beef patty, fresh lettuce, cheese and special sauce.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "Cheese Pizza",
    category: "Pizza",
    price: 1800,
    description: "Freshly baked pizza topped with cheese and herbs.",
image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80",  },
  {
    id: 3,
    name: "Creamy Pasta",
    category: "Pasta",
    price: 1400,
    description: "Creamy sauce, parmesan cheese and Italian herbs.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Crispy Chicken Burger",
    category: "Burgers",
    price: 950,
    description: "Crispy chicken, fresh vegetables and creamy mayo.",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=80",
  },
  {
  id: 5,
  name: "Fresh Lemon Drink",
  category: "Drinks",
  price: 350,
  description: "Refreshing lemon drink served chilled.",
  image: "/images/lemonade.jpg",
},
  {
    id: 6,
    name: "Italian Pasta",
    category: "Pasta",
    price: 1550,
    description: "Delicious pasta with a rich tomato sauce.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80",
  },
];

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart } = useCart();

  const categories = ["All", "Burgers", "Pizza", "Pasta", "Drinks"];

  const filteredFoods =
    activeCategory === "All"
      ? foods
      : foods.filter((food) => food.category === activeCategory);

  return (
    <main className="menu-page">
      <section className="menu-hero">
        <span className="section-eyebrow">DISCOVER OUR MENU</span>
        <h1>Delicious Food, <span>Made With Love.</span></h1>
        <p>
          Explore our chef's special dishes, prepared with fresh ingredients
          and unforgettable flavors.
        </p>
      </section>

      <section className="menu-section">
        <div className="menu-heading">
          <div>
            <span className="section-eyebrow">OUR SPECIALTIES</span>
            <h2>Explore Our <span>Menu</span></h2>
          </div>
          <p>Choose your favorite and order today.</p>
        </div>

        <div className="menu-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredFoods.map((food) => (
            <article className="menu-card" key={food.id}>
              <div className="menu-card-image">
                <img src={food.image} alt={food.name} loading="lazy" />
                <span className="food-category">{food.category}</span>
              </div>

              <div className="menu-card-content">
                <h3>{food.name}</h3>
                <p>{food.description}</p>

                <div className="menu-card-bottom">
                  <strong>
                    Rs. {food.price.toLocaleString("en-PK")}
                  </strong>

                  <button
                    className="menu-add-btn"
                    onClick={() => addToCart(food)}
                  >
                    + Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Menu;