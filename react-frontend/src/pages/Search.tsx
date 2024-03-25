import Navbar from "../components/Navbar";
import Views from "../components/Seachbar";
// import "./styles/Search.css"; // Import CSS file for styling

function Search() {
  return (
    <div className="search-container">
      <Views />
      <div className="content">
        <h1>This is the search page</h1>
      </div>
    </div>
  );
}

export default Search;
