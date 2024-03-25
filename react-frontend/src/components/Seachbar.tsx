import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";
import {
  faBible,
  faCalendarAlt,
  faHouse,
  faPray,
  faPrayingHands,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Views() {
  return (
    <div>
      <div className="row-cols-md-4 justify-content-between align-items-start g-4 bg-light">
        <div className="col" style={{ margin: "20px" }}>
          <div
            className="row justify-content-center align-items-center g-2 d-grid"
            style={{ alignItems: "center" }}
          >
            <FontAwesomeIcon icon={faHouse} />
          </div>
          <div>
            <a href="#Home" className="text-decoration-none text-dark">
              <span>Home</span>
            </a>
          </div>
        </div>
        <div className="col" style={{ margin: "20px" }}>
          <div
            className="row justify-content-center align-items-center g-2 d-grid bg-light"
            style={{ alignItems: "center" }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div>
            <a href="#Search" className="text-decoration-none text-dark">
              <span>Search</span>
            </a>
          </div>
        </div>
        <div className="col" style={{ margin: "20px" }}>
          <div className="row justify-content-center align-items-center g-2 d-grid bg-light">
            <FontAwesomeIcon icon={faBible} />
          </div>
          <div>
            <a href="#Devotional" className="text-decoration-none text-dark">
              <span>Devotional</span>
            </a>
          </div>
        </div>
        <div className="col" style={{ margin: "20px" }}>
          <div className="row justify-content-center align-items-center g-2 d-grid bg-light">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </div>
          <div>
            <a href="#Event" className="text-decoration-none text-dark">
              <span>Event</span>
            </a>
          </div>
        </div>
        <div className="col" style={{ margin: "20px" }}>
          <div className="row justify-content-center align-items-center g-2 d-grid bg-light">
            <FontAwesomeIcon icon={faPrayingHands} />
          </div>
          <div>
            <a href="#Prayer" className="text-decoration-none text-dark">
              <span>Prayer</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Views;
