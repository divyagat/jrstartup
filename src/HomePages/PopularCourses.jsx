import { MdPeopleOutline } from "react-icons/md";
import { LuClock9 } from "react-icons/lu";
import { CiHeart } from "react-icons/ci"; // Import CiHeart

function PopularCourses() {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center py-3 pb-5">
                            <h2>Popular Courses</h2>
                            <p>
                                Etiam porttitor risus massa nec condiment gravida nibh vel velit auctor aliquetnean sollicitudin,<br />
                                lorem quis bibendum auci elit consequatipsutis sem nibh id elit.
                            </p>
                        </div>
                        <div className="col-12">
                            <div className="card-group">
                                <div className="card">
                                    <img src="/homeimg/course-img-19.jpg" className="card-img-top" alt="..." /> {/* Corrected path */}
                                    <div className="card-body">
                                        <h5 className="card-title">Basic English for Kids</h5>
                                        Melisa Jones <br />
                                        <p className="card-text mt-3">
                                            Blandit accumsan ei vis, maiorum epicurei at mei nibh viderer ius pri te fabulas molestiae necess
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary">
                                            <MdPeopleOutline />1 &nbsp; &nbsp;<LuClock9 /> 2 hours
                                        </small>
                                    </div>
                                </div>
                                <div className="card mx-2">
                                    <img src="/homeimg/course-img-16.jpg" className="card-img-top position-relative" alt="..." /> {/* Corrected path */}
                                    <div className="position-absolute end-0 top-0 bgci">
                                        <CiHeart />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Fun Yoga for Toddlers</h5>
                                        Melisa Jones <br />
                                        <p className="card-text mt-3">
                                            Blandit accumsan ei vis, maiorum epicurei at mei nibh viderer ius pri te fabulas molestiae necess
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary">
                                            <MdPeopleOutline />1 &nbsp; &nbsp;<LuClock9 /> 2 hours
                                        </small>
                                    </div>
                                </div>
                                <div className="card mx-2">
                                    <img src="/homeimg/course-img-20.jpg" className="card-img-top position-relative" alt="..." /> {/* Corrected path */}
                                    <div className="position-absolute end-0 top-0 bgci">
                                        <CiHeart />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Weekend Music Lessons</h5>
                                        Melisa Jones <br />
                                        <p className="card-text mt-3">
                                            Blandit accumsan ei vis, maiorum epicurei at mei nibh viderer ius pri te fabulas molestiae necess
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary">
                                            <MdPeopleOutline />1 &nbsp; &nbsp;<LuClock9 /> 2 hours
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PopularCourses;
