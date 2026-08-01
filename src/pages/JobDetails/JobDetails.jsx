import { useNavigate, useParams } from "react-router-dom";
import "./JobDetails.css";

const jobs = [
  {
    id:1,
    title:"Frontend Developer",
    company:"Google",
    salary:"₹12 LPA",
    location:"Bangalore",
    experience:"2 Years",
    type:"Full Time",
    description:"Build modern React applications and reusable UI components."
  },
  {
    id:2,
    title:"Backend Developer",
    company:"Amazon",
    salary:"₹18 LPA",
    location:"Hyderabad",
    experience:"3 Years",
    type:"Full Time",
    description:"Develop scalable REST APIs using Node.js and Express."
  },
  {
    id:3,
    title:"MERN Stack Developer",
    company:"Microsoft",
    salary:"₹20 LPA",
    location:"Remote",
    experience:"1 Year",
    type:"Remote",
    description:"Develop complete MERN stack applications."
  },
  {
    id:4,
    title:"React Developer",
    company:"Adobe",
    salary:"₹15 LPA",
    location:"Pune",
    experience:"2 Years",
    type:"Internship",
    description:"Create responsive React user interfaces."
  }
];

function JobDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const job = jobs.find((item)=>item.id===Number(id));

    if(!job){

        return <h1>Job Not Found</h1>

    }

    return(

        <div className="job-details">

            <button
            className="back-btn"
            onClick={()=>navigate(-1)}
            >
                ← Back
            </button>

            <div className="job-header">

                <div>

                    <h1>{job.title}</h1>

                    <p className="company">

                        {job.company}

                    </p>

                </div>

            </div>

            <div className="info">

                <div>

                    <strong>Salary</strong>

                    <p>{job.salary}</p>

                </div>

                <div>

                    <strong>Location</strong>

                    <p>{job.location}</p>

                </div>

                <div>

                    <strong>Experience</strong>

                    <p>{job.experience}</p>

                </div>

                <div>

                    <strong>Job Type</strong>

                    <p>{job.type}</p>

                </div>

            </div>

            <h3>Description</h3>

            <p>

                {job.description}

            </p>

            <button className="apply-btn">

                Apply Now

            </button>

        </div>

    )

}

export default JobDetails;