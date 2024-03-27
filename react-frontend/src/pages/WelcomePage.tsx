import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="container">
      <header>
        <h1>Welcome to DivineDestinyConnect</h1>
        <p>Thank you for signing up!</p>
      </header>
      <div className="content">
        <p>
          We are excited to have you join our community. Begin your spiritual
          journey now!
        </p>
        <Link to="/" className="btn btn-primary">
          Explore
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
