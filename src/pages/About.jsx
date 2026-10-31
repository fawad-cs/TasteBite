function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85"
            alt="Elegant restaurant dining experience"
          />
        </div>
        <div className="about-content">
          <span className="section-eyebrow">OUR STORY</span>
          <h1>
            More Than Food.
            <br />
            <span>It's An Experience.</span>
          </h1>
          <p>
            At TasteBite, we believe every meal should be memorable.
            We bring fresh ingredients, creative recipes, and warm
            hospitality together to create something special.
          </p>

          <p>
            From carefully prepared dishes to our welcoming atmosphere,
            every detail is designed to make your visit unforgettable.
          </p>

          <div className="about-stats">
            <div>
              <h3>10+</h3>
              <span>Years of Passion</span>
            </div>

            <div>
              <h3>25+</h3>
              <span>Signature Dishes</span>
            </div>

            <div>
              <h3>5k+</h3>
              <span>Happy Guests</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <span className="section-eyebrow">WHAT MAKES US SPECIAL</span>
        <h2>Made With <span>Passion.</span></h2>

        <div className="values-grid">
          <article className="value-card">
            <div className="value-icon">✦</div>
            <h3>Fresh Ingredients</h3>
            <p>
              We focus on fresh ingredients and thoughtful preparation
              in every dish.
            </p>
          </article>

          <article className="value-card">
            <div className="value-icon">♨</div>
            <h3>Expert Cooking</h3>
            <p>
              Our menu brings together comforting favorites and
              creative flavors.
            </p>
          </article>

          <article className="value-card">
            <div className="value-icon">♡</div>
            <h3>Warm Hospitality</h3>
            <p>
              We want every guest to feel welcome from the moment
              they walk through our doors.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default About;