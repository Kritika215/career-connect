import JobCard from "../JobCard/JobCard";
import "./FeaturedJobs.css";

function FeaturedJobs() {

    const jobs=[

        {
            id:1,
            title:"Frontend Developer",
            company:"Google",
            salary:"₹12 LPA"
        },

        {
            id:2,
            title:"Backend Developer",
            company:"Amazon",
            salary:"₹18 LPA"
        },

        {
            id:3,
            title:"MERN Stack Developer",
            company:"Microsoft",
            salary:"₹20 LPA"
        }

    ];

    return(

        <section className="featured">

            <h1>Featured Jobs</h1>

            <div className="jobs">

                {

                    jobs.map((job)=>

                        <JobCard

                            key={job.id}

                            title={job.title}

                            company={job.company}

                            salary={job.salary}

                        />

                    )

                }

            </div>

        </section>

    );

}

export default FeaturedJobs;