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
import Devotional from "./Devotional";
import { useEffect, useState } from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Search() {
  interface Event {
    poster: string;
    theme: string;
    description: string;
  }

  const [searchString, setSearchString] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [displaySearch, setDisplaySearch] = useState<Event[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get("http://localhost:3000/search_events", {
        params: {
          search: searchString,
          filter: selectedFilters,
        },
      });
      setDisplaySearch(response.data);
      setHasSearched(true); // Set hasSearched to true after performing the search
      console.log("Search Result:", response.data);
    } catch (error) {
      console.error("Error fetching search result:", error);
    }
  };

  const handleCheckboxChange = (filter: string) => {
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter];
    setSelectedFilters(updatedFilters);
  };

  const handleResetSearch = () => {
    setSearchString("");
    setSelectedFilters([]);
    setDisplaySearch([]);
    setHasSearched(false);
  };

  // Default content to display when there is no search term
  const defaultContent = (
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
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
              />
              <button
                className="btn btn-secondary ms-2"
                type="button"
                id="search-button"
                onClick={handleSearch}
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
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedFilters.includes("Prayer")}
                      onChange={(e) =>
                        handleCheckboxChange("Prayer")
                      }
                    />
                    <label className="form-check-label">Prayer</label>
                  </div>
                </div>
              </div>
  
              <div className="col">
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedFilters.includes("Devotional")}
                      onChange={(e) =>
                        handleCheckboxChange("Devotional")
                      }
                    />
                    <label className="form-check-label">Devotional</label>
                  </div>
                </div>
              </div>
  
              <div className="col">
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedFilters.includes("Bible Study")}
                      onChange={(e) =>
                        handleCheckboxChange("Bible Study")
                      }
                    />
                    <label className="form-check-label">Bible Study</label>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedFilters.includes("Worship")}
                      onChange={(e) =>
                        handleCheckboxChange("Worship")
                      }
                    />
                    <label className="form-check-label">Worship</label>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedFilters.includes("Community")}
                      onChange={(e) =>
                        handleCheckboxChange("Community")
                      }
                    />
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
          style={{
            marginLeft: "20px",
            marginTop: "40px",
            marginBottom: "10px",
          }}
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
  
  // Render search results if hasSearched is true, otherwise render default content
  const content = hasSearched ? (
    <div className="search-container">
      <Views />
      <div className="content">
      <div className="d-flex" style={{ paddingLeft: "20px"}}>
        {/* <h1>Discover Divine Destiny</h1> */}
          <div className="row">
          {/* <button onClick={handleResetSearch} style={{ position: "fixed",  zIndex: "3"}}>Back to Default Content</button> */}
          <div className="col" style={{marginTop: "20px"}}>
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
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
              />
              <button
                className="btn btn-secondary ms-2"
                type="button"
                id="search-button"
                onClick={handleSearch}
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
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedFilters.includes("Prayer")}
                      onChange={(e) =>
                        handleCheckboxChange("Prayer")
                      }
                    />
                    <label className="form-check-label">Prayer</label>
                  </div>
                </div>
              </div>
  
              <div className="col">
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedFilters.includes("Devotional")}
                      onChange={(e) =>
                        handleCheckboxChange("Devotional")
                      }
                    />
                    <label className="form-check-label">Devotional</label>
                  </div>
                </div>
              </div>
  
              <div className="col">
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedFilters.includes("Bible Study")}
                      onChange={(e) =>
                        handleCheckboxChange("Bible Study")
                      }
                    />
                    <label className="form-check-label">Bible Study</label>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedFilters.includes("Worship")}
                      onChange={(e) =>
                        handleCheckboxChange("Worship")
                      }
                    />
                    <label className="form-check-label">Worship</label>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedFilters.includes("Community")}
                      onChange={(e) =>
                        handleCheckboxChange("Community")
                      }
                    />
                    <label className="form-check-label">Community</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap" style={{paddingLeft: "20px"}}>
      {displaySearch.map((item, index) => (
        <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <img
            src={
              item.poster !== "/posters/N/A"
                ? `http://localhost:3000${item.poster}`
                : "https://via.placeholder.com/200"
            }
            className="img-fluid rounded-top"
            alt="search-poster"
            style={{ width: "200px", height: "200px" }}
          />
          <div style={{ width: "200px" }}>
            <h6>
              <strong>Title:</strong> {item.theme}
            </h6>
            <small>
              <p>
                <strong>Description:</strong> {item.description}
              </p>
            </small>
          </div>
        </div>
      ))}
        </div>
      </div>
    </div>
  ) : (
    defaultContent
  );

  // JSX for the Bootstrap Alert component
  const alertComponent = (
    <Alert variant="info" onClose={handleResetSearch} dismissible>
      <p>
        Do you want to go back to default content? Click{" "}
        <strong>here</strong>.
      </p>
    </Alert>
  );

  return (
    <div>
      {hasSearched && alertComponent}
      {content}
    </div>
  );
}

// export default function Search() {
//   interface Event {
//     poster: string;
//     theme: string;
//     description: string;
//   }

//   const [searchString, setSearchString] = useState("");
//   const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
//   const [displaySearch, setDisplaySearch] = useState<Event[]>([]);

//   useEffect(() => {
//     const handleSearch = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/search_events", {
//           params: {
//             search: searchString,
//             filter: selectedFilters,
//           },
//         });
//         setDisplaySearch(response.data);
//         console.log("Search Result:", response.data);
//       } catch (error) {
//         console.error("Error fetching search result:", error);
//       }
//     };

//     handleSearch();
//   }, [searchString, selectedFilters]);

//   return (
//     <div className="container-fluid d-flex flex-wrap">
//       {displaySearch.map((item, index) => {
//         // Declare imagePoster here
//         const imagePoster = item.poster;
//         return (
//           <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-3">
//             <img
//               src={imagePoster !== '/posters/N/A' ? `http://localhost:3000${item.poster}` : "https://via.placeholder.com/200"}
//               className="img-fluid rounded-top"
//               alt="search-poster"
//               style={{ width: "200px", height: "200px" }}
//             />
//             <div style={{ width: "200px" }}>
//               <h6><strong>Title:</strong> {item.theme}</h6>
//               <small><p><strong>Description:</strong> {item.description}</p></small>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

//   return (
//     <div className="search-container">
//       <Views />
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col">
//             <h1 style={{ margin: "20px" }}>Discover Divine Favorites</h1>
//             <div
//               className="input-group"
//               style={{ margin: "20px", maxWidth: "600px" }}
//             >
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Search devotionals, Bible study, events"
//                 aria-label="Search"
//                 aria-describedby="search-button"
//                 value={searchString}
//                 onChange={(e) => setSearchString(e.target.value)}
//               />
//               <button
//                 className="btn btn-secondary ms-2"
//                 type="button"
//                 id="search-button"
//                 onClick={handleSearch}
//               >
//                 Explore
//               </button>
//             </div>
//             <div className="d-flex" style={{ marginLeft: "20px" }}>
//               <h5>Top devotionals</h5>
//             </div>
//             <div
//               className="row row-cols-6 justify-content-center align-items-center g-2"
//               style={{ marginLeft: "20px" }}
//             >
//               <div className="col">
//                 <button type="button" className="btn btn-outline-secondary">
//                   Daily Devotions
//                 </button>
//               </div>
//               <div className="col">
//                 <button type="button" className="btn btn-outline-secondary">
//                   Prayer Requests
//                 </button>
//               </div>
//               <div className="col">
//                 <button type="button" className="btn btn-outline-secondary">
//                   Bible Studies
//                 </button>
//               </div>
//               <div className="col">
//                 <button type="button" className="btn btn-outline-secondary">
//                   Event Calendar
//                 </button>
//               </div>
//               <div className="col">
//                 <button type="button" className="btn btn-outline-secondary">
//                   Worship Music
//                 </button>
//               </div>
//               <div className="col">
//                 <button type="button" className="btn btn-outline-secondary">
//                   Community
//                 </button>
//               </div>
//             </div>

//             <div
//               className="d-flex"
//               style={{ marginLeft: "20px", marginTop: "40px" }}
//             >
//               <h5>Categories</h5>
//             </div>
//             <div className="row row-cols-6 g-2" style={{ marginLeft: "20px" }}>
//               <div className="col">
//                 <div className="mb-3">
//                   <div className="form-check">
//                     <input
//                       type="checkbox"
//                       className="form-check-input"
//                       checked={selectedFilters.includes("Prayer")}
//                       onChange={(e) =>
//                         handleCheckboxChange(e.target.checked, "Prayer")
//                       }
//                     />
//                     <label className="form-check-label">Prayer</label>
//                   </div>
//                 </div>
//               </div>

//               <div className="col">
//                 <div className="mb-3">
//                   <div className="form-check">
//                     <input
//                       type="checkbox"
//                       className="form-check-input"
//                       checked={selectedFilters.includes("Devotional")}
//                       onChange={(e) =>
//                         handleCheckboxChange(e.target.checked, "Devotional")
//                       }
//                     />
//                     <label className="form-check-label">Devotional</label>
//                   </div>
//                 </div>
//               </div>

//               <div className="col">
//                 <div className="mb-3">
//                   <div className="form-check">
//                     <input
//                       type="checkbox"
//                       className="form-check-input"
//                       checked={selectedFilters.includes("Bible Study")}
//                       onChange={(e) =>
//                         handleCheckboxChange(e.target.checked, "Bible Study")
//                       }
//                     />
//                     <label className="form-check-label">Bible Study</label>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="mb-3">
//                   <div className="form-check">
//                     <input
//                       type="checkbox"
//                       className="form-check-input"
//                       checked={selectedFilters.includes("Worship")}
//                       onChange={(e) =>
//                         handleCheckboxChange(e.target.checked, "Worship")
//                       }
//                     />
//                     <label className="form-check-label">Worship</label>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="mb-3">
//                   <div className="form-check">
//                     <input
//                       type="checkbox"
//                       className="form-check-input"
//                       checked={selectedFilters.includes("Community")}
//                       onChange={(e) =>
//                         handleCheckboxChange(e.target.checked, "Community")
//                       }
//                     />
//                     <label className="form-check-label">Community</label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/*Events*/}
//         <div
//           className="row row-cols-4 g-4"
//           style={{ marginTop: "20px", marginLeft: "20px" }}
//         >
//           <div className="d-grid" style={{ marginRight: "80px" }}>
//             <h6>Events</h6>
//             <div
//               className="col d-flex"
//               style={{ justifyContent: "space-between", marginTop: "10px" }}
//             >
//               <FontAwesomeIcon icon={faStar} />
//               <FontAwesomeIcon icon={faBible} />
//               <FontAwesomeIcon icon={faCalendarAlt} />
//               <FontAwesomeIcon icon={faMusic} />
//               <FontAwesomeIcon icon={faPrayingHands} />
//             </div>
//           </div>
//           <div className="d-grid">
//             <h6>Topics</h6>
//             <div className="col d-flex" style={{ marginTop: "10px" }}>
//               <input
//                 type="checkbox"
//                 name=""
//                 id=""
//                 style={{ marginRight: "10px" }}
//               />
//               <label
//                 className="form-check-label"
//                 style={{ marginRight: "20px" }}
//               >
//                 Seeker
//               </label>
//               <input
//                 type="checkbox"
//                 name=""
//                 id=""
//                 style={{ marginRight: "10px" }}
//               />
//               <label
//                 className="form-check-label"
//                 style={{ marginRight: "20px" }}
//               >
//                 Believer
//               </label>
//               <input
//                 type="checkbox"
//                 name=""
//                 id=""
//                 style={{ marginRight: "10px" }}
//               />
//               <label
//                 className="form-check-label"
//                 style={{ marginRight: "20px" }}
//               >
//                 Disciple
//               </label>
//             </div>
//           </div>
//         </div>

//         {/*Inspration for you*/}
//         <div
//           className="d-flex"
//           style={{
//             marginLeft: "20px",
//             marginTop: "40px",
//             marginBottom: "10px",
//           }}
//         >
//           <h5>Inspiration for you</h5>
//         </div>
//         <div className="row row-cols-6 g-2" style={{ marginLeft: "20px" }}>
//           <div className="col bg-light" style={{ marginRight: "30px" }}>
//             <div className="mb-3 d-grid">
//               <img
//                 src="https://via.placeholder.com/300"
//                 className="img-fluid rounded-top"
//                 alt=""
//               />
//               <h5>Prayer Warriors</h5>
//               <p>
//                 <small>Divine Connections</small>
//               </p>
//             </div>
//           </div>

//           <div className="col bg-light" style={{ marginRight: "30px" }}>
//             <div className="mb-3 d-grid">
//               <img
//                 src="https://via.placeholder.com/300"
//                 className="img-fluid rounded-top"
//                 alt=""
//               />
//               <h5>Bible Study Guide</h5>
//               <p>
//                 <small>Spiritual Mentorship</small>
//               </p>
//             </div>
//           </div>

//           <div className="col bg-light" style={{ marginRight: "30px" }}>
//             <div className="mb-3 d-grid">
//               <img
//                 src="https://via.placeholder.com/300"
//                 className="img-fluid rounded-top"
//                 alt=""
//               />
//               <h5>Beginner's Bible</h5>
//               <p>
//                 <small>Faith Journey</small>
//               </p>
//             </div>
//           </div>

//           <div className="col bg-light">
//             <div className="mb-3 d-grid">
//               <img
//                 src="https://via.placeholder.com/300"
//                 className="img-fluid rounded-top"
//                 alt=""
//               />
//               <h5>Prayer Power</h5>
//               <p>
//                 <small>Divine Guidance</small>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Search;
