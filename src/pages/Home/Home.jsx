import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import FeaturedJobs from "../../components/FeaturedJobs/FeaturedJobs";
import Companies from "../../components/Companies/Companies";
import Stats from "../../components/Stats/Stats";
import Footer from "../../components/Footer/Footer";

function Home() {

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      salary: "₹12 LPA",
      location: "Bangalore",
      experience: "2 Years",
      type: "Full Time"
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Amazon",
      salary: "₹18 LPA",
      location: "Hyderabad",
      experience: "3 Years",
      type: "Full Time"
    },
    {
      id: 3,
      title: "MERN Stack Developer",
      company: "Microsoft",
      salary: "₹20 LPA",
      location: "Remote",
      experience: "1 Year",
      type: "Remote"
    },
    {
      id: 4,
      title: "React Developer",
      company: "Adobe",
      salary: "₹15 LPA",
      location: "Pune",
      experience: "2 Years",
      type: "Internship"
    }
  ];

  const [search, setSearch] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

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