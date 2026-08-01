import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import FeaturedJobs from "../../components/FeaturedJobs/FeaturedJobs";
import Companies from "../../components/Companies/Companies";
import Stats from "../../components/Stats/Stats";
import Footer from "../../components/Footer/Footer";
import Filters from "../../components/Filters/Filters";
import jobs from "../../data/jobs";

function Home() {

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
const [type, setType] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);

  const filteredJobs = jobs.filter((job) => {

    const titleMatch =
        job.title.toLowerCase().includes(search.toLowerCase());

    const locationMatch =
        location === "" || job.location === location;

    const typeMatch =
        type === "" || job.type === type;

    return titleMatch && locationMatch && typeMatch;

});
  function toggleSave(id) {
    if (savedJobs.includes(id)) {
      setSavedJobs(savedJobs.filter((jobId) => jobId !== id));
    } else {
      setSavedJobs([...savedJobs, id]);
    }
  }

  return (
    <>
      <Navbar />

      <Hero
        search={search}
        setSearch={setSearch}
      />


        <Filters
            location={location}
            setLocation={setLocation}
            type={type}
            setType={setType}
        />      

      <Categories />

      <FeaturedJobs
        jobs={filteredJobs}
        savedJobs={savedJobs}
        toggleSave={toggleSave}
      />

      <Companies />

      <Stats />

      <Footer />
    </>
  );
}

export default Home;