/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import structure from "../Assets/structure.png";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={structure}
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top me-1 ms-2"
          ></img>
          Reactify
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link to="/reactify">
              <li className="nav-item mt-2">Home</li>
            </Link>
            <Link to="/products">
              <li className="nav-item mt-2 me-4">Products</li>
            </Link>
            <Link to="/login">
              <button
                className="btn btn-success rounded-pill px-4 py-2"
                type="button"
              >
                Contact Us
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { Navigation };
