import JobCard from "../JobCard/JobCard";
import "./FeaturedJobs.css";

function FeaturedJobs({ jobs, savedJobs, toggleSave }) {

  return (

    <section className="featured">

      <h1>Featured Jobs</h1>

      <div className="jobs">

        {
          jobs.length > 0 ? (

            jobs.map((job) => (

              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                company={job.company}
                salary={job.salary}
                saved={savedJobs.includes(job.id)}
                toggleSave={toggleSave}
              />

            ))

          ) : (

            <h2>No Jobs Found</h2>

          )
        }

      </div>

    </section>

  );
}

export default FeaturedJobs;