import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import JobCard from "../../components/JobCard/JobCard";
import jobs from "../../data/jobs";
import "./SavedJobs.css";

function SavedJobs() {

    const [savedJobs, setSavedJobs] = useState(
        JSON.parse(localStorage.getItem("savedJobs")) || []
    );

    const savedList = jobs.filter(job =>
        savedJobs.includes(job.id)
    );

    function toggleSave(id) {

        const updated = savedJobs.filter(jobId => jobId !== id);

        setSavedJobs(updated);

        localStorage.setItem(
            "savedJobs",
            JSON.stringify(updated)
        );
    }

    return (

        <>
            <Navbar />

            <div className="saved-page">

                <h1>Saved Jobs ❤️</h1>

                <div className="saved-grid">

                    {
                        savedList.length > 0 ?

                        savedList.map(job => (

                            <JobCard
                                key={job.id}
                                {...job}
                                saved={true}
                                toggleSave={toggleSave}
                            />

                        ))

                        :

                        <h2>No Saved Jobs Yet</h2>

                    }

                </div>

            </div>

        </>

    );

}

export default SavedJobs;