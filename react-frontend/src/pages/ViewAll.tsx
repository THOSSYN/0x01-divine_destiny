import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";
import Views from "../components/Seachbar";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import "./styles/Search.css"; // Import CSS file for styling

function ViewAll() {
  return (
    <div className="search-container">
      <Views />
      <div className="content-all" style={{ padding: "20px" }}>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src="https://via.placeholder.com/200" className="img-fluid rounded-start" alt="card-image"/>
            </div>
            <div className="col-md-8" style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: "5px", right: "5px" }}>
                <img
                src="https://via.placeholder.com/50"
                className="img-fluid rounded-top"
                alt="small image"
                />
            </div>
            <div className="card-body">
                <h5 className="card-title">Events Calendar</h5>
                <p className="card-text">Upcoming Events</p>
                <div className="bg-dark" style={{width: "200px", height: "10px", }}></div>
                <p className="card-text"><small className="text-body-secondary">Check schedule</small></p>
            </div>
            </div>
        </div>
        </div>

       <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src="https://via.placeholder.com/200" className="img-fluid rounded-start" alt="card-image"/>
            </div>
            <div className="col-md-8" style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: "5px", right: "5px" }}>
                <img
                src="https://via.placeholder.com/50"
                className="img-fluid rounded-top"
                alt="small image"
                />
            </div>
            <div className="card-body">
                <h5 className="card-title">Featured Devotional</h5>
                <p className="card-text">Daily Inspiration</p>
                <div className="bg-dark" style={{width: "200px", height: "10px", }}></div>
                <p className="card-text"><small className="text-body-secondary">Read now</small></p>
            </div>
            </div>
        </div>
        </div>

       <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src="https://via.placeholder.com/200" className="img-fluid rounded-start" alt="card-image"/>
            </div>
            <div className="col-md-8" style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: "5px", right: "5px" }}>
                <img
                src="https://via.placeholder.com/50"
                className="img-fluid rounded-top"
                alt="small image"
                />
            </div>
            <div className="card-body">
                <h5 className="card-title">Youth Bible Study Group</h5>
                <p className="card-text">Interactive Learning</p>
                <div className="bg-dark" style={{width: "200px", height: "10px", }}></div>
                <p className="card-text"><small className="text-body-secondary">Join discussion</small></p>
            </div>
            </div>
        </div>
        </div>

        <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src="https://via.placeholder.com/200" className="img-fluid rounded-start" alt="card-image"/>
            </div>
            <div className="col-md-8" style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: "5px", right: "5px" }}>
                <img
                src="https://via.placeholder.com/50"
                className="img-fluid rounded-top"
                alt="small image"
                />
            </div>
            <div className="card-body">
                <h5 className="card-title">Weekly Devotional</h5>
                <p className="card-text">Growth in Faith</p>
                <div className="bg-dark" style={{width: "200px", height: "10px", }}></div>
                <p className="card-text"><small className="text-body-secondary">Join challenge now</small></p>
            </div>
            </div>
        </div>
        </div>

      </div>

      {/* <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src="https://via.placeholder.com/400" className="img-fluid rounded-start" alt="img"/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
            </div>
        </div>
      </div> */}

      <div className="row row-cols-1 row-cols-md-2 g-4" >
       <div className="col">
        <div className="card">
          <img src="https://via.placeholder.com/400" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Prayer Requests</h5>
            <div className="bg-light d-flex align-items-center" style={{ width: "150px", height: "50px" }}>
                    <img
                        src="https://via.placeholder.com/50"
                        className="img-fluid rounded-circle"
                        alt="img"
                        style={{ margin: "10px", width: "40px", height: "40px" }}
                    />
                    <p className="m-0">Community</p>
            </div>
            <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faClock} style={{ padding: "10px"}} />
                <p className="m-0"><small>15m</small></p>
            </div>
            <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faStar} style={{ padding: "10px"}} />
                <p className="m-0"><small>4.9/5.0</small></p>
            </div>
            <h5>Bible Study Resources</h5>
            <p className="card-text">Explore a variety of resources to deepen your understanding of the scripture and grow in your faith</p>
            <div className="d-flex gap-2">
                <Link to="/" className="btn btn-primary">
                  Explore now
                </Link>
                <Link to="/" className="btn btn-primary">
                  <span>Join study group</span>
                </Link>
            </div>
          </div>
        </div>
       </div>
     </div>      
    </div>
  );
}

export default ViewAll;