import "./Companies.css";

function Companies(){

    const companies=[
        "Google",
        "Microsoft",
        "Amazon",
        "Adobe",
        "Oracle",
        "TCS",
        "Infosys",
        "Accenture"
    ];

    return(

        <section className="companies">

            <h2>Top Hiring Companies</h2>

            <div className="company-list">

                {

                    companies.map((company,index)=>

                        <div className="company" key={index}>
                            {company}
                        </div>

                    )

                }

            </div>

        </section>

    )

}

export default Companies;