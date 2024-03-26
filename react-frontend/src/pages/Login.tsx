import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
    return (
        <div className="container bg-light">
            <div className="d-flex">
                {/* Home Link */}
                <Link to="/" className="position-absolute top-0 start-0 m-3 text-decoration-none">
                    <FontAwesomeIcon icon={faHome} size="2x" />
                </Link>

                <img
                    src="https://via.placeholder.com/400"
                    className="img-fluid rounded-top"
                    alt="Login-img"
                />
                {/*Login Form*/}
                <div className="d-flex flex-column justify-content-center" style={{ backgroundColor: "", marginLeft: "40px", padding: "20px" }}>
                  <h4>Welcome to DivineDestinyConnect</h4>
                  <h5>Please enter you login details</h5>

                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Username or Email</label>
                    <input className="form-control form-control-sm" type="text" placeholder="Username or Email" aria-label=".form-control-sm example"/>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Password</label>
                    <input className="form-control form-control-sm" type="password" placeholder="Password" aria-label=".form-control-sm example"/>
                  </div>

                  <div className="d-flex justify-content-center">
                    <Link
                          type="button"
                          className="btn btn-primary"
                          to="/">
                        Sign In
                    </Link>
                  </div>
                  <p className="text-center">Not already a user?<Link to="/Signup">sign Up</Link></p>
                </div>
            </div>

        </div>
    );
}
