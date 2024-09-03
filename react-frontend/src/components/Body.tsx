import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faStar,
  faBookOpen,
  faPeopleGroup,
  faBible,
  faCalendarAlt,
  faCross,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { destroyToken } from "../reduxState/action";
import axios from "axios";
import { AuthState } from "../reduxState/reducer";

function Body() {
  const dispatch = useDispatch(); // Initialize dispatch from react-redux
  const token = useSelector((state: AuthState) => state.token); // Get token from Redux store

  const handleLogout = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      console.log(token);
      // Perform logout actions here
      const response = await axios.get("http://localhost:3000/logout", {
        headers: {
          "x-token": token, // Pass token in request header
        },
      });

      console.log(response.data);

      // Dispatch action to destroy the token
      dispatch(destroyToken());
      // console.log(token);

      // Perform any additional logout actions (e.g., redirect to login page)
    } catch (error) {
      console.error("Error occurred during logout:", (error as Error).message);
    }
  };

  return (
    <div className="container">
      {/* Login and Signup Component */}
      <div className="d-flex justify-content-end align-items-center mb-3">
        {/* Login Button */}
        <Link to="/login" className="btn btn-primary me-3">
          Login
        </Link>
        {/* Signup Button */}
        <Link
          to="/"
          className="btn btn-outline-primary"
          onClick={(e) => handleLogout}
        >
          Logout
        </Link>
      </div>

      <h2 className="text-start">Featured Devotionals</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {/* Card 1 */}
        <div className="col">
          <div className="card">
            <div className="position-relative">
              <img
                src="https://via.placeholder.com/400"
                className="card-img-top"
                alt="place holder"
              />
              {/* Position-fixed div floating on the top right corner */}
              <div className="position-absolute top-0 end-0 bg-light">
                <img
                  src="https://via.placeholder.com/100"
                  className="img-fluid rounded-top bg-light"
                  alt="icon"
                  style={{
                    width: "50px",
                    height: "50px",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                />
              </div>
              {/* Position-absolute div hanging between card image and card body */}
              <div className="position-absolute top-100 start-0 translate-middle-y">
                <div className="text-center">
                  <div className="d-flex align-items-center bg-primary">
                    <img
                      className="rounded-circle"
                      src="https://via.placeholder.com/50"
                      alt="icon"
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "10px",
                        marginLeft: "10px",
                      }}
                    />
                    <p className="mb-0">Text Image</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card-body text-start px-0"
              style={{ marginTop: "30px" }}
            >
              <h5 className="card-title">Morning Devotion</h5>
              <div className="row align-items-center justify-content-between g-2 d-flex">
                <div className="col-auto d-flex align-items-center">
                  <FontAwesomeIcon icon={faClock} />
                  <p className="mb-0 ms-1">15m</p>
                </div>
                <div className="col-auto d-flex align-items-center">
                  <FontAwesomeIcon icon={faStar} />
                  <p className="mb-0 ms-1">5/5</p>
                </div>
                <div className="col-auto">
                  <button type="button" className="btn btn-primary">
                    Free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 1 */}
        <div className="col">
          <div className="card">
            <div className="position-relative">
              <img
                src="https://via.placeholder.com/400"
                className="card-img-top"
                alt="place holder"
              />
              {/* Position-fixed div floating on the top right corner */}
              <div className="position-absolute top-0 end-0 bg-light">
                <img
                  src="https://via.placeholder.com/100"
                  className="img-fluid rounded-top bg-light"
                  alt="icon"
                  style={{
                    width: "50px",
                    height: "50px",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                />
              </div>
              {/* Position-absolute div hanging between card image and card body */}
              <div className="position-absolute top-100 start-0 translate-middle-y">
                <div className="text-center">
                  <div className="d-flex align-items-center bg-primary">
                    <img
                      className="rounded-circle"
                      src="https://via.placeholder.com/50"
                      alt="icon"
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "10px",
                        marginLeft: "10px",
                      }}
                    />
                    <p className="mb-0">Text Image</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card-body text-start px-0"
              style={{ marginTop: "30px" }}
            >
              <h5 className="card-title">Bible Study Guides</h5>
              <div className="row align-items-center justify-content-between g-2 d-flex">
                <div className="col-auto d-flex align-items-center">
                  <FontAwesomeIcon icon={faClock} />
                  <p className="mb-0 ms-1">15m</p>
                </div>
                <div className="col-auto d-flex align-items-center">
                  <FontAwesomeIcon icon={faStar} />
                  <p className="mb-0 ms-1">5/5</p>
                </div>
                <div className="col-auto">
                  <button type="button" className="btn btn-primary">
                    Free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 1 */}
        <div className="col">
          <div className="card">
            <div className="position-relative">
              <img
                src="https://via.placeholder.com/400"
                className="card-img-top"
                alt="place holder"
              />
              {/* Position-fixed div floating on the top right corner */}
              <div className="position-absolute top-0 end-0 bg-light">
                <img
                  src="https://via.placeholder.com/100"
                  className="img-fluid rounded-top bg-light"
                  alt="icon"
                  style={{
                    width: "50px",
                    height: "50px",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                />
              </div>
              {/* Position-absolute div hanging between card image and card body */}
              <div className="position-absolute top-100 start-0 translate-middle-y">
                <div className="text-center">
                  <div className="d-flex align-items-center bg-primary">
                    <img
                      className="rounded-circle"
                      src="https://via.placeholder.com/50"
                      alt="icon"
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "10px",
                        marginLeft: "10px",
                      }}
                    />
                    <p className="mb-0">Text Image</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card-body text-start px-0"
              style={{ marginTop: "30px" }}
            >
              <h5 className="card-title">Prayer Requests</h5>
              <div className="row align-items-center justify-content-between g-2 d-flex">
                <div className="col-auto d-flex align-items-center">
                  <FontAwesomeIcon icon={faClock} />
                  <p className="mb-0 ms-1">15m</p>
                </div>
                <div className="col-auto d-flex align-items-center">
                  <FontAwesomeIcon icon={faStar} />
                  <p className="mb-0 ms-1">5/5</p>
                </div>
                <div className="col-auto">
                  <button type="button" className="btn btn-primary">
                    Free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 1 */}
        <div className="col">
          <div className="card">
            <div className="position-relative">
              <img
                src="https://via.placeholder.com/400"
                className="card-img-top"
                alt="place holder"
              />
              {/* Position-fixed div floating on the top right corner */}
              <div className="position-absolute top-0 end-0 bg-light">
                <img
                  src="https://via.placeholder.com/100"
                  className="img-fluid rounded-top bg-light"
                  alt="icon"
                  style={{
                    width: "50px",
                    height: "50px",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                />
              </div>
              {/* Position-absolute div hanging between card image and card body */}
              <div className="position-absolute top-100 start-0 translate-middle-y">
                <div className="text-center">
                  <div className="d-flex align-items-center bg-primary">
                    <img
                      className="rounded-circle"
                      src="https://via.placeholder.com/50"
                      alt="icon"
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "10px",
                        marginLeft: "10px",
                      }}
                    />
                    <p className="mb-0">Text Image</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card-body text-start px-0"
              style={{ marginTop: "30px" }}
            >
              <h5 className="card-title">Event Calendar</h5>
              <div className="row align-items-center justify-content-between g-2 d-flex">
                <div className="col-auto d-flex align-items-center">
                  <FontAwesomeIcon icon={faClock} />
                  <p className="mb-0 ms-1">15m</p>
                </div>
                <div className="col-auto d-flex align-items-center">
                  <FontAwesomeIcon icon={faStar} />
                  <p className="mb-0 ms-1">5/5</p>
                </div>
                <div className="col-auto">
                  <button type="button" className="btn btn-primary">
                    Free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat similar structure for other cards */}
      </div>

      <div
        style={{
          marginTop: "40px",
        }}
      >
        <h3 className="text-start">Categories</h3>
        <div
          className="row row-cols-1 row-cols-md-6 g-4"
          style={{
            marginTop: "20px",
          }}
        >
          <div className="col">
            <div className="row justify-content-center align-items-center g-2 d-grid bg-light">
              <div className="col">
                <FontAwesomeIcon icon={faBookOpen} />
              </div>
              <div className="col">
                <p>Devotional</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row justify-content-center align-items-center g-2 d-grid bg-light">
              <div className="col">
                <FontAwesomeIcon icon={faPeopleGroup} />
              </div>
              <div className="col">
                <p>Prayer</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row justify-content-center align-items-center g-2 d-grid bg-light">
              <div className="col">
                <FontAwesomeIcon icon={faBible} />
              </div>
              <div className="col">
                <p>Bible Study</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row justify-content-center align-items-center g-2 d-grid bg-light">
              <div className="col">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
              <div className="col">
                <p>Event</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row justify-content-center align-items-center g-2 d-grid bg-light">
              <div className="col">
                <FontAwesomeIcon icon={faCross} />
              </div>
              <div className="col">
                <p>Spiritual Growth</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row justify-content-center align-items-center g-2 d-grid bg-light">
              <div className="col">
                <FontAwesomeIcon icon={faPeopleGroup} />
              </div>
              <div className="col">
                <p>Community</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2 className="text-start">My Learning</h2>
        <div className="row row-cols-md-2 align-items-start g-2">
          <div className="card mb-3" style={{ marginTop: "40px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://via.placeholder.com/300"
                  className="img-fluid rounded-start"
                  alt="icon3"
                />
              </div>

              <div className="col-md-8 g-4">
                <div className="card-body position-relative">
                  {/* Position the image in the top-right corner */}
                  <div
                    className="position-absolute top-0 end-0"
                    style={{ width: "50px", height: "50" }}
                  >
                    <img
                      src="https://via.placeholder.com/100"
                      className="img-fluid rounded-top"
                      alt="icon5"
                    />
                  </div>
                  <h5 className="card-title text-start">Daily Devotional</h5>
                  <p className="card-text text-start">FirstName LastName</p>
                  <p className="card-text text-start">
                    <small className="text-body-secondary">
                      Progress Update
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" style={{ marginTop: "40px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://via.placeholder.com/300"
                  className="img-fluid rounded-start"
                  alt="icon3"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body position-relative">
                  {/* Position the image in the top-right corner */}
                  <div
                    className="position-absolute top-0 end-0"
                    style={{ width: "50px", height: "50" }}
                  >
                    <img
                      src="https://via.placeholder.com/100"
                      className="img-fluid rounded-top"
                      alt="icon5"
                    />
                  </div>
                  <h5 className="card-title text-start">Daily Devotional</h5>
                  <p className="card-text text-start">FirstName LastName</p>
                  <p className="card-text text-start">
                    <small className="text-body-secondary">
                      Progress Update
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <Link to="/ViewAll" className="btn btn-primary">
          View All
        </Link>
      </div>
    </div>
  );
}

export default Body;
