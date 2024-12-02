import { BsStopwatch } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import "../HomePages/LatestEvents.css"
function LatestEvents() {
    return (
        <>
            <div className="container-fluid py-5" id="latest">
                <div className="container">
                <div className="row">
                    <div className="col-12 text-center py-5">
                        <h2>Latest Events</h2>
                        <p>Etiam porttitor risus massa nec condiment gravida nibh vel velit auctor aliquetnean sollicitudin, <br /> lorem quis bibendum auci elit consequatipsutis sem nibh id elit.
                        </p>

                    </div>
                    <div className="col-12">
                        <div class="card-group ">
                            <div class="card playimg m-2">
                                <img src="public/homeimg/event-1.jpg" class="card-img-top position-relative" alt="..." />
                                <div className="p-2 position-absolute top-0 left-0 bgco text-white">
                                    <h2>22 <br></br>Oct</h2>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Science Nature Day</h5><hr />
                                    <p class="card-text"><BsStopwatch /> &nbsp; October 22, 2024 @ 8:00 am - October 22, 2029 @ 6:00 pm</p>
                                    <p class="card-text"><MdLocationOn /> &nbsp; 354 Shuter St Toronto</p>
                                </div>
                            </div>
                            <div class="card playimg m-2">
                                <img src="public/homeimg/event-2.jpg" class="card-img-top" alt="..." />
                                <div className="p-2 position-absolute top-0 left-0 bgco text-white">
                                    <h2>10 <br></br> Oct</h2>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Swimming For Kids</h5><hr />
                                    <p class="card-text"><BsStopwatch /> &nbsp; October 10, 2024 @ 9:00 am - October 10, 2029 @ 11:30 pm</p>
                                    <p class="card-text"><MdLocationOn /> &nbsp; 244 Lisgar St Toronto</p>
                                </div>
                            </div>
                            <div class="card playimg m-2">
                                <img src="public/homeimg/event-3.jpg" class="card-img-top" alt="..." />
                                <div className="p-2 position-absolute top-0 left-0 bgco text-white">
                                    <h2>22 <br></br> Oct</h2>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title pt2">Eagle Heights</h5><hr />
                                    <p class="card-text"><BsStopwatch /> &nbsp; November 22, 2024 @ 9:00 am - November 22, 2029 @ 5:00 pm</p>
                                    <p class="card-text"><MdLocationOn /> &nbsp; 354 Shuter St Toronto</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>


        </>
    )

} export default LatestEvents