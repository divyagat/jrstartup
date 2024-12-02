import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/footer.css"
const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4 footer ">
      <div className="container footer">
        <div className="row">
          {/* Educate Section */}
          <div className="col-md-3 gy-3">
            <h5>Educate</h5>
            <p>
              Providing Life Changing Experiences Through Education. Class That
              Fit Your Busy Life. Closer to Home.
            </p>
            <p>
              <i className="bi bi-telephone"></i> 1-677-124-44227
            </p>
            <p>
              <i className="bi bi-clock"></i> Mon - Sat 8.00 - 18.00
            </p>
          </div>
          {/* Latest News Section */}
          <div className="col-md-3 ps-5 gy-3">
            <h5>Latest News</h5>
            <ul className="list-unstyled gy-5">
              <li>Graduate Admissions</li>
              <li>Continuing Education</li>
              <li>Current Students</li>
            </ul>
          </div>
          {/* Useful Links Section */}
          <div className="col-md-3 gy-3">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li>Popular Courses</li>
              <li>Forums</li>
              <li>Our Teachers</li>
              <li>Upcoming Events</li>
              <li>Contact Us</li>
            </ul>
          </div>
          {/* Flexible Learning Section */}
          <div className="col-md-3 text-center">
            <h5>Flexible Learning</h5><br />
            <img
              src="public/footer/footer-map-1.png" // Replace with map image URL
              alt="Map"
              className="img-fluid"
            />
          </div>
        </div>
        <hr />
        {/* Bottom Footer */}
        <div className="d-flex justify-content-between">
          <p>© 2017 QODE INTERACTIVE, ALL RIGHTS RESERVED</p>
          <p>
            CALL: +44 300 303 0266 FOLLOW US: 
            <i className="bi bi-facebook mx-1"></i>
            <i className="bi bi-twitter mx-1"></i>
            <i className="bi bi-pinterest mx-1"></i>
            <i className="bi bi-instagram mx-1"></i>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
