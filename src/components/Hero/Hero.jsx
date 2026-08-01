import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <h1>Find Your Dream Job Today</h1>

      <p>
        Thousands of jobs from top companies waiting for you.
      </p>

      <div className="search-box">

        <input
          type="text"
          placeholder="Search Jobs..."
        />

        <button>Search</button>

      </div>

    </section>
  );
}

export default Hero;