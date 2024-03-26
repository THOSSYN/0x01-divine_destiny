import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";
import Views from "../components/Seachbar";
import "../styles/Search.css"; // Import CSS file for styling
import {
  faBible,
  faCalendarAlt,
  faMusic,
  faPrayingHands,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <div className="search-container">
      <Views />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 style={{ margin: "20px" }}>Discover Divine Favorites</h1>
            <div
              className="input-group"
              style={{ margin: "20px", maxWidth: "600px" }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Search devotionals, Bible study, events"
                aria-label="Search"
                aria-describedby="search-button"
              />
              <button
                className="btn btn-secondary ms-2"
                type="button"
                id="search-button"
              >
                Explore
              </button>
            </div>
            <div className="d-flex" style={{ marginLeft: "20px" }}>
              <h5>Top devotionals</h5>
            </div>
            <div
              className="row row-cols-6 justify-content-center align-items-center g-2"
              style={{ marginLeft: "20px" }}
            >
              <div className="col">
                <button type="button" className="btn btn-outline-secondary">
                  Daily Devotions
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-outline-secondary">
                  Prayer Requests
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-outline-secondary">
                  Bible Studies
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-outline-secondary">
                  Event Calendar
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-outline-secondary">
                  Worship Music
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-outline-secondary">
                  Community
                </button>
              </div>
            </div>

            <div
              className="d-flex"
              style={{ marginLeft: "20px", marginTop: "40px" }}
            >
              <h5>Categories</h5>
            </div>
            <div className="row row-cols-6 g-2" style={{ marginLeft: "20px" }}>
              <div className="col">
                <div className="mb-3">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">Pray</label>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="mb-3">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">Devotional</label>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="mb-3">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">Bible Study</label>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">Worship</label>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">Community</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Events*/}
        <div
          className="row row-cols-4 g-4"
          style={{ marginTop: "20px", marginLeft: "20px" }}
        >
          <div className="d-grid" style={{ marginRight: "80px" }}>
            <h6>Events</h6>
            <div
              className="col d-flex"
              style={{ justifyContent: "space-between", marginTop: "10px" }}
            >
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faBible} />
              <FontAwesomeIcon icon={faCalendarAlt} />
              <FontAwesomeIcon icon={faMusic} />
              <FontAwesomeIcon icon={faPrayingHands} />
            </div>
          </div>
          <div className="d-grid">
            <h6>Topics</h6>
            <div className="col d-flex" style={{ marginTop: "10px" }}>
              <input
                type="checkbox"
                name=""
                id=""
                style={{ marginRight: "10px" }}
              />
              <label
                className="form-check-label"
                style={{ marginRight: "20px" }}
              >
                Seeker
              </label>
              <input
                type="checkbox"
                name=""
                id=""
                style={{ marginRight: "10px" }}
              />
              <label
                className="form-check-label"
                style={{ marginRight: "20px" }}
              >
                Believer
              </label>
              <input
                type="checkbox"
                name=""
                id=""
                style={{ marginRight: "10px" }}
              />
              <label
                className="form-check-label"
                style={{ marginRight: "20px" }}
              >
                Disciple
              </label>
            </div>
          </div>
        </div>

        {/*Inspration for you*/}
        <div
          className="d-flex"
          style={{ marginLeft: "20px", marginTop: "40px", marginBottom: "10px" }}
        >
          <h5>Inspiration for you</h5>
        </div>
        <div className="row row-cols-6 g-2" style={{ marginLeft: "20px" }}>
          <div className="col bg-light" style={{ marginRight: "30px" }}>
            <div className="mb-3 d-grid">
              <img
                src="https://via.placeholder.com/300"
                className="img-fluid rounded-top"
                alt=""
              />
              <h5>Prayer Warriors</h5>
              <p>
                <small>Divine Connections</small>
              </p>
            </div>
          </div>

          <div className="col bg-light" style={{ marginRight: "30px" }}>
            <div className="mb-3 d-grid">
              <img
                src="https://via.placeholder.com/300"
                className="img-fluid rounded-top"
                alt=""
              />
              <h5>Bible Study Guide</h5>
              <p>
                <small>Spiritual Mentorship</small>
              </p>
            </div>
          </div>

          <div className="col bg-light" style={{ marginRight: "30px" }}>
            <div className="mb-3 d-grid">
              <img
                src="https://via.placeholder.com/300"
                className="img-fluid rounded-top"
                alt=""
              />
              <h5>Beginner's Bible</h5>
              <p>
                <small>Faith Journey</small>
              </p>
            </div>
          </div>

          <div className="col bg-light">
            <div className="mb-3 d-grid">
              <img
                src="https://via.placeholder.com/300"
                className="img-fluid rounded-top"
                alt=""
              />
              <h5>Prayer Power</h5>
              <p>
                <small>Divine Guidance</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
