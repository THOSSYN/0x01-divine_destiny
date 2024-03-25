import Navbar from "../components/Navbar";
import Views from "../components/Seachbar";
// import "./styles/Search.css"; // Import CSS file for styling

function Devotional() {
  return (
    <div className="search-container">
      <Views />
      <div className="content">
        <h1>Devotional page</h1>
      </div>
    </div>
  );
}

export default Devotional;