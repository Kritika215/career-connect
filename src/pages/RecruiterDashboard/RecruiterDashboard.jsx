import "./RecruiterDashboard.css";

function RecruiterDashboard() {

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      applicants: 25,
      status: "Open"
    },
    {
      id: 2,
      title: "Backend Developer",
      applicants: 18,
      status: "Open"
    },
    {
      id: 3,
      title: "React Developer",
      applicants: 12,
      status: "Closed"
    }
  ];

  return (

    <div className="recruiter">

      <h1>Recruiter Dashboard</h1>

      <button className="post-btn">

        + Post New Job

      </button>

      <table>

        <thead>

          <tr>

            <th>Job</th>

            <th>Applicants</th>

            <th>Status</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {

            jobs.map(job=>

              <tr key={job.id}>

                <td>{job.title}</td>

                <td>{job.applicants}</td>

                <td>{job.status}</td>

                <td>

                  <button>Edit</button>

                  <button>Delete</button>

                </td>

              </tr>

            )

          }

        </tbody>

      </table>

    </div>

  );

}

export default RecruiterDashboard;