import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  return (
    <div className="container">
      <header>
        <h1>Welcome to DivineDestinyConnect</h1>
        <p>Begin your spiritual journey here</p>
      </header>
      <div className="content">
        <img
          src="https://via.placeholder.com/1600x400"
          alt="DivineDestinyConnect"
          className="img-fluid"
        />
        <p>
          DivineDestinyConnect is a platform designed to help you embark on a
          transformative spiritual journey. Whether you are seeking guidance,
          inspiration, or community, we provide the tools and resources to
          support you along the way.
        </p>
      </div>
      <footer className="mt-auto">
        <div className="text-center">
          <Link to="/login" className="btn btn-primary me-3">
            <FontAwesomeIcon icon={faSignInAlt} className="me-1" />
            Login
          </Link>
          <Link to="/signup" className="btn btn-success">
            <FontAwesomeIcon icon={faUserPlus} className="me-1" />
            Sign Up
          </Link>
        </div>
        <figure className="text-center mt-5">
          <blockquote className="blockquote">
            <p>
              {" "}
              Who gave himself for us, that he might redeem us from all <br />
              iniquity, and purify unto himself a peculiar people, <br />
              zealous of good works.
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Titus<cite title="Source Title">2 verse 14</cite>
          </figcaption>
        </figure>
      </footer>
    </div>
  );
};

export default LandingPage;
