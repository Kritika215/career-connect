import "./Companies.css";

import google from "../../assets/companyLogos/google.svg";
import microsoft from "../../assets/companyLogos/microsoft.svg";
import amazon from "../../assets/companyLogos/amazon.svg";
import adobe from "../../assets/companyLogos/adobe.svg";
import meta from "../../assets/companyLogos/meta.svg";
import netflix from "../../assets/companyLogos/netflix.svg";

function Companies() {

  const companies = [
    { id: 1, name: "Google", logo: google },
    { id: 2, name: "Microsoft", logo: microsoft },
    { id: 3, name: "Amazon", logo: amazon },
    { id: 4, name: "Adobe", logo: adobe },
    { id: 5, name: "Meta", logo: meta },
    { id: 6, name: "Netflix", logo: netflix }
  ];

  return (
    <section className="companies">

      <h2>Top Companies Hiring</h2>

      <div className="companies-grid">

        {companies.map((company) => (

          <div className="company-card" key={company.id}>

            <img
              src={company.logo}
              alt={company.name}
              className="company-logo"
            />

            <h3>{company.name}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Companies;