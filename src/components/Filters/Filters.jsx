import "./Filters.css";

function Filters({
  search,
  setSearch,
  location,
  setLocation,
  type,
  setType
}) {
  return (
    <div className="filters">

      <input
        type="text"
        placeholder="Search Job..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="">All Locations</option>
        <option>Bangalore</option>
        <option>Hyderabad</option>
        <option>Pune</option>
        <option>Remote</option>
      </select>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">All Types</option>
        <option>Full Time</option>
        <option>Internship</option>
        <option>Remote</option>
      </select>

    </div>
  );
}

export default Filters;