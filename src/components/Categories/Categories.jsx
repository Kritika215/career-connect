import "./Categories.css";

function Categories() {

    const categories = [
        "Frontend",
        "Backend",
        "Full Stack",
        "UI/UX",
        "DevOps",
        "Data Science",
        "AI/ML",
        "Cyber Security"
    ];

    return (

        <section className="categories">

            <h2>Browse By Category</h2>

            <div className="category-container">

                {

                    categories.map((item,index)=>(
                        <div className="category-card" key={index}>
                            {item}
                        </div>
                    ))

                }

            </div>

        </section>

    )

}

export default Categories;