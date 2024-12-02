// <<<<<<< Updated upstream
// import { FaBaseballBall } from "react-icons/fa";
// import Shop from "./Shop";
import PlayTime from "../HomePages/PlayTime";
import Learningpage from "../HomePages/Learningpage";
import LatestEvents from "../HomePages/LatestEvents";
import React from "react";
import "../pages/home.css";
import PlaygroundSection from "../HomePages/PlaygroundSection";
import Empowering from "../HomePages/Empowering";
import PopularCourses from "../HomePages/PopularCourses";
import Kindergarten from "../HomePages/Kindergarten";


const Home = () => {
  return (
    <>

      <div className="container-fluid pt-5">

        <div className="row">
          <div className="col-12">
            <div id="preschoolCarousel" className="carousel slide" data-bs-ride="carousel">
              {/* Indicators */}
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#preschoolCarousel"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#preschoolCarousel"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
              </div>

              {/* Slides */}
              <div className="carousel-inner">
                {/* Slide 1 */}
                <div className="carousel-item active">
                  <div className="carousel-content px-5 d-flex align-items-center justify-content-between">
                    <div className="text-content ps-5">
                      <h1 className="title">Discover New Adventures</h1>
                      <p className="description">
                        Give your child the perfect learning experience through our
                        preschool curriculum.
                      </p>
                      <button className="btn btn-warning">EXPLORE MORE</button>
                    </div>
                    <div className="imagecontent ">
                      <img
                        src="public/homeimg/h1-slide-image-5.png" // Replace with actual illustration
                        alt="Adventure Illustration"
                        className="d-block w-75"
                      />
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="carousel-item">
                  <div className="carousel-content px-5 d-flex align-items-center justify-content-between">
                    <div className="text-content ps-5">
                      <h1 className="title">Discover New Adventures</h1>
                      <p className="description">
                        Give your child the perfect learning experience through our
                        preschool curriculum.
                      </p>
                      <button className="btn btn-warning">EXPLORE MORE</button>
                    </div>
                    <div className="imagecontent ">
                      <img
                        src="public/homeimg/h1-slide-image-5.png" // Replace with actual illustration
                        alt="Adventure Illustration"
                        className="d-block w-75"
                      />
                    </div>
                  </div>
                </div>
                
              </div>

              {/* Controls */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#preschoolCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#preschoolCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

<PlaygroundSection/>
{/* >>>>>>> Stashed changes */}
{/* < Updated upstream */}
        <PlayTime/>
        <Learningpage/>
        <LatestEvents/>
        <Empowering/>
        <PopularCourses/>
        <Kindergarten/>
    </>
  );
};

export default Home;
