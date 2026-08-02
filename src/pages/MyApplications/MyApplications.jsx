import Navbar from "../../components/Navbar/Navbar";
import "./MyApplications.css";

function MyApplications() {

  const applications =
    JSON.parse(localStorage.getItem("applications")) || [];

  return (

    <>
      <Navbar />

      <div className="applications-page">

        <h1>My Applications</h1>

        {
          applications.length === 0 ?

          <h2>No Applications Yet</h2>

          :

          <div className="application-list">

            {

              applications.map((job,index)=>(

                <div
                  key={index}
                  className="application-card"
                >

                  <h2>{job.title}</h2>

                  <h4>{job.company}</h4>

                  <p>{job.location}</p>

                  <span className="status">

                    {job.status}

                  </span>

                </div>

              ))

            }

          </div>

        }

      </div>

    </>

  );

}

export default MyApplications;