import "./Filters.css";

function Filters({
  location,
  setLocation,
  type,
  setType
}) {

  return (

    <section className="filters">

      <select
        value={location}
        onChange={(e)=>setLocation(e.target.value)}
      >
        <option value="">All Locations</option>
        <option>Bangalore</option>
        <option>Hyderabad</option>
        <option>Pune</option>
        <option>Remote</option>
      </select>

      <select
        value={type}
        onChange={(e)=>setType(e.target.value)}
      >
        <option value="">All Types</option>
        <option>Full Time</option>
        <option>Internship</option>
        <option>Remote</option>
      </select>

    </section>

  );
}

export default Filters;