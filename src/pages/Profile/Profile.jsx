import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Profile.css";

function Profile() {

 const [profile, setProfile] = useState(() => {

  const saved = localStorage.getItem("profile");

  return saved
    ? JSON.parse(saved)
    : {
        name: "",
        email: "",
        college: "",
        skills: "",
        experience: "",
        about: "",
      };

});

const [resume, setResume] = useState(
  localStorage.getItem("resume") || ""
);

  function handleChange(e) {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  }

  function handleResume(e) {

  const file = e.target.files[0];

  if (!file) return;

  setResume(file.name);

}

  function handleSave(e) {

  e.preventDefault();

  localStorage.setItem(
    "profile",
    JSON.stringify(profile)
  );

  localStorage.setItem(
    "resume",
    resume
  );

  alert("Profile Saved Successfully!");

}
  return (
    <>
      <Navbar />

      <div className="profile-page">

        <form
          className="profile-card"
          onSubmit={handleSave}
        >

          <h1>Candidate Profile</h1>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={profile.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={profile.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="college"
            placeholder="College"
            value={profile.college}
            onChange={handleChange}
          />

          <input
            type="text"
            name="skills"
            placeholder="Skills (React, Node...)"
            value={profile.skills}
            onChange={handleChange}
          />

          <input
            type="text"
            name="experience"
            placeholder="Experience"
            value={profile.experience}
            onChange={handleChange}
          />

          <textarea
            name="about"
            rows="5"
            placeholder="About Yourself"
            value={profile.about}
            onChange={handleChange}
          />

          <div className="resume-upload">

  <label>Upload Resume (PDF)</label>

  <input
    type="file"
    accept=".pdf"
    onChange={handleResume}
  />

  {resume && (
    <p className="resume-name">
      📄 {resume}
    </p>
  )}

</div>

          <button>
            Save Profile
          </button>

        </form>

      </div>

    </>
  );
}

export default Profile;