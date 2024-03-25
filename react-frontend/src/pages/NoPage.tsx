import Views from "../components/Seachbar";
// import "./styles/Search.css"; // Import CSS file for styling

function NoPage() {
  return (
    <div className="search-container">
      <Views />
      <div className="content">
        <h1>Error 404: No page found</h1>
      </div>
    </div>
  );
}

export default NoPage;