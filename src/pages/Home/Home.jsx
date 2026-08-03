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
  const [sortBy, setSortBy] = useState("");

  const [savedJobs, setSavedJobs] = useState(
    JSON.parse(localStorage.getItem("savedJobs")) || []
  );

  const filteredJobs = jobs
    .filter((job) => {

      const titleMatch =
        job.title.toLowerCase().includes(search.toLowerCase());

      const locationMatch =
        location === "" || job.location === location;

      const typeMatch =
        type === "" || job.type === type;

      return (
        titleMatch &&
        locationMatch &&
        typeMatch
      );

    })

    .sort((a, b) => {

      if (sortBy === "salaryHigh") {

        return (
          Number(b.salary.replace(/[^\d]/g, "")) -
          Number(a.salary.replace(/[^\d]/g, ""))
        );

      }

      if (sortBy === "salaryLow") {

        return (
          Number(a.salary.replace(/[^\d]/g, "")) -
          Number(b.salary.replace(/[^\d]/g, ""))
        );

      }

      if (sortBy === "company") {

        return a.company.localeCompare(b.company);

      }

      if (sortBy === "title") {

        return a.title.localeCompare(b.title);

      }

      return 0;

    });

  function toggleSave(id) {

    let updatedJobs;

    if (savedJobs.includes(id)) {

      updatedJobs = savedJobs.filter(
        (jobId) => jobId !== id
      );

    } else {

      updatedJobs = [...savedJobs, id];

    }

    setSavedJobs(updatedJobs);

    localStorage.setItem(
      "savedJobs",
      JSON.stringify(updatedJobs)
    );

  }

  return (

    <>
      <Navbar />

      <Hero
        search={search}
        setSearch={setSearch}
      />

      <Filters
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        type={type}
        setType={setType}
        sortBy={sortBy}
        setSortBy={setSortBy}
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