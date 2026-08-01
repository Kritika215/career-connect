import "./Hero.css";

function Hero({search,setSearch}) {

  return (

   <section className="hero">

  <div className="hero-content">

    <h1>Find Your Dream Job Today</h1>

    <p>
      Thousands of jobs from top companies waiting for you.
    </p>

    <div className="search-box">

      <input
        type="text"
        placeholder="Search Jobs..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <button>Search</button>

    </div>

  </div>

</section>

  );

}

export default Hero;