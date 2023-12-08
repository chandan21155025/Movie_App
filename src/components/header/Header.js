import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerleft">
        <Link to="/">
          <img
            className="header_icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/60px-IMDB_Logo_2016.svg.png"
            alt=""
          />
        </Link>

        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>{" "}
        </Link>

        <Link to="/movies/top-rated" style={{ textDecoration: "none" }}>
          <span>Top_Rated</span>{" "}
        </Link>

        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Header;
