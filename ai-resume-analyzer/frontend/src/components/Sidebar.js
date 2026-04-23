import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-white shadow vh-100 p-3" style={{ width: "220px" }}>
      {/* ❌ REMOVED ATS AI */}

      <ul className="nav flex-column gap-2 mt-3">
        <li>
          <NavLink to="/" className="nav-link">
            🏠 Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/analysis" className="nav-link">
            📊 Analysis
          </NavLink>
        </li>

        <li>
          <NavLink to="/suggestions" className="nav-link">
            💡 Suggestions
          </NavLink>
        </li>

        <li>
          <NavLink to="/upload" className="nav-link">
            📁 Upload
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
