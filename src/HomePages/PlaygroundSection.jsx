import React from "react";
import "./PlaygroundSection.css"; // Add custom styles here if necessary

const PlaygroundSection = () => {
  return (
    <div className="container  ">
      <div className="row text-center">
        {/* Playground Card */}
        <div className="col-md-4 d-flex flex-column">
          <div className="bg-warning p-4 rounded d-flex flex-column align-items-center">
            <img
              src="public/homeimg/h1-box-1.jpg" // Replace with actual image path
              alt="Playground"
              className="mb-3"
              style={{ width: "100px" }}
            />
            <h3 className="fw-bold">PLAYGROUND</h3>
            <p className="text-muted">
              Etiam ante risus pulvinar quis ornare id facilisis eu
            </p>
          </div>
        </div>

        {/* Learning Card */}
        <div className="col-md-4 d-flex flex-column align-items-center">
          <div className="bg-danger p-4 rounded d-flex flex-column align-items-center">
            <img
              src="public/homeimg/h1-box-2.png" // Replace with actual image path
              alt="Learning"
              className="mb-3"
              style={{ width: "100px" }}
            />
            <h3 className="fw-bold">LEARNING</h3>
            <p className="text-muted">
              Nunc semper est nisl non vehicula libero eleifend nec
            </p>
          </div>
        </div>

        {/* Entertainment Card */}
        <div className="col-md-4 d-flex flex-column align-items-center">
          <div className="bg-info p-4 rounded d-flex flex-column align-items-center">
            <img
              src="public/homeimg/h1-box-3.jpg" // Replace with actual image path
              alt="Entertainment"
              className="mb-3"
              style={{ width: "100px" }}
            />
            <h3 className="fw-bold">ENTERTAINMENT</h3>
            <p className="text-muted">
              Etiam ante risus pulvinar quis ornare id facilisis eu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundSection;
    