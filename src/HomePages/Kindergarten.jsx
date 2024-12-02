import React from "react";
import "../HomePages/Kindergarten.css";

function Kindergarten() {
    return (
        <>
            <div className="container-fluid py-5" id="kinder">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="admission-section">
                                <h1 className="admission-heading">Kindergarten Admission call to action</h1>
                                <div className="form-container">
                                    <input type="text" placeholder="Your Name" className="input-field" />
                                    <input type="email" placeholder="Your Email" className="input-field" />
                                    <button className="submit-button">SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Kindergarten;
