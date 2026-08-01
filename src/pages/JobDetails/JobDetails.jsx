import { useParams } from "react-router-dom";

function JobDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Job Details</h1>
      <h2>Job ID: {id}</h2>
    </div>
  );
}

export default JobDetails;