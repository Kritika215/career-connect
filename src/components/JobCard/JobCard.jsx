import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./JobCard.css";

function JobCard({
  id,
  title,
  company,
  salary,
  saved,
  toggleSave
}) {

  return (

    <div className="card">

      <div className="heart">

        <button
          className="heart-btn"
          onClick={() => toggleSave(id)}
        >
          {saved ? <FaHeart /> : <FaRegHeart />}
        </button>

      </div>

      <h2>{title}</h2>

      <p>{company}</p>

      <h3>{salary}</h3>

      <Link to={`/jobs/${id}`}>
        <button>View Details</button>
      </Link>

    </div>

  );
}

export default JobCard;