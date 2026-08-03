import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./MyApplications.css";

function MyApplications() {

  const [applications, setApplications] = useState([]);

  useEffect(() => {

    const savedApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    setApplications(savedApplications);

  }, []);

  function deleteApplication(index) {

    const updatedApplications = [...applications];

    updatedApplications.splice(index, 1);

    setApplications(updatedApplications);

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );

  }

  return (

    <>
      <Navbar />

      <div className="applications-page">

        <h1>My Applications</h1>

        {applications.length === 0 ? (

          <p className="empty">
            No Applications Yet.
          </p>

        ) : (

          applications.map((application, index) => (

            <div
              className="application-card"
              key={index}
            >

              <h2>{application.title}</h2>

              <h4>{application.company}</h4>

              <p>
                <strong>Name:</strong> {application.name}
              </p>

              <p>
                <strong>Email:</strong> {application.email}
              </p>

              <p>
                <strong>Phone:</strong> {application.phone}
              </p>

              <p>
                <strong>Status:</strong> {application.status}
              </p>

              <button
                onClick={() => deleteApplication(index)}
              >
                Delete
              </button>

            </div>

          ))

        )}

      </div>

    </>

  );

}

export default MyApplications;