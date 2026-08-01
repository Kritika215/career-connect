import { useState } from "react";
import "./PostJob.css";

function PostJob() {

  const [job, setJob] = useState({
    title: "",
    company: "",
    salary: "",
    location: "",
    experience: "",
    type: "",
    description: ""
  });

  function handleChange(e) {
    setJob({
      ...job,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(job);

    alert("Job Posted Successfully!");
  }

  return (
    <div className="post-job">

      <h1>Post a New Job</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={job.company}
          onChange={handleChange}
        />

        <input
          type="text"
          name="salary"
          placeholder="Salary"
          value={job.salary}
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
        />

        <input
          type="text"
          name="experience"
          placeholder="Experience"
          value={job.experience}
          onChange={handleChange}
        />

        <select
          name="type"
          value={job.type}
          onChange={handleChange}
        >
          <option value="">Select Job Type</option>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Internship</option>
          <option>Remote</option>
        </select>

        <textarea
          name="description"
          rows="5"
          placeholder="Job Description"
          value={job.description}
          onChange={handleChange}
        />

        <button type="submit">
          Post Job
        </button>

      </form>

    </div>
  );
}

export default PostJob;