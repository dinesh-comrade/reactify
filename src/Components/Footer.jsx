/* eslint-disable jsx-a11y/anchor-is-valid */
import structure from "../Assets/structure.png";
import facebook from "../Assets/facebook.png";
import instagram from "../Assets/instagram.png";
import twitter from "../Assets/twitter.png";
import linkedin from "../Assets/linkedin.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-wrapper">
      <footer>
        <div className="footer-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <img
                  src={structure}
                  alt="Logo"
                  width={24}
                  height={20}
                  className="d-inline-block align-text-center me-2 mb-2"
                />
                <span className="footer-logo-text mb-5">Reactify</span>
                <p className="footer-para mt-3 mb-3">
                  Reactify is a cutting-edge, user-friendly e-commerce platform
                  that brings the world of shopping right to your fingertips.
                  Shop with us and experience e-commerce like never before.
                </p>
                <div className="footer-icons">
                  <img src={facebook} alt="facebook" className="footer-icon" />
                  <img
                    src={instagram}
                    alt="instagram"
                    className="footer-icon ms-2"
                  />
                  <img
                    src={twitter}
                    alt="twitter"
                    className="footer-icon ms-2"
                  />
                  <img
                    src={linkedin}
                    alt="linkedin"
                    className="footer-icon ms-2"
                  />
                </div>
              </div>
              <div className="col-lg-2 offset-1 mt-2">
                <h4 className="footer-headings">Our Partners</h4>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <a href="#" className="footer-list-link">
                      Adidas
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-list-link">
                      Puma
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-list-link">
                      Titans
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-list-link">
                      US Polo
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-list-link">
                      Nike
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-list-link">
                      Woodland
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2">
                <h4 className="footer-headings mt-2">Reactify</h4>
                <ul className="footer-list">
                  <Link to="/">
                    <li className="footer-list-item">Home</li>
                  </Link>
                  <Link to="/products">
                    <li className="footer-list-item">Products</li>
                  </Link>
                  <Link to="/login">
                    <li className="footer-list-item">Contact Us</li>
                  </Link>
                </ul>
              </div>
              <div className="col-lg-4">
                <h4 className="footer-headings mt-2">Stay in the loop</h4>
                <p className="footer-subscribe mt-2 mb-3">
                  Join our mailing list to get updates about new products, deals
                  and offers!
                </p>
                <form className="footer-form">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      placeholder="Enter your email address"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn btn-success rounded-pill px-3 py-2 ms-3"
                      type="button"
                      id="button-addon2"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <hr className="footer-divider" />
            <div className="copyright">
              <p className="copyright-text text-center">
                Copyright © 2024 Reactify
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { Footer };
