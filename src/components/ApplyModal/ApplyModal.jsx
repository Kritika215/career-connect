import { useState } from "react";
import { toast } from "react-toastify";
import "./ApplyModal.css";

function ApplyModal({ job, closeModal }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: ""
  });

  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  }

  function handleSubmit(e) {

    e.preventDefault();

    const applications =
      JSON.parse(localStorage.getItem("applications")) || [];

    applications.push({

      id: job.id,

      title: job.title,

      company: job.company,

      location: job.location,

      status: "Applied",

      ...form

    });

    localStorage.setItem(
      "applications",
      JSON.stringify(applications)
    );

    toast.success("Application Submitted Successfully!");

    closeModal();

  }

  return (

    <div className="modal-overlay">

      <div className="modal">

        <h2>Apply for {job.title}</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          <textarea
            name="coverLetter"
            rows="5"
            placeholder="Cover Letter"
            onChange={handleChange}
          />

          <div className="buttons">

            <button
              type="button"
              onClick={closeModal}
            >
              Cancel
            </button>

            <button type="submit">
              Apply
            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default ApplyModal;