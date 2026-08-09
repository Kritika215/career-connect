import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsBriefcaseFill } from "react-icons/bs";
import "./JobCard.css";

function JobCard({
  id,
  title,
  company,
  logo,
  salary,
  location,
  experience,
  type,
  saved,
  toggleSave
}) {
  return (

    <div className="card">

      <button
        className="heart-btn"
        onClick={() => toggleSave(id)}
      >
        {saved ? <FaHeart color="red" /> : <FaRegHeart />}
      </button>

      <h2>{title}</h2>

      <h4>{company}</h4>

      <p>
        <FaLocationDot />
        {" "}
        {location}
      </p>

      <p>
        <BsBriefcaseFill />
        {" "}
        {type}
      </p>

      <p>{experience}</p>

      <h3>{salary}</h3>

      <Link to={`/jobs/${id}`}>
        <button className="details-btn">
          View Details
        </button>
      </Link>

    </div>

  );
}

export default JobCard;