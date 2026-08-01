import "./JobCard.css";

function JobCard({ title, company, salary }) {

  return (

    <div className="card">

      <h2>{title}</h2>

      <p>{company}</p>

      <h3>{salary}</h3>

      <button>Apply Now</button>

    </div>

  );
}

export default JobCard;