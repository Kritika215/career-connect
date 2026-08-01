import JobCard from "../JobCard/JobCard";
import "./FeaturedJobs.css";

function FeaturedJobs({ jobs, savedJobs, toggleSave }) {
  return (
    <section className="featured">

      <div className="featured-title">
        <h2>Featured Jobs</h2>
        <p>Explore opportunities from top companies.</p>
      </div>

      <div className="jobs">

        {jobs.length > 0 ? (

          jobs.map((job) => (

            <JobCard
              key={job.id}
              id={job.id}
              title={job.title}
              company={job.company}
              logo={job.logo}
              salary={job.salary}
              location={job.location}
              experience={job.experience}
              type={job.type}
              saved={savedJobs.includes(job.id)}
              toggleSave={toggleSave}
            />

          ))

        ) : (

          <h2>No Jobs Found</h2>

        )}

      </div>

    </section>
  );
}

export default FeaturedJobs;