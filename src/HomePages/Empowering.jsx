import React, { useEffect, useState } from "react";
import "../HomePages/Empowering.css";

function Empowering() {
    const [successStories, setSuccessStories] = useState(0);
    const [scheduledEvents, setScheduledEvents] = useState(0);

    const targetSuccessStories = 168;
    const targetScheduledEvents = 347;

    // Count-up function
    const countUp = (target, setter, duration) => {
        let start = 0;
        const increment = target / (duration / 10); // Increment based on duration

        const interval = setInterval(() => {
            start += increment;
            if (start >= target) {
                setter(target); // Stop at the target value
                clearInterval(interval);
            } else {
                setter(Math.ceil(start));
            }
        }, 10);
    };

    useEffect(() => {
        // Trigger count-up when the component mounts
        countUp(targetSuccessStories, setSuccessStories, 2000);
        countUp(targetScheduledEvents, setScheduledEvents, 2000);
    }, []); // Empty dependency array ensures it runs only once when mounted

    return (
        <>
            <div className="container-fluid Eimg d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        {/* Left Image and Video Button */}
                        <div className="col-12 col-lg-6 position-relative">
                            <img
                                src="public/homeimg/h1-image.jpg"
                                alt="Empowering"
                                className="w-100 img-fluid"
                            />
                            <img
                                src="public/homeimg/video-button-1.png"
                                alt="Play Video"
                                className="video-button position-absolute top-50 start-50"
                            />
                        </div>
                        {/* Right Content Section */}
                        <div className="col-12 col-lg-6 pcolor">
                            <h2 className="pcolor2">Empowering Children to reach their potential.</h2>
                            <br />
                            <p>
                                Etiam porttitor risus massa nec codiment gravinda nibh vel
                                <br />
                                velit auctor aliquetnean sollicitudin, lorem quis bibendum auci
                                <br />
                                elit consequatipsutis sem nibh id sed odio sit amet nibh
                            </p>
                            <div className="d-flex g-5">
                                <div className="me-5 textcolor">
                                    <h2>{successStories}</h2>
                                    <p>Success Stories</p>
                                </div>
                                <div className="ms-5 textcolor">
                                    <h2>{scheduledEvents}</h2>
                                    <p>Scheduled Events</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Empowering;
