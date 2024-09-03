import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [agree, setAgree] = useState(false); // Initialize agree state as false
  const [showAlert, setShowAlert] = useState(false); // Initialize showAlert state as false
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Function to handle click on the terms link
  const handleTermsClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault(); // Prevent default link behavior
    toggleModal(); // Toggle modal visibility
  };

  // useEffect to show alert when agree state changes
  useEffect(() => {
    if (agree) {
      setShowAlert(true); // Show the alert when agree is true
      // Hide the alert after 3 seconds
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      // Clear the timeout to prevent memory leak
      return () => clearTimeout(timeout);
    }
  }, [agree]);

  // Event handler for checkbox change
  const handleAgreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgree(e.target.checked); // Update the agree state
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleFormSubmission = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      // Check if any form field is empty
      if (!name || !email || !username || !password || !confirmPassword) {
        // Handle empty fields
        console.error("Please fill in all fields");
        return;
      }

      // Check if passwords match
      if (password !== confirmPassword) {
        // Handle mismatched passwords
        console.error("Passwords do not match");
        return;
      }

      // Make the POST request
      const response = await axios.post("http://localhost:3000/addUser", {
        name,
        email,
        username,
        password,
      });

      // Access the response data directly
      console.log(response.data);
      navigate("/WelcomePage");
    } catch (error) {
      // Handle errors
      console.error("Error:", (error as Error).message);
    }
  };

  return (
    <div className="container" style={{ maxWidth: "50%" }}>
      <div className="text-center">
        {" "}
        {/* Added text-center class */}
        <h1>Sign up</h1>
        <p>Begin your spiritual journey here</p>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <form onSubmit={(e) => handleFormSubmission}>
          <div className="mb-3">
            {" "}
            {/* Added margin bottom class */}
            <label htmlFor="" className="form-label">
              Your full name
            </label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Your name"
              aria-label=".form-control-sm example"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="johndoe@email.com"
              aria-label=".form-control-sm example"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Username
            </label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="username"
              aria-label=".form-control-sm example"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Set up your secure password
            </label>
            <input
              className="form-control form-control-sm"
              type="password"
              placeholder="Type your password"
              aria-label=".form-control-sm example"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Confirm your password
            </label>
            <input
              className="form-control form-control-sm"
              type="password"
              placeholder="reconfirm password"
              aria-label=".form-control-sm example"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={handleAgreeChange}
                checked={agree}
              />
              <label className="form-check-label">
                I agree to the{" "}
                <a
                  href="/"
                  className="text-primary"
                  onClick={(e) => handleTermsClick}
                >
                  <span>DivineDestinyConnect</span>
                </a>{" "}
                Terms and Privacy
              </label>
            </div>
          </div>
          {/* Bootstrap alert */}
          {showAlert && (
            <div className="alert alert-success" role="alert">
              You have agreed to the terms and conditions.
            </div>
          )}
          {/* Bootstrap Modal */}
          {showModal && (
            <div
              className="modal"
              tabIndex={-1}
              role="dialog"
              style={{ display: "block" }}
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  {/* Modal content */}
                  <div className="modal-header">
                    <h5 className="modal-title">Terms and Conditions</h5>
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={toggleModal}
                    ></button>
                  </div>
                  <div className="modal-body">
                    {/* Insert terms and conditions text here */}
                    {/* Your terms and conditions content */}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={toggleModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="d-grid">
            <button className="btn btn-primary" type="submit">
              Join now
            </button>
          </div>
        </form>
        <div className="text-center">
          <p>
            Already a member?<Link to="/Login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
