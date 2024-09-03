import { useEffect, useState } from "react";
import Views from "./Seachbar";
import axios from "axios";

export default function Prayer() {
  interface Event {
    poster: string;
    theme: string;
    description: string;
  }

  const [searchPrayer, setSearchPrayer] = useState<Event[]>([]);

  useEffect(() => {
    const handlePrayerSearch = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/search_events?search=prayer"
        );
        setSearchPrayer(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching data");
      }
    };

    handlePrayerSearch();
  }, []);

  return (
    <div className="container-fluid d-flex">
      <Views />
      {searchPrayer.map((item, idx) => (
        <div style={{ marginLeft: "20px", marginTop: "10px" }} key={idx}>
          <img
            src={`http://localhost:3000${item.poster}`}
            className="img-fluid rounded-top"
            alt="prayer"
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
  );
}
