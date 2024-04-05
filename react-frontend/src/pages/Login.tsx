import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { getToken } from '../reduxState/action';

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Encode credentials in base64
      const token = btoa(`${name}:${password}`);
      // Set up axios request headers with basic authentication
      const headers = {
        Authorization: `Basic ${token}`,
      };

      // Make the login request
      const response = await axios.get("http://localhost:3000/login", {
        headers,
      });

      console.log("Login successful:", response.data);

      dispatch(getToken(response.data.token));

      // Redirect to homepage on successful login
      navigate("/HomePage");
    } catch (error) {
      console.error("Error occurred during login:", error.message);
    }
  };

  return (
    <div className="container bg-light">
      <div className="d-flex">
        {/* Home Link */}
        <Link
          to="/"
          className="position-absolute top-0 start-0 m-3 text-decoration-none"
        >
          <FontAwesomeIcon icon={faHome} size="2x" />
        </Link>

        <img
          src="https://via.placeholder.com/400"
          className="img-fluid rounded-top"
          alt="Login-img"
        />
        {/*Login Form*/}
        <div
          className="d-flex flex-column justify-content-center"
          style={{ backgroundColor: "", marginLeft: "40px", padding: "20px" }}
        >
          <h4>Welcome to DivineDestinyConnect</h4>
          <h5>Please enter your login details</h5>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Username or Email
              </label>
              <input
                className="form-control form-control-sm"
                type="text"
                placeholder="Username or Email"
                aria-label=".form-control-sm example"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Password
              </label>
              <input
                className="form-control form-control-sm"
                type="password"
                placeholder="Password"
                aria-label=".form-control-sm example"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </div>
          </form>
          <p className="text-center">
            Not already a user?<Link to="/Signup">sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// import axios from "axios";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { useDispatch } from 'react-redux'; 

// export default function Login() {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch(); // Initialize dispatch
  

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // Encode credentials in base64
//       const token = btoa(`${name}:${password}`);
//       // Set up axios request headers with basic authentication
//       const headers = {
//         Authorization: `Basic ${token}`,
//       };

//       // Make the login request
//       const response = await axios.get("http://localhost:3000/login", {
//         headers,
//       });

//       console.log("Login successful:", response.data.token);

//       // Dispatch action to set token in Redux
//       dispatch(getToken(response.data.token));

//       // Redirect to homepage on successful login
//       navigate("/HomePage");
//     } catch (error) {
//       console.error("Error occurred during login:", error.message);
//     }
//   };

//   return (
//     <div className="container bg-light">
//       <div className="d-flex">
//         {/* Home Link */}
//         <Link
//           to="/"
//           className="position-absolute top-0 start-0 m-3 text-decoration-none"
//         >
//           <FontAwesomeIcon icon={faHome} size="2x" />
//         </Link>

//         <img
//           src="https://via.placeholder.com/400"
//           className="img-fluid rounded-top"
//           alt="Login-img"
//         />
//         {/*Login Form*/}
//         <div
//           className="d-flex flex-column justify-content-center"
//           style={{ backgroundColor: "", marginLeft: "40px", padding: "20px" }}
//         >
//           <h4>Welcome to DivineDestinyConnect</h4>
//           <h5>Please enter your login details</h5>

//           <form onSubmit={handleLogin}>
//             <div className="mb-3">
//               <label htmlFor="" className="form-label">
//                 Username or Email
//               </label>
//               <input
//                 className="form-control form-control-sm"
//                 type="text"
//                 placeholder="Username or Email"
//                 aria-label=".form-control-sm example"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="" className="form-label">
//                 Password
//               </label>
//               <input
//                 className="form-control form-control-sm"
//                 type="password"
//                 placeholder="Password"
//                 aria-label=".form-control-sm example"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             <div className="d-flex justify-content-center">
//               <button type="submit" className="btn btn-primary">
//                 Sign In
//               </button>
//             </div>
//           </form>
//           <p className="text-center">
//             Not already a user?<Link to="/Signup">sign Up</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }