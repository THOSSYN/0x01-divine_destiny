import React, { useState, useEffect } from "react";
import axios from "axios";
import Views from "./Seachbar";

export default function Dev() {
  interface Event {
    poster: string;
    theme: string;
    description: string;
  }
  const [searchDevotional, setSearchDevotional] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/search_events?search=devotional"
        );
        console.log(response.data);
        setSearchDevotional(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching devotional data:", error);
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function (optional)
    return () => {
      // Any cleanup code here
      console.log("Cleaning up...");
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!searchDevotional) {
    return <div>No devotional data available</div>;
  }

  return (
    <>
      <div className="container-fluid d-flex">
        <Views />
        {searchDevotional.map((item, index) => (
          <div style={{ marginLeft: "20px", marginTop: "10px" }} key={index}>
            <img
              src={`http://localhost:3000${item.poster}`}
              className="img-fluid rounded-top"
              alt="devotionals"
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
    </>
  );
}
